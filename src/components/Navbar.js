'use client'

import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'

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

    const navItems = [
        { name: 'About me', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ]

    const socialLinks = [
        { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com/in/mohd-ansari-atif-56512a20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
        { icon: <FaGithub size={24} />, href: 'https://github.com/Atif007cr7' },
        { icon: <FaInstagram size={24} />, href: 'https://www.instagram.com/ansari_mohd_atif?igsh=MWgwcjJ5MzM1NXpubg%3D%3D&utm_source=qr' },
    ]

    return (
        <nav className="fixed w-full h-[65px] top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto">
                <a href="#home" className="h-auto w-auto flex flex-row items-center">
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300 hover:text-white transition-colors">
                        ANSARI ATIF
                    </span>
                </a>

                <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="cursor-pointer hover:text-[#a855f7] transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row gap-5">
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
                <div className="md:hidden absolute top-[65px] left-0 w-full bg-[#030014] border-b border-[#7042f861] p-4 flex flex-col items-center gap-4">
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
