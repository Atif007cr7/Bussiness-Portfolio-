'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('Sending...')

        const formData = new FormData(e.target)
        formData.append("access_key", "cc2b16e4-82ca-490f-be8d-c1a12ff9dab1")

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })

            const data = await response.json()

            if (data.success) {
                setStatus('Success! I will get back to you soon.')
                e.target.reset()
            } else {
                console.log("Error", data)
                setStatus(data.message)
            }
        } catch (error) {
            console.error("Submission error", error)
            setStatus('Something went wrong. Please try again later.')
        }
    }

    return (
        <section id="contact" className="py-20 px-4 md:px-20 relative overflow-hidden">
            <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full z-[-1]"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[40px] md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Ready to start your project? Fill out the form below.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-10">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-[#030014]/50 backdrop-blur-md border border-[#7042f861] p-6 rounded-2xl shadow-[0_0_20px_rgba(112,66,248,0.1)]"
                        >
                            <div className="flex items-center gap-4 text-gray-200">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-medium">Call Me</p>
                                    <p className="font-semibold">+91 88500 03494</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#030014]/50 backdrop-blur-md border border-[#7042f861] p-6 rounded-2xl shadow-[0_0_20px_rgba(112,66,248,0.1)]"
                        >
                            <div className="flex items-center gap-4 text-gray-200">
                                <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-full flex items-center justify-center text-[#00d4ff]">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-medium">Email Me</p>
                                    <p className="font-semibold text-wrap">codewithatif@gmail.com</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#030014]/50 backdrop-blur-md border border-[#7042f861] p-6 rounded-2xl shadow-[0_0_20px_rgba(112,66,248,0.1)]"
                        >
                            <div className="flex items-center gap-4 text-gray-200">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-medium">Location</p>
                                    <p className="font-semibold">Mumbai, India</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="lg:col-span-3 bg-[#030014]/50 backdrop-blur-md border border-[#7042f861] p-8 md:p-10 rounded-3xl shadow-[0_0_30px_rgba(112,66,248,0.2)]"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="subject" value="New Project Inquiry from Portfolio" />

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Enter your name"
                                        className="w-full bg-[#0b0b15] border border-[#7042f861] rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Enter your email"
                                        className="w-full bg-[#0b0b15] border border-[#7042f861] rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300 ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 88500 0XXXX"
                                        className="w-full bg-[#0b0b15] border border-[#7042f861] rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300 ml-1">Project Kind</label>
                                    <select
                                        name="project_type"
                                        required
                                        defaultValue=""
                                        className="w-full bg-[#0b0b15] border border-[#7042f861] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                                    >
                                        <option value="" disabled>Select project type</option>
                                        <option value="Mobile App">Mobile App Development</option>
                                        <option value="Web App">Web App Development</option>
                                        <option value="E-commerce">E-commerce Solution</option>
                                        <option value="Backend">Backend / API Development</option>
                                        <option value="UI/UX">UI/UX Design</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-300 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    placeholder="Tell me about your project requirement..."
                                    className="w-full bg-[#0b0b15] border border-[#7042f861] rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-purple-800 to-blue-800 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(112,66,248,0.3)] hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                            {status && (
                                <p className={`text-center mt-4 ${status.includes('Success') ? 'text-green-400' : 'text-purple-400'}`}>
                                    {status}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
