'use client'

import { motion } from 'framer-motion'
import {
    FaClipboardList,
    FaPalette,
    FaCode,
    FaCheckCircle,
    FaRocket,
    FaHeadset,
} from 'react-icons/fa'

export default function Process() {
    const steps = [
        {
            icon: <FaClipboardList />,
            title: 'Requirement Gathering',
            description: 'We start by understanding your vision, goals, and specific requirements to create a detailed project scope.',
            number: '01',
        },
        {
            icon: <FaPalette />,
            title: 'UI/UX Design',
            description: 'Our designers create intuitive and visually appealing interfaces that enhance user experience.',
            number: '02',
        },
        {
            icon: <FaCode />,
            title: 'Development Sprint (Agile)',
            description: 'Iterative development with regular updates, code reviews, and continuous integration.',
            number: '03',
        },
        {
            icon: <FaCheckCircle />,
            title: 'Testing & QA',
            description: 'Comprehensive testing to ensure quality, performance, and bug-free delivery.',
            number: '04',
        },
        {
            icon: <FaRocket />,
            title: 'Deployment',
            description: 'Professional deployment to production with CI/CD pipelines and monitoring setup.',
            number: '05',
        },
        {
            icon: <FaHeadset />,
            title: 'Support & Updates',
            description: 'Ongoing maintenance, bug fixes, and feature updates to keep your app running smoothly.',
            number: '06',
        },
    ]

    return (
        <section id="process" className="section-padding bg-gradient-to-b from-slate-900/50 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        How We <span className="gradient-text">Work</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Our proven development process ensures quality delivery and client satisfaction
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line (Desktop) */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500"></div>

                    {/* Steps */}
                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className="flex-1 w-full">
                                    <div className="card hover-glow">
                                        <div className="flex items-start gap-4">
                                            <div className="text-5xl text-primary-400 flex-shrink-0">
                                                {step.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-4xl font-bold gradient-text">
                                                        {step.number}
                                                    </span>
                                                    <h3 className="text-2xl font-bold">{step.title}</h3>
                                                </div>
                                                <p className="text-gray-400">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Circle (Desktop) */}
                                <div className="hidden lg:block flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-2xl font-bold shadow-lg">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Spacer */}
                                <div className="hidden lg:block flex-1"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Development Methodology */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 glass rounded-2xl p-8"
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        Our <span className="gradient-text">Development Methodology</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                            <div>
                                <h4 className="font-bold mb-1">MVC Pattern</h4>
                                <p className="text-gray-400 text-sm">
                                    Clean separation of Frontend and Backend for maintainable code
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                            <div>
                                <h4 className="font-bold mb-1">Agile Methodology</h4>
                                <p className="text-gray-400 text-sm">
                                    Iterative development with regular client feedback
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                            <div>
                                <h4 className="font-bold mb-1">Phase-wise Development</h4>
                                <p className="text-gray-400 text-sm">
                                    Weekly updates and milestone-based delivery
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                            <div>
                                <h4 className="font-bold mb-1">Documentation & Handover</h4>
                                <p className="text-gray-400 text-sm">
                                    Complete documentation and smooth project handover
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
