'use client'

import { motion } from 'framer-motion'
import {
    FaCode,
    FaRocket,
    FaComments,
    FaShieldAlt,
    FaServer,
    FaHandshake,
} from 'react-icons/fa'

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: <FaCode />,
            title: 'Clean Code + MVC Architecture',
            description: 'Well-structured, maintainable code following industry best practices and MVC design patterns.',
        },
        {
            icon: <FaRocket />,
            title: 'Agile Sprint Delivery',
            description: 'Iterative development with regular updates, ensuring transparency and timely delivery.',
        },
        {
            icon: <FaComments />,
            title: 'Fast Communication',
            description: 'Quick response times and clear communication throughout the project lifecycle.',
        },
        {
            icon: <FaShieldAlt />,
            title: 'CI/CD + Professional Deployment',
            description: 'Automated testing and deployment pipelines for reliable and efficient releases.',
        },
        {
            icon: <FaServer />,
            title: 'Scalable Backend APIs',
            description: 'Robust and scalable backend architecture designed to grow with your business.',
        },
        {
            icon: <FaHandshake />,
            title: 'Long-term Support & Maintenance',
            description: 'Ongoing support, updates, and maintenance to ensure your app stays current.',
        },
    ]

    return (
        <section id="why-choose-us" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Why Clients <span className="gradient-text">Choose Us</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We deliver excellence through proven methodologies and unwavering commitment
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card hover-glow text-center"
                        >
                            <div className="text-5xl text-primary-400 mb-4 inline-block">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                            <p className="text-gray-400">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
