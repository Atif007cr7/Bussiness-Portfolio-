'use client'

import { FaDownload, FaRocket, FaCode, FaUsers } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Hero() {
    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const highlights = [
        { icon: <FaCode />, text: 'Flutter Apps Delivered' },
        { icon: <FaRocket />, text: 'Backend + APIs' },
        { icon: <FaUsers />, text: 'Team + Agile Delivery' },
    ]

    return (
        <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 leading-tight">
                            I build <span className="gradient-text">scalable mobile apps</span> & backend systems that grow your business
                        </h1>
                        <p className="text-base md:text-lg text-gray-400 mb-8">
                            Flutter + Backend (Laravel / FastAPI / Django)
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <button
                                onClick={() => scrollToSection('#contact')}
                                className="btn-primary"
                            >
                                <FaRocket className="inline mr-2" />
                                Get Quote
                            </button>
                            <button
                                onClick={() => scrollToSection('#projects')}
                                className="btn-secondary"
                            >
                                View Projects
                            </button>
                            <a
                                href="/resume.pdf"
                                download
                                className="btn-secondary flex items-center"
                            >
                                <FaDownload className="mr-2" />
                                Download Resume
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">3+</div>
                                <div className="text-sm text-gray-400">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">5+</div>
                                <div className="text-sm text-gray-400">Apps Deployed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">Agile</div>
                                <div className="text-sm text-gray-400">CI/CD Ready</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">Team</div>
                                <div className="text-sm text-gray-400">Support</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="gradient-border max-w-md w-full">
                            <div className="gradient-border-content text-center">
                                {/* Profile Photo */}
                                <div className="mb-6 flex justify-center">
                                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-maroon to-maroon-dark p-1">
                                        <img
                                            src="/profile.png"
                                            alt="Ansari Mohd Atif"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Profile Info */}
                                <h2 className="text-3xl font-bold mb-2">Ansari Mohd Atif</h2>
                                <p className="text-xl text-primary-400 mb-2">
                                    Full Stack Developer | Flutter Specialist
                                </p>
                                <p className="text-gray-400 mb-4">3+ Years Experience</p>
                                <p className="text-gray-400 mb-6">
                                    📍 Mumbai, India | Available for Remote + On-site
                                </p>

                                {/* Highlights */}
                                <div className="space-y-3">
                                    {highlights.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-center gap-3 text-gray-300"
                                        >
                                            <span className="text-primary-400 text-xl">{item.icon}</span>
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-maroon rounded-full opacity-20 blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-maroon-light rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </section>
    )
}
