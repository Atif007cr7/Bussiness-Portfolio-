'use client'

import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes, FaDownload, FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '@/context/ThemeContext'

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'About', href: '#home' },
        { name: 'Team', href: '#team' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ]

    const socialLinks = [
        { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com/in/mohd-ansari-atif-56512a20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
        { icon: <FaGithub size={24} />, href: 'https://github.com/Atif007cr7' },
        { icon: <FaInstagram size={24} />, href: 'https://www.instagram.com/ansari_mohd_atif?igsh=MWgwcjJ5MzM1NXpubg%3D%3D&utm_source=qr' },
    ]

    return (
        <nav className={`fixed w-full h-[65px] top-0 shadow-lg z-50 px-4 md:px-10 transition-all duration-300 ${isScrolled ? 'bg-[#03001417] backdrop-blur-md shadow-[#2A0E61]/50' : 'bg-transparent'}`}>
            <div className="w-full h-full flex flex-row items-center justify-between m-auto">
                <a href="#home" className="h-auto w-auto flex flex-row items-center">
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300 hover:text-white transition-colors">
                        ANSARI ATIF
                    </span>
                </a>

                <div className="hidden md:flex w-fit h-full flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="cursor-pointer hover:text-[#a855f7] transition-colors whitespace-nowrap"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row gap-5 items-center">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full border border-[#7042f861] text-gray-300 hover:text-white hover:bg-[#a855f7]/20 transition-all duration-300"
                        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>

                    <a
                        href="/resume.pdf"
                        download
                        className="hidden md:flex items-center gap-2 px-4 py-1.5 border border-[#a855f7] rounded-full text-gray-300 hover:text-white hover:bg-[#a855f7]/20 transition-all duration-300 text-sm font-medium"
                    >
                        <FaDownload size={14} />
                        Resume
                    </a>
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-[#a855f7] transition-colors cursor-pointer"
                        >
                            {link.icon}
                        </a>
                    ))}

                    {/* Mobile Menu Button - Only visible on small screens */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none ml-4"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-[65px] left-0 w-full bg-[var(--bg)] border-b border-[#7042f861] p-4 flex flex-col items-center gap-4 shadow-xl">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-[#a855f7] transition-colors text-lg"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}
