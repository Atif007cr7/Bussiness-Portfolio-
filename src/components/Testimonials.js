'use client'

import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Rajesh Kumar',
            role: 'Startup Founder',
            company: 'Fashion Tech Startup',
            content: 'Working with Atif was an absolute pleasure. He delivered our fashion platform app ahead of schedule with exceptional quality. The app is now live on Play Store and our users love the smooth experience. Highly recommended for Flutter development!',
            rating: 5,
        },
        {
            name: 'Sarah Ahmed',
            role: 'Business Owner',
            company: 'Service Industry',
            content: 'We needed a complete overhaul of our existing app and Atif\'s team handled it perfectly. They restructured the entire codebase, improved performance significantly, and added new features. The communication was excellent throughout the project.',
            rating: 5,
        },
        {
            name: 'Mohammed Al-Rashid',
            role: 'Operations Manager',
            company: 'Dubai-based Enterprise',
            content: 'The ERP and POS system developed by Atif has transformed our business operations. The system is robust, scalable, and handles our daily operations seamlessly. The backend architecture is solid and the admin panel is very intuitive. Worth every penny!',
            rating: 5,
        },
    ]

    return (
        <section id="testimonials" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Client <span className="gradient-text">Testimonials</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        What our clients say about working with us
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card hover-glow"
                        >
                            {/* Quote Icon */}
                            <div className="text-4xl text-primary-400 mb-4">
                                <FaQuoteLeft />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-300 mb-6 leading-relaxed italic">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="border-t border-gray-700 pt-4">
                                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                <p className="text-primary-400 text-sm">{testimonial.role}</p>
                                <p className="text-gray-500 text-sm">{testimonial.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center glass p-8 rounded-2xl"
                >
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <div>
                            <div className="text-4xl font-bold gradient-text">100%</div>
                            <div className="text-gray-400">Client Satisfaction</div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-gray-700"></div>
                        <div>
                            <div className="text-4xl font-bold gradient-text">5+</div>
                            <div className="text-gray-400">Projects Delivered</div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-gray-700"></div>
                        <div>
                            <div className="text-4xl font-bold gradient-text">3+</div>
                            <div className="text-gray-400">Years Experience</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
