'use client'

import { motion } from 'framer-motion'
import { FaUsers, FaGlobe, FaHeart } from 'react-icons/fa'

export default function About() {
    const features = [
        {
            icon: <FaUsers />,
            title: 'Team Support',
            description: '2 Flutter Developers, 2 Backend Developers, 1 Designer',
        },
        {
            icon: <FaGlobe />,
            title: 'International Experience',
            description: 'Developed ERP & POS systems used in Dubai',
        },
        {
            icon: <FaHeart />,
            title: 'Quality Commitment',
            description: 'Clean code, proper documentation, and timely delivery',
        },
    ]

    return (
        <section id="about" className="section-padding bg-gradient-to-b from-transparent to-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Passionate full-stack developer with expertise in building scalable mobile and web applications
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-6">
                            Hi, I'm <span className="gradient-text">Ansari Mohd Atif</span>
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            With over 3 years of experience in full-stack development, I specialize in creating
                            high-performance mobile applications using Flutter and robust backend systems with
                            Laravel, FastAPI, and Django.
                        </p>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            I've successfully delivered multiple applications to the Play Store, including fashion
                            platforms, service apps, and enterprise solutions. My work includes developing an
                            ERP & POS system currently being used by businesses in Dubai.
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I lead a talented team of developers and designers, following Agile methodologies
                            and industry best practices to ensure every project exceeds expectations.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="card text-center">
                                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                                <div className="text-sm text-gray-400">Years Experience</div>
                            </div>
                            <div className="card text-center">
                                <div className="text-3xl font-bold gradient-text mb-2">5</div>
                                <div className="text-sm text-gray-400">Team Members</div>
                            </div>
                            <div className="card text-center">
                                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                                <div className="text-sm text-gray-400">Apps Deployed</div>
                            </div>
                            <div className="card text-center">
                                <div className="text-3xl font-bold gradient-text mb-2">Dubai</div>
                                <div className="text-sm text-gray-400">ERP/POS Experience</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Features */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="card hover-glow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl text-primary-400 mt-1">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
