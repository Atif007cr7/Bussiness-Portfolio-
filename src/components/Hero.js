'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaCode, FaLaptopCode } from 'react-icons/fa'
import { SiFlutter, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiFirebase, SiPython, SiDart, SiDocker } from 'react-icons/si'

export default function Hero() {
    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const orbitingIcons = [
        { Icon: SiFlutter, color: '#02569B', delay: '0s' },
        { Icon: SiReact, color: '#61DAFB', delay: '2s' },
        { Icon: SiNextdotjs, color: '#FFFFFF', delay: '4s' },
        { Icon: SiPython, color: '#3776AB', delay: '6s' },
        { Icon: SiFirebase, color: '#FFCA28', delay: '8s' },
        { Icon: SiDart, color: '#0175C2', delay: '10s' },
    ]

    return (
        <section id="home" className="relative flex flex-col h-screen w-full overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-[-250px] left-1/2 transform -translate-x-1/2 w-[800px] h-[500px] bg-primary/30 rounded-full blur-[120px] -z-10"></div>

            <div className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-20 mt-20 md:mt-40 w-full z-[20]">
                {/* Left Content */}
                <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] rounded-full w-fit glass"
                    >
                        <h1 className="text-[#b49bff] text-[13px] flex items-center gap-2">
                            <FaCode className="text-secondary" />
                            Full Stack Developer Portfolio
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto leading-tight"
                    >
                        <span>
                            Providing
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> the best </span>
                            project experience
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-gray-400 my-5 max-w-[600px]"
                    >
                        I&apos;m a Full Stack Software Engineer with expertise in Flutter, Website, and Backend development. Check out my projects and skills below.
                    </motion.p>

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-4"
                    >
                        <button
                            onClick={() => scrollToSection('#projects')}
                            className="btn-primary cursor-pointer max-w-[200px] z-50 pointer-events-auto"
                        >
                            Learn More!
                        </button>
                    </motion.div>
                </div>

                {/* Right Content - Orbit Effects */}
                <div className="w-full lg:w-1/2 h-full flex justify-center items-center mt-20 lg:mt-0 relative">
                    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                        {/* Center Icon */}
                        <div className="absolute w-24 h-24 bg-[var(--bg)] rounded-full border border-primary/50 flex items-center justify-center z-20 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                            <FaLaptopCode size={40} className="text-[var(--text)]" />
                        </div>

                        {/* Orbit Rings */}
                        <div className="absolute w-[400px] h-[400px] border border-primary/20 rounded-full animate-spin-slow"></div>
                        <div className="absolute w-[300px] h-[300px] border border-accent/20 rounded-full animate-reverse-spin"></div>

                        {/* Orbiting Icons */}
                        <div className="absolute w-full h-full animate-spin-slow">
                            {orbitingIcons.map((item, index) => {
                                const angle = (index * 360) / orbitingIcons.length;
                                const radius = 180; // Distance from center
                                const rotateStyles = {
                                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
                                };

                                return (
                                    <div
                                        key={index}
                                        className="absolute top-1/2 left-1/2 -ml-6 -mt-6 w-12 h-12 bg-[var(--bg)] border border-[#7042f861] rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300"
                                        style={rotateStyles}
                                    >
                                        <item.Icon size={24} color={item.color} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
