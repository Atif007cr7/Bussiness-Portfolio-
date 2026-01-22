'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="h-full w-full bg-[#030014]">
            <div className="flex flex-col gap-20">
                <Navbar />
                <Hero />
                <Skills />
                <Projects />
                <Footer />
            </div>
        </main>
    )
}
