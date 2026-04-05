import Image from 'next/image'
import Hero from '@/components/hero/Hero'
import SmoothScroll from '@/components/Smoothscroll'
import Footer from '@/components/Footer'
export default function Home() {
    return (
        <div>
            <SmoothScroll>
                <Hero />
                <Footer />
            </SmoothScroll>
        </div>
    )
}
