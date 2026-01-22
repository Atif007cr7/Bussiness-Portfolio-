'use client'

import { motion } from 'framer-motion'
import { FaCheck, FaWhatsapp, FaStar } from 'react-icons/fa'

export default function Pricing() {
    const plans = [
        {
            name: 'Starter',
            subtitle: 'MVP Launch',
            bestFor: 'Startups & new ideas',
            price: '₹40,000 - ₹50,000',
            timeline: '7–15 days',
            features: [
                'UI screens (basic)',
                'Flutter app setup',
                'Basic API integration',
                'Authentication',
                'Basic admin panel (optional)',
                '7 days support after delivery',
            ],
            recommended: false,
        },
        {
            name: 'Growth',
            subtitle: 'Business Ready',
            bestFor: 'Businesses that need stability',
            price: '₹3,00,000 - ₹9,00,000',
            timeline: '15–30 days',
            features: [
                'Better UI/UX',
                'Complete Flutter app',
                'Backend APIs (Laravel/FastAPI/Django)',
                'Database + admin panel',
                'CI/CD setup',
                'Testing + optimization',
                '15–30 days support',
            ],
            recommended: true,
        },
        {
            name: 'Enterprise',
            subtitle: 'Scale & Custom',
            bestFor: 'Large apps / Dubai-level ERP/POS type',
            price: '₹10,00,000+',
            timeline: 'Depends on scope',
            features: [
                'Full system architecture',
                'Advanced role management',
                'Multiple modules',
                'Performance optimization',
                'Deployment pipeline',
                'Long-term support option',
            ],
            recommended: false,
        },
    ]

    const scrollToContact = () => {
        const element = document.querySelector('#contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const openWhatsApp = () => {
        window.open('https://wa.me/918850003494?text=Hi, I would like to discuss a project', '_blank')
    }

    return (
        <section id="pricing" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Pricing <span className="gradient-text">Plans</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Flexible pricing options to match your project requirements and budget
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={plan.recommended ? 'gradient-border' : ''}
                        >
                            <div className={`${plan.recommended ? 'gradient-border-content' : 'card'} hover-glow h-full flex flex-col`}>
                                {/* Recommended Badge */}
                                {plan.recommended && (
                                    <div className="flex items-center justify-center gap-2 mb-4 -mt-2">
                                        <FaStar className="text-yellow-400" />
                                        <span className="text-sm font-bold text-yellow-400">RECOMMENDED</span>
                                        <FaStar className="text-yellow-400" />
                                    </div>
                                )}

                                {/* Plan Header */}
                                <div className="text-center mb-6">
                                    <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-primary-400 font-semibold mb-2">{plan.subtitle}</p>
                                    <p className="text-sm text-gray-400 mb-4">Best for: {plan.bestFor}</p>
                                    <div className="text-2xl font-bold gradient-text mb-2">{plan.price}</div>
                                    <p className="text-sm text-gray-400">Timeline: {plan.timeline}</p>
                                </div>

                                {/* Features */}
                                <div className="flex-grow mb-6">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <FaCheck className="text-green-400 mt-1 flex-shrink-0" />
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Buttons */}
                                <div className="space-y-3">
                                    <button
                                        onClick={scrollToContact}
                                        className="w-full btn-primary"
                                    >
                                        Request Quote
                                    </button>
                                    <button
                                        onClick={openWhatsApp}
                                        className="w-full btn-secondary flex items-center justify-center gap-2"
                                    >
                                        <FaWhatsapp />
                                        WhatsApp Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Disclaimer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-gray-400 text-sm max-w-3xl mx-auto glass p-6 rounded-lg">
                        <strong>Note:</strong> Final pricing depends on requirements, features, and timeline.
                        All plans include clean code, proper documentation, and professional delivery.
                        Contact us for a detailed quote tailored to your specific needs.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
