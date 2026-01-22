'use client'

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        navigation: [
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Skills', href: '#skills' },
            { name: 'Services', href: '#services' },
            { name: 'Projects', href: '#projects' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'Process', href: '#process' },
            { name: 'Contact', href: '#contact' },
        ],
        social: [
            { icon: <FaGithub />, url: 'https://github.com/', name: 'GitHub' },
            { icon: <FaLinkedin />, url: 'https://linkedin.com/', name: 'LinkedIn' },
            { icon: <FaInstagram />, url: 'https://instagram.com/', name: 'Instagram' },
            { icon: <FaWhatsapp />, url: 'https://wa.me/918850003494', name: 'WhatsApp' },
        ],
    }

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="bg-slate-900/80 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold font-display gradient-text mb-4">
                            CodeWithAtif
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Building scalable mobile apps and backend systems that grow your business.
                        </p>
                        <p className="text-gray-400 text-sm">
                            📍 Kurla East, Mumbai 400024
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.navigation.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            scrollToSection(link.href)
                                        }}
                                        className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Get In Touch</h4>
                        <div className="space-y-2 mb-4">
                            <p className="text-gray-400 text-sm">
                                <a href="tel:+918850003494" className="hover:text-primary-400 transition-colors">
                                    +91 88500 03494
                                </a>
                            </p>
                            <p className="text-gray-400 text-sm">
                                <a href="mailto:codewithatif@gmail.com" className="hover:text-primary-400 transition-colors">
                                    codewithatif@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="flex gap-4">
                            {footerLinks.social.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl text-gray-400 hover:text-primary-400 transition-colors"
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} CodeWithAtif. All rights reserved. Made with{' '}
                        <FaHeart className="inline text-red-500" /> by Ansari Mohd Atif
                    </p>
                </div>
            </div>
        </footer>
    )
}
