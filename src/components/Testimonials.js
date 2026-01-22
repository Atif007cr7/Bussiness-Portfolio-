'use client'

import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Alex Rivera',
            role: 'CEO, TechNova',
            content: 'Working with CodeWithAtif was a game-changer. The ERP system they built reduced our operational overhead by 40%. Highly recommended!',
            stars: 5,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
        },
        {
            name: 'Ravi Kiran',
            role: 'Founder, Imoda & HRms',
            content: "The mobile app exceeded our expectations. The UI is fluid, and the backend is rock solid. They truly understand modern app development.",
            stars: 5,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ravi'
        },
        {
            name: 'Jameel Khan',
            role: 'Product Manager, Barbr',
            content: 'Incredible attention to detail. The team was responsive and delivered the salon booking platform ahead of schedule.',
            stars: 5,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jameel'
        }
    ]

    return (
        <section id="testimonials" className="py-20 px-4 md:px-20 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[40px] md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2"
                    >
                        What Clients Say
                    </motion.h2>
                    <p className="text-gray-400 text-lg">
                        Trusted by industry leaders and innovative startups.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="card p-8 relative"
                        >
                            <FaQuoteLeft className="text-purple-500/20 text-5xl absolute top-6 left-6" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.stars)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500 text-sm" />
                                ))}
                            </div>

                            <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border border-purple-500/30" />
                                <div>
                                    <h4 className="text-white font-bold">{t.name}</h4>
                                    <p className="text-gray-500 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
