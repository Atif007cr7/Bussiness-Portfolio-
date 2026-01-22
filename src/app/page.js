'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Pricing from '@/components/Pricing'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Pricing />
            <WhyChooseUs />
            <Process />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
            <FloatingButtons />
        </main>
    )
}
