'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const accentColors = [
    { name: 'Maroon', value: '#800020', light: '#a0002a', dark: '#600018' },
    { name: 'Red', value: '#DC2626', light: '#EF4444', dark: '#B91C1C' },
    { name: 'Blue', value: '#2563EB', light: '#3B82F6', dark: '#1D4ED8' },
    { name: 'Green', value: '#16A34A', light: '#22C55E', dark: '#15803D' },
    { name: 'Purple', value: '#7C3AED', light: '#8B5CF6', dark: '#6D28D9' },
    { name: 'Orange', value: '#EA580C', light: '#F97316', dark: '#C2410C' },
]

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')
    const [accentColor, setAccentColor] = useState(accentColors[0])
    const [customColor, setCustomColor] = useState('')

    useEffect(() => {
        // Load saved preferences
        const savedTheme = localStorage.getItem('theme') || 'dark'
        const savedAccent = localStorage.getItem('accentColor')
        const savedCustom = localStorage.getItem('customAccentColor')

        setTheme(savedTheme)

        if (savedCustom) {
            setCustomColor(savedCustom)
            applyTheme(savedTheme, null, savedCustom)
        } else if (savedAccent) {
            const accent = accentColors.find(c => c.value === savedAccent) || accentColors[0]
            setAccentColor(accent)
            applyTheme(savedTheme, accent)
        } else {
            applyTheme(savedTheme, accentColors[0])
        }
    }, [])

    const applyTheme = (newTheme, accent = accentColor, custom = customColor) => {
        const root = document.documentElement
        const accentToUse = custom || (accent?.value || accentColor.value)
        const accentLight = custom || (accent?.light || accentColor.light)
        const accentDark = custom || (accent?.dark || accentColor.dark)

        if (newTheme === 'dark') {
            root.style.setProperty('--bg', '#0B0B0B')
            root.style.setProperty('--bg-secondary', '#141414')
            root.style.setProperty('--text', '#FFFFFF')
            root.style.setProperty('--text-secondary', '#A0A0A0')
            root.style.setProperty('--card', 'rgba(20, 20, 20, 0.8)')
            root.style.setProperty('--border', 'rgba(128, 128, 128, 0.2)')
        } else {
            root.style.setProperty('--bg', '#FFFFFF')
            root.style.setProperty('--bg-secondary', '#F5F5F5')
            root.style.setProperty('--text', '#0B0B0B')
            root.style.setProperty('--text-secondary', '#666666')
            root.style.setProperty('--card', 'rgba(255, 255, 255, 0.9)')
            root.style.setProperty('--border', 'rgba(0, 0, 0, 0.1)')
        }

        root.style.setProperty('--accent', accentToUse)
        root.style.setProperty('--accent-light', accentLight)
        root.style.setProperty('--accent-dark', accentDark)
        root.style.setProperty('--accent-soft', `${accentToUse}20`)
    }

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        applyTheme(newTheme)
    }

    const changeAccentColor = (color) => {
        setAccentColor(color)
        setCustomColor('')
        localStorage.setItem('accentColor', color.value)
        localStorage.removeItem('customAccentColor')
        applyTheme(theme, color, '')
    }

    const changeCustomColor = (color) => {
        setCustomColor(color)
        localStorage.setItem('customAccentColor', color)
        localStorage.removeItem('accentColor')
        applyTheme(theme, null, color)
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                accentColor,
                customColor,
                toggleTheme,
                changeAccentColor,
                changeCustomColor,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context
}
