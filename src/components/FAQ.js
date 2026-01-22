'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: 'How much do you charge for a project?',
            answer: 'Pricing depends on the project scope, features, and timeline. We offer three main packages: Starter (₹XX,XXX+), Growth (₹XX,XXX+), and Enterprise (Custom Quote). Contact us for a detailed quote based on your specific requirements.',
        },
        {
            question: 'Do you work on existing apps?',
            answer: 'Absolutely! We specialize in taking over mid-way projects, re-developing existing apps, restructuring codebases, and optimizing performance. We can also add new features and fix bugs in your current application.',
        },
        {
            question: 'What is the typical timeline for an MVP?',
            answer: 'A basic MVP typically takes 7-15 days, while a more feature-rich business-ready app takes 15-30 days. Enterprise-level applications depend on the scope and complexity. We follow Agile methodology with weekly updates.',
        },
        {
            question: 'Do you provide support after delivery?',
            answer: 'Yes! All our packages include post-delivery support. Starter plan includes 7 days, Growth plan includes 15-30 days, and Enterprise plan offers long-term support options. We also provide maintenance packages for ongoing support.',
        },
        {
            question: 'Do you provide backend development too?',
            answer: 'Yes, we provide complete full-stack development. We build robust backend systems using Laravel, FastAPI, and Django with RESTful APIs, database design, authentication, and cloud deployment.',
        },
        {
            question: 'What technologies do you use?',
            answer: 'We specialize in Flutter for mobile apps, and Laravel/FastAPI/Django for backend. We also work with MySQL, PostgreSQL, Firebase, AWS, and implement CI/CD pipelines using GitHub/GitLab, Shorebird, and Fastlane.',
        },
        {
            question: 'Can you deploy the app to Play Store/App Store?',
            answer: 'Yes, we handle complete deployment to Play Store and App Store. We set up CI/CD pipelines using Shorebird/Fastlane for automated deployments and provide production-ready setup.',
        },
        {
            question: 'Do you work remotely or on-site?',
            answer: 'We work both remotely and on-site based on client requirements. We are based in Mumbai, India, and available for remote projects worldwide. We maintain excellent communication through regular updates and meetings.',
        },
    ]

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faqs" className="section-padding bg-gradient-to-b from-transparent to-slate-900/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Got questions? We've got answers
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="card hover-glow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left"
                            >
                                <h3 className="text-lg font-bold pr-4">{faq.question}</h3>
                                <FaChevronDown
                                    className={`text-primary-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Still Have Questions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center glass p-8 rounded-2xl"
                >
                    <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                    <p className="text-gray-400 mb-6">
                        Can't find the answer you're looking for? Feel free to reach out to us directly.
                    </p>
                    <button
                        onClick={() => {
                            const element = document.querySelector('#contact')
                            if (element) element.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="btn-primary"
                    >
                        Contact Us
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
