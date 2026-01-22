'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGooglePlay, FaGlobe, FaStar, FaTimes } from 'react-icons/fa'
import Image from 'next/image'

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedProject, setSelectedProject] = useState(null)

    const categories = ['All', 'Mobile Apps', 'Web Apps', 'Enterprise', 'Internal Tools']

    const projects = [
        {
            name: 'Barbr & Co',
            category: 'Mobile Apps',
            type: 'Salon Booking App',
            platform: 'Android',
            status: 'Live on Play Store',
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
            status: 'Used in Dubai (ANsoft)',
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
            platform: 'Internal / Local deployment',
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

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory)

    return (
        <section id="projects" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        Successful applications delivered to clients and deployed in production
                    </p>

                    {/* Filter Chips */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                        ? 'bg-maroon text-white shadow-lg shadow-maroon/50'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-maroon/30'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={project.featured ? 'gradient-border' : ''}
                            >
                                <div className={`${project.featured ? 'gradient-border-content' : 'card'} hover-glow h-full flex flex-col overflow-hidden`}>
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="flex items-center gap-2 mb-3">
                                            <FaStar className="text-yellow-400" />
                                            <span className="text-sm font-semibold text-yellow-400">Featured Project</span>
                                        </div>
                                    )}

                                    {/* Project Image */}
                                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-black">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* Project Info */}
                                    <div className="flex-grow">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-2xl font-bold">{project.name}</h3>
                                            <span className="text-xs px-2 py-1 bg-maroon/20 text-maroon rounded">
                                                {project.category}
                                            </span>
                                        </div>

                                        <p className="text-sm text-maroon mb-2">{project.type}</p>
                                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.slice(0, 4).map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 bg-maroon/10 text-maroon-light rounded text-xs font-medium border border-maroon/30"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Status */}
                                        <div className="mb-4">
                                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-300 rounded-lg text-xs font-medium">
                                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="flex-1 px-4 py-2 bg-maroon hover:bg-maroon-light text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                                        >
                                            View Details
                                        </button>
                                        {project.playStoreLink && project.playStoreLink !== '#' && (
                                            <a
                                                href={project.playStoreLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium flex items-center gap-2"
                                            >
                                                <FaGooglePlay />
                                            </a>
                                        )}
                                        {project.websiteLink && (
                                            <a
                                                href={project.websiteLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium flex items-center gap-2"
                                            >
                                                <FaGlobe />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Project Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    <div className="text-center card">
                        <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                        <div className="text-gray-400">Projects Delivered</div>
                    </div>
                    <div className="text-center card">
                        <div className="text-4xl font-bold gradient-text mb-2">3</div>
                        <div className="text-gray-400">Play Store Apps</div>
                    </div>
                    <div className="text-center card">
                        <div className="text-4xl font-bold gradient-text mb-2">2</div>
                        <div className="text-gray-400">Enterprise Systems</div>
                    </div>
                    <div className="text-center card">
                        <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                        <div className="text-gray-400">Client Satisfaction</div>
                    </div>
                </motion.div>
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-black border-2 border-maroon rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 md:p-8">
                                {/* Modal Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-2">{selectedProject.name}</h3>
                                        <p className="text-maroon text-lg">{selectedProject.type}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <FaTimes size={24} />
                                    </button>
                                </div>

                                {/* Project Image */}
                                <div className="relative w-full h-64 md:h-96 mb-6 rounded-lg overflow-hidden bg-black">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Full Description */}
                                <div className="mb-6">
                                    <h4 className="text-xl font-bold mb-3">About the Project</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        {selectedProject.fullDescription}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <h4 className="text-xl font-bold mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-maroon/20 text-maroon-light rounded-lg font-medium border border-maroon/50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div className="mb-6">
                                    <h4 className="text-xl font-bold mb-3">Key Features</h4>
                                    <ul className="grid md:grid-cols-2 gap-3">
                                        {selectedProject.keyFeatures.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-maroon mt-1">✓</span>
                                                <span className="text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.playStoreLink && selectedProject.playStoreLink !== '#' && (
                                        <a
                                            href={selectedProject.playStoreLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-maroon hover:bg-maroon-light text-white rounded-lg transition-colors duration-300 font-medium"
                                        >
                                            <FaGooglePlay />
                                            <span>View on Play Store</span>
                                        </a>
                                    )}
                                    {selectedProject.websiteLink && (
                                        <a
                                            href={selectedProject.websiteLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 font-medium"
                                        >
                                            <FaGlobe />
                                            <span>Visit Website</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
