'use client'

import { motion } from 'framer-motion'
import { SiFlutter, SiDart, SiPhp, SiLaravel, SiFastapi, SiPython, SiDjango } from 'react-icons/si'

export default function Skills() {
    const skills = [
        {
            icon: <SiFlutter />,
            name: 'Flutter',
            description: 'Cross-platform mobile app development',
            color: 'from-blue-400 to-cyan-400',
        },
        {
            icon: <SiDart />,
            name: 'Dart',
            description: 'Modern programming language for Flutter',
            color: 'from-cyan-400 to-blue-500',
        },
        {
            icon: <SiPhp />,
            name: 'PHP',
            description: 'Server-side scripting language',
            color: 'from-purple-400 to-indigo-500',
        },
        {
            icon: <SiLaravel />,
            name: 'Laravel',
            description: 'Elegant PHP framework for web applications',
            color: 'from-red-400 to-orange-500',
        },
        {
            icon: <SiFastapi />,
            name: 'FastAPI',
            description: 'Modern, fast Python web framework',
            color: 'from-teal-400 to-green-500',
        },
        {
            icon: <SiPython />,
            name: 'Python',
            description: 'Versatile programming language',
            color: 'from-yellow-400 to-blue-500',
        },
        {
            icon: <SiDjango />,
            name: 'Django',
            description: 'High-level Python web framework',
            color: 'from-green-600 to-emerald-500',
        },
    ]

    return (
        <section id="skills" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Expertise in modern technologies to build scalable and efficient solutions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card hover-glow group"
                        >
                            <div className="text-center">
                                <div className={`text-6xl mb-4 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent inline-block group-hover:scale-110 transition-transform duration-300`}>
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                                <p className="text-gray-400 text-sm">{skill.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <h3 className="text-2xl font-bold mb-6">Additional Expertise</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'REST APIs',
                            'MySQL',
                            'PostgreSQL',
                            'Git',
                            'GitHub',
                            'GitLab',
                            'CI/CD',
                            'Docker',
                            'AWS',
                            'Firebase',
                            'Shorebird',
                            'Fastlane',
                            'MVC Architecture',
                            'Agile',
                            'Scrum',
                        ].map((item, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 glass rounded-full text-sm font-medium hover:bg-primary-500/20 transition-colors duration-300"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
