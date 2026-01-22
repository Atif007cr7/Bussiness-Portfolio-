'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
} from 'react-icons/fa'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        message: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        alert('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', projectType: '', message: '' })
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const contactInfo = [
        {
            icon: <FaPhone />,
            title: 'Phone',
            value: '+91 88500 03494',
            link: 'tel:+918850003494',
        },
        {
            icon: <FaEnvelope />,
            title: 'Email',
            value: 'codewithatif@gmail.com',
            link: 'mailto:codewithatif@gmail.com',
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            value: 'Kurla East, Mumbai 400024',
            link: null,
        },
    ]

    const socialLinks = [
        {
            icon: <FaGithub />,
            name: 'GitHub',
            url: 'https://github.com/Atif007cr7',
            color: 'hover:text-gray-400',
        },
        {
            icon: <FaLinkedin />,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/mohd-ansari-atif-56512a20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            color: 'hover:text-blue-400',
        },
        {
            icon: <FaInstagram />,
            name: 'Instagram',
            url: 'https://www.instagram.com/ansari_mohd_atif?igsh=MWgwcjJ5MzM1NXpubg%3D%3D&utm_source=qr',
            color: 'hover:text-pink-400',
        },
        {
            icon: <FaWhatsapp />,
            name: 'WhatsApp',
            url: 'https://wa.me/918850003494',
            color: 'hover:text-green-400',
        },
    ]

    return (
        <section id="contact" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Ready to start your project? Let's discuss how we can help bring your ideas to life
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="card space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                                    Project Type
                                </label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                                >
                                    <option value="">Select a project type</option>
                                    <option value="new-app">New App Development</option>
                                    <option value="existing-app">Existing App Modification</option>
                                    <option value="backend">Backend Development</option>
                                    <option value="full-stack">Full Stack Project</option>
                                    <option value="maintenance">Maintenance & Support</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-slate-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full btn-primary">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Contact Details */}
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="card hover-glow">
                                    <div className="flex items-start gap-4">
                                        <div className="text-3xl text-primary-400 mt-1">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-1">{info.title}</h3>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-gray-400 hover:text-primary-400 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-400">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="card">
                            <h3 className="font-bold text-xl mb-4">Connect With Me</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-3xl text-gray-400 ${social.color} transition-colors`}
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 mt-4">
                                Note: Links can be updated anytime
                            </p>
                        </div>

                        {/* Availability */}
                        <div className="glass p-6 rounded-lg">
                            <h3 className="font-bold text-xl mb-4">Availability</h3>
                            <div className="space-y-3 text-gray-300">
                                <p className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    Available for new projects
                                </p>
                                <p>Response time: Within 24 hours</p>
                                <p>Working hours: 10 AM - 8 PM IST</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
