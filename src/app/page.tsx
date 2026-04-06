import Image from 'next/image'
import Hero from '@/components/hero/Hero'
import SmoothScroll from '@/components/Smoothscroll'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
export default function Home() {
    return (
        <div>
            <SmoothScroll>
                <Hero />
                <Contact />
                <Footer />
            </SmoothScroll>
        </div>
    )
}
