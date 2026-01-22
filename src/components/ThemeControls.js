'use client'

import { useState } from 'react'
import { FaSun, FaMoon, FaPalette, FaTimes } from 'react-icons/fa'
import { useTheme, accentColors } from '@/context/ThemeContext'

export default function ThemeControls({ isMobile = false }) {
    const { theme, accentColor, customColor, toggleTheme, changeAccentColor, changeCustomColor } = useTheme()
    const [showColorPicker, setShowColorPicker] = useState(false)

    return (
        <div className={`flex items-center gap-3 ${isMobile ? 'flex-col w-full' : ''}`}>
            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${isMobile ? 'w-full justify-center' : ''
                    } hover:bg-gray-800/50`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
                {theme === 'dark' ? (
                    <>
                        <FaSun className="text-yellow-400" size={18} />
                        {isMobile && <span>Light Mode</span>}
                    </>
                ) : (
                    <>
                        <FaMoon className="text-blue-500" size={18} />
                        {isMobile && <span>Dark Mode</span>}
                    </>
                )}
            </button>

            {/* Color Picker Toggle */}
            <div className="relative">
                <button
                    onClick={() => setShowColorPicker(!showColorPicker)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${isMobile ? 'w-full justify-center' : ''
                        } hover:bg-gray-800/50`}
                    title="Change accent color"
                >
                    <FaPalette style={{ color: customColor || accentColor.value }} size={18} />
                    {isMobile && <span>Accent Color</span>}
                </button>

                {/* Color Picker Dropdown */}
                {showColorPicker && (
                    <div className={`absolute ${isMobile ? 'left-0 right-0' : 'right-0'} mt-2 p-4 glass rounded-lg shadow-xl z-50 min-w-[280px]`}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-sm">Choose Accent Color</h3>
                            <button
                                onClick={() => setShowColorPicker(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <FaTimes size={16} />
                            </button>
                        </div>

                        {/* Preset Colors */}
                        <div className="grid grid-cols-3 gap-3 mb-4">
                            {accentColors.map((color) => (
                                <button
                                    key={color.value}
                                    onClick={() => {
                                        changeAccentColor(color)
                                        if (!isMobile) setShowColorPicker(false)
                                    }}
                                    className={`relative w-full h-12 rounded-lg transition-all duration-200 hover:scale-110 ${accentColor.value === color.value && !customColor
                                            ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900'
                                            : ''
                                        }`}
                                    style={{ backgroundColor: color.value }}
                                    title={color.name}
                                >
                                    {accentColor.value === color.value && !customColor && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-white text-xl">✓</span>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Custom Color Input */}
                        <div>
                            <label className="block text-xs text-gray-400 mb-2">Custom Color</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    value={customColor || accentColor.value}
                                    onChange={(e) => changeCustomColor(e.target.value)}
                                    className="w-full h-10 rounded cursor-pointer"
                                />
                                {customColor && (
                                    <button
                                        onClick={() => {
                                            changeAccentColor(accentColors[0])
                                            if (!isMobile) setShowColorPicker(false)
                                        }}
                                        className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-xs"
                                    >
                                        Reset
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
