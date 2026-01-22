'use client'

import { useState, useEffect } from 'react'
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa'

export default function FloatingButtons() {
    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const openWhatsApp = () => {
        window.open('https://wa.me/918850003494?text=Hi, I would like to discuss a project', '_blank')
    }

    return (
        <>
            {/* WhatsApp Button */}
            <button
                onClick={openWhatsApp}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                title="Chat on WhatsApp"
            >
                <FaWhatsapp className="text-2xl" />
            </button>

            {/* Back to Top Button */}
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title="Back to Top"
                >
                    <FaArrowUp className="text-xl" />
                </button>
            )}
        </>
    )
}
