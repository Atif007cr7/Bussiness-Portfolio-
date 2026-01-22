'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeControls from './ThemeControls'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Process', href: '#process' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQs', href: '#faqs' },
        { name: 'Contact', href: '#contact' },
    ]

    const scrollToSection = (href) => {
        setIsOpen(false)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('#home')
                            }}
                            className="text-xl md:text-2xl font-bold font-display gradient-text"
                        >
                            CodeWithAtif
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(item.href)
                                }}
                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium hover:border-b-2 border-[var(--accent)] pb-1"
                            >
                                {item.name}
                            </a>
                        ))}
                        <ThemeControls />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-4 glass rounded-lg p-4">
                        <div className="flex flex-col space-y-4">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        scrollToSection(item.href)
                                    }}
                                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="border-t border-gray-700 pt-4">
                                <ThemeControls isMobile={true} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
