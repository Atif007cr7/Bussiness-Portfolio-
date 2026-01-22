'use client'

import { motion } from 'framer-motion'
import { FaUserTie, FaCode, FaPaintBrush, FaServer } from 'react-icons/fa'
import { SiFlutter, SiLaravel, SiPython, SiDjango, SiFirebase } from 'react-icons/si'

export default function Team() {
    const team = [
        {
            role: 'Flutter & Dart Developers',
            count: 2,
            icon: <SiFlutter />,
            description: 'Expertise in building high-performance cross-platform mobile applications.',
            color: '#02569B',
            members: ['Lead Mobile Dev', 'Junior Mobile Dev']
        },
        {
            role: 'Laravel & PHP Developer',
            count: 1,
            icon: <SiLaravel />,
            description: 'Specialized in robust backend systems and secure API architectures.',
            color: '#FF2D20',
            members: ['Senior Backend Engineer']
        },
        {
            role: 'Full Stack & Database Specialist',
            count: 1,
            icon: <SiPython />,
            description: 'Python, Django, MySQL, SQL, and Firebase integration specialist.',
            color: '#3776AB',
            members: ['Data Architect']
        },
        {
            role: 'UI/UX & Deployment Manager',
            count: 1,
            icon: <FaPaintBrush />,
            description: 'Ensures pixel-perfect design and seamless CI/CD delivery.',
            color: '#FF00FF',
            members: ['Creative Lead']
        }
    ]

    return (
        <section id="team" className="py-20 px-4 md:px-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[40px] md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2"
                    >
                        Our Expert Team
                    </motion.h2>
                    <p className="text-gray-400 text-lg">
                        Meet the professionals behind the high-quality solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="card p-8 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-6xl font-bold">{item.count}</span>
                            </div>

                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300" style={{ color: item.color }}>
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                                {item.role}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>

                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                                <span className="w-8 h-[1px] bg-purple-400/30"></span>
                                {item.count} {item.count > 1 ? 'Specialists' : 'Specialist'}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
