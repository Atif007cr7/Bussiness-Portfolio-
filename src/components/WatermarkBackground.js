'use client'

import { motion } from 'framer-motion'

export default function WatermarkBackground() {
    return (
        <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none opacity-[0.03] select-none">
            <motion.div
                className="absolute top-0 left-0 w-[200%] h-[200%] flex flex-col gap-20"
                animate={{
                    x: ['-2%', '-15%', '-2%'],
                    y: ['-2%', '-10%', '-2%'],
                    rotate: [0, 1, 0]
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="flex gap-40 whitespace-nowrap text-[15vw] font-[900] leading-none tracking-tighter text-white/50">
                        {[...Array(6)].map((_, j) => (
                            <span key={j} className="hover:text-purple-500 transition-colors duration-1000">CODE WITH ATIF</span>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
