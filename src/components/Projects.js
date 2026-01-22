'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGooglePlay, FaGlobe, FaGithub, FaTimes } from 'react-icons/fa'
import Image from 'next/image'

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            name: 'Barbr & Co',
            category: 'Mobile Apps',
            type: 'Salon Booking App',
            platform: 'Android',
            status: 'Live',
            image: '/projects/barbr-and-co.png',
            description: 'Salon booking app with services listing, appointment scheduling, user profiles, and seamless booking experience.',
            fullDescription: 'A comprehensive salon and beauty services booking platform featuring real-time appointment management, service catalog with detailed descriptions, secure payment integration, user profile management, service reviews and ratings, and loyalty rewards program.',
            tags: ['Flutter', 'Laravel', 'REST API', 'Play Store'],
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.iktworksprivatelimited.barbrandco&hl=en_IN',
            websiteLink: 'https://barbrandco.com',
            featured: true,
            keyFeatures: [
                'Real-time appointment booking',
                'Service catalog with pricing',
                'User authentication & profiles',
                'Payment gateway integration',
                'Push notifications',
                'Rating & review system',
                'Loyalty rewards program'
            ]
        },
        {
            name: 'SRH',
            category: 'Mobile Apps',
            type: 'Medical Student App',
            platform: 'Android',
            status: 'Live',
            image: '/projects/srh.png',
            description: 'Medical student learning & resource app with structured content, tools, and student-friendly UI.',
            fullDescription: 'A comprehensive medical education platform designed for medical students, featuring structured learning modules, interactive study materials, medical reference tools, and progress tracking.',
            tags: ['Flutter', 'Django', 'REST API', 'Play Store'],
            playStoreLink: '#',
            featured: false,
            keyFeatures: [
                'Structured medical content',
                'Interactive study materials',
                'Progress tracking',
                'Medical reference tools',
                'Offline access',
                'Student-friendly interface'
            ]
        },
        {
            name: 'Imoda',
            category: 'Mobile Apps',
            type: 'Fashion Design App',
            platform: 'Android',
            status: 'Live',
            image: '/projects/imoda.png',
            description: 'Fashion designer platform for showcasing designs, managing collections, and connecting with customers.',
            fullDescription: 'An innovative fashion designer platform connecting designers with clients, featuring portfolio showcasing, appointment booking, custom design requests, and secure payment processing.',
            tags: ['Flutter', 'FastAPI', 'REST API', 'Play Store'],
            playStoreLink: '#',
            featured: false,
            keyFeatures: [
                'Designer portfolio showcase',
                'Collection management',
                'Custom design requests',
                'Appointment booking',
                'Secure payments',
                'Client communication'
            ]
        },
        {
            name: 'ERP & POS',
            category: 'Enterprise',
            type: 'Enterprise Web App',
            platform: 'Web',
            status: 'Used in Dubai',
            image: '/projects/pos-erp.png',
            description: 'Enterprise-level ERP & POS system for business operations, billing, inventory, reporting, and multi-module workflows.',
            fullDescription: 'Comprehensive Enterprise Resource Planning and Point of Sale system developed for ANsoft, featuring inventory management, sales tracking, customer management, detailed analytics, and multi-module business workflows. Currently deployed and actively used in Dubai.',
            tags: ['Flutter', 'PHP', 'Laravel', 'MySQL', 'CI/CD'],
            featured: true,
            keyFeatures: [
                'Inventory management',
                'Sales & billing system',
                'Customer management',
                'Business analytics & reports',
                'Multi-user access control',
                'Real-time data sync',
                'Cloud deployment'
            ]
        },
        {
            name: 'HRMS',
            category: 'Internal Tools',
            type: 'Human Resource App',
            platform: 'Internal',
            status: 'Used by 2 organizations',
            image: '/projects/hrms.png',
            description: 'HRMS system for attendance, employee management, payroll workflows, and admin controls.',
            fullDescription: 'Complete Human Resource Management System with employee management, attendance tracking, leave management, payroll processing, and performance evaluation. Currently used by 2 organizations for their internal HR operations.',
            tags: ['Flutter', 'Laravel', 'MySQL', 'MVC'],
            featured: false,
            keyFeatures: [
                'Employee management',
                'Attendance tracking',
                'Leave management',
                'Payroll processing',
                'Performance evaluation',
                'Admin dashboard',
                'Report generation'
            ]
        },
    ]

    return (
        <section id="projects" className="py-20 flex flex-col items-center justify-center z-50 px-4 md:px-20 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-[40px] md:text-[80px] font-black text-white py-10 tracking-tighter leading-none">
                    SELECTED <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">PROJECTS</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto uppercase tracking-[0.5em] font-bold">
                    [ 2021 — 2024 ]
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 w-full max-w-7xl z-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-16 w-full max-w-7xl z-50">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{
                                y: -15,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            className="group relative h-[600px] cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Background Index Number */}
                            <div className="absolute -top-10 -left-6 text-[120px] font-black text-white/[0.03] select-none group-hover:text-purple-500/10 transition-colors duration-500">
                                {index + 1 < 10 ? `0${index + 1}` : index + 1}
                            </div>

                            {/* Main Container */}
                            <div className="relative h-full w-full bg-[#030014] rounded-[40px] border border-white/5 group-hover:border-purple-500/50 transition-all duration-500 flex flex-col overflow-hidden shadow-2xl">

                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-transparent -translate-y-16 translate-x-16 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                                {/* Image Section */}
                                <div className="relative w-full h-1/2 overflow-hidden bg-white/[0.02]">
                                    <motion.div
                                        className="relative w-full h-full flex items-center justify-center p-12"
                                        whileHover={{ scale: 1.15, rotate: -2 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                                        />
                                    </motion.div>

                                    {/* Status Chip */}
                                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-purple-600 rounded-full text-[10px] font-black tracking-widest text-white transform -rotate-2">
                                        {project.status.toUpperCase()}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="relative flex-grow p-10 flex flex-col">
                                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-[0.4em] mb-4">
                                        {project.platform} • {project.category}
                                    </span>

                                    <h3 className="text-5xl font-black text-white mb-6 leading-[0.9] tracking-tighter group-hover:text-purple-400 transition-colors">
                                        {project.name.split(' ').map((word, i) => (
                                            <span key={i} className="block">{word}</span>
                                        ))}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-10 line-clamp-2 font-medium leading-relaxed group-hover:text-gray-200 transition-colors">
                                        {project.description}
                                    </p>

                                    {/* Aesthetic Explore Link */}
                                    <div className="mt-auto flex items-center gap-6 group/link">
                                        <div className="relative w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover/link:bg-white group-hover/link:border-white transition-all duration-300">
                                            <div className="w-2 h-2 rounded-full bg-white group-hover/link:bg-black transition-colors"></div>
                                            <div className="absolute inset-0 rounded-full border border-purple-500 scale-150 opacity-0 group-hover/link:scale-100 group-hover/link:opacity-100 transition-all duration-500"></div>
                                        </div>
                                        <span className="text-sm font-black uppercase tracking-widest text-white">
                                            VIEW PROJECT
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Outer Glow Effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-[42px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#1a1a2e] border border-[#7042f861] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(112,66,248,0.3)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h3>
                                        <p className="text-purple-400 text-lg">{selectedProject.type}</p>
                                    </div>
                                    <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white">
                                        <FaTimes size={24} />
                                    </button>
                                </div>

                                <div className="relative w-full h-64 md:h-96 mb-6 rounded-lg overflow-hidden bg-black/50 border border-white/10">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-3">About</h4>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {selectedProject.fullDescription}
                                        </p>

                                        <h4 className="text-xl font-bold text-white mb-3">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {selectedProject.tags.map((tag, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-purple-900/40 text-purple-200 rounded-lg border border-purple-500/30">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-3">Key Features</h4>
                                        <ul className="space-y-2 mb-6">
                                            {selectedProject.keyFeatures.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-300">
                                                    <span className="text-purple-400 mt-1">✓</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex gap-4">
                                            {selectedProject.playStoreLink && selectedProject.playStoreLink !== '#' && (
                                                <a
                                                    href={selectedProject.playStoreLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-6 py-3 bg-[#02569B] hover:bg-[#024376] text-white rounded-lg transition-colors font-medium"
                                                >
                                                    <FaGooglePlay /> Play Store
                                                </a>
                                            )}
                                            {selectedProject.websiteLink && (
                                                <a
                                                    href={selectedProject.websiteLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
                                                >
                                                    <FaGlobe /> Website
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
