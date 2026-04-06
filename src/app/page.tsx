import Image from 'next/image'
import Hero from '@/components/hero/Hero'
import Benefits from '@/components/Benefits'
import SmoothScroll from '@/components/Smoothscroll'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Showcase from '@/components/Showcase'
export default function Home() {
    return (
        <div>
            <SmoothScroll>
                <Hero />
                <Showcase />
                <Benefits />
                <Contact />
                <Footer />
            </SmoothScroll>
        </div>
    )
}
