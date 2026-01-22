'use client'

import { motion } from 'framer-motion'
import {
    SiFlutter, SiDart, SiPhp, SiLaravel, SiFastapi, SiPython, SiDjango,
    SiReact, SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql,
    SiDocker, SiAmazonwebservices, SiFirebase, SiGit, SiTypeform
} from 'react-icons/si'

export default function Skills() {
    const skills = [
        { Icon: SiFlutter, name: 'Flutter', color: '#02569B' },
        { Icon: SiDart, name: 'Dart', color: '#0175C2' },
        { Icon: SiReact, name: 'React', color: '#61DAFB' },
        { Icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF' },
        { Icon: SiTailwindcss, name: 'Tailwind', color: '#38B2AC' },
        { Icon: SiLaravel, name: 'Laravel', color: '#FF2D20' },
        { Icon: SiPhp, name: 'PHP', color: '#777BB4' },
        { Icon: SiPython, name: 'Python', color: '#3776AB' },
        { Icon: SiFastapi, name: 'FastAPI', color: '#009688' },
        { Icon: SiDjango, name: 'Django', color: '#092E20' },
        { Icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
        { Icon: SiMysql, name: 'MySQL', color: '#4479A1' },
        { Icon: SiDocker, name: 'Docker', color: '#2496ED' },
        { Icon: SiAmazonwebservices, name: 'AWS', color: '#FF9900' },
        { Icon: SiGit, name: 'Git', color: '#F05032' },
    ]

    return (
        <section id="skills" className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20" style={{ transform: 'scale(0.9)' }}>
            <div className="flex flex-col items-center gap-4 z-[20]">
                <h1 className="text-[40px] md:text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
                    Making apps with modern technologies
                </h1>
                <p className="text-[20px] text-gray-200 mb-10 text-center mt-[10px]">
                    Never miss a task, deadline or idea
                </p>
            </div>

            <div className="flex flex-row justify-center flex-wrap mt-4 gap-8 items-center max-w-[1200px] z-[20]">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center gap-2 group cursor-pointer"
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 card flex items-center justify-center group-hover:border-[#00d4ff] transition-all duration-300 shadow-[0_0_15px_rgba(112,66,248,0.2)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.5)]">
                            <skill.Icon size={40} color={skill.color} className="group-hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.8)] transition-all duration-300" />
                        </div>
                        <span className="text-gray-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Background Gradients */}
            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <div className="w-full h-full bg-gradient-radial from-purple-900/20 to-transparent"></div>
                </div>
            </div>
        </section>
    )
}
