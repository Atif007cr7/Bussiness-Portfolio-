'use client'

import { motion } from 'framer-motion'
import {
    FaMobileAlt,
    FaServer,
    FaTools,
    FaRocket,
    FaCogs,
    FaShieldAlt,
    FaChartLine,
} from 'react-icons/fa'

export default function Services() {
    const services = [
        {
            icon: <FaMobileAlt />,
            title: 'Flutter App Development',
            description: 'Build beautiful, high-performance cross-platform mobile applications for iOS and Android with a single codebase.',
            features: ['Custom UI/UX', 'State Management', 'Native Performance', 'Play Store Deployment'],
        },
        {
            icon: <FaServer />,
            title: 'Backend Development',
            description: 'Robust and scalable backend systems using Laravel, FastAPI, and Django with RESTful APIs.',
            features: ['REST APIs', 'Database Design', 'Authentication', 'Cloud Deployment'],
        },
        {
            icon: <FaChartLine />,
            title: 'Admin Panels & Dashboards',
            description: 'Comprehensive admin panels and analytics dashboards for managing your applications and data.',
            features: ['Real-time Analytics', 'User Management', 'Role-based Access', 'Data Visualization'],
        },
        {
            icon: <FaCogs />,
            title: 'API Integration',
            description: 'Seamless integration of third-party APIs and services to extend your application functionality.',
            features: ['Payment Gateways', 'Social Media', 'Cloud Services', 'Custom APIs'],
        },
        {
            icon: <FaTools />,
            title: 'Maintenance & Support',
            description: 'Ongoing maintenance, bug fixes, and feature updates to keep your application running smoothly.',
            features: ['Bug Fixing', 'Performance Optimization', 'Security Updates', '24/7 Support'],
        },
        {
            icon: <FaShieldAlt />,
            title: 'App Optimization',
            description: 'Improve app performance, reduce load times, and enhance user experience with optimization techniques.',
            features: ['Code Refactoring', 'Performance Tuning', 'UI Improvements', 'Load Optimization'],
        },
        {
            icon: <FaRocket />,
            title: 'Deployment & CI/CD',
            description: 'Professional deployment setup with continuous integration and delivery pipelines for smooth releases.',
            features: ['GitHub/GitLab CI/CD', 'Automated Testing', 'Shorebird/Fastlane', 'Production Setup'],
        },
    ]

    const offerings = [
        'Projects from scratch',
        'Mid-way project takeover',
        'Existing app re-development',
        'App re-structuring & optimization',
        'UI improvements & performance',
        'Bug fixing + feature upgrades',
        'Deployment + post-launch support',
    ]

    return (
        <section id="services" className="section-padding bg-gradient-to-b from-slate-900/50 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Services <span className="gradient-text">We Offer</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Comprehensive development services to bring your ideas to life
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card hover-glow"
                        >
                            <div className="text-5xl text-primary-400 mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 mb-4">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* What We Can Deliver */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-8 md:p-12"
                >
                    <h3 className="text-3xl font-bold mb-8 text-center">
                        What <span className="gradient-text">We Can Deliver</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {offerings.map((offering, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors duration-300"
                            >
                                <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-500 rounded-full"></div>
                                <span className="text-gray-300">{offering}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
