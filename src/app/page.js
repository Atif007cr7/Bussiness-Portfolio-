'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Team from '@/components/Team'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WatermarkBackground from '@/components/WatermarkBackground'

export default function Home() {
    return (
        <main className="h-full w-full bg-[#030014]">
            <WatermarkBackground />
            <div className="flex flex-col gap-20">
                <Navbar />
                <Hero />
                <Team />
                <Skills />
                <Projects />
                <Testimonials />
                <Contact />
                <Footer />
            </div>
        </main>
    )
}
