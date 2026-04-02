import Image from 'next/image'
import Hero from '@/components/Hero/hero'
import SmoothScroll from '@/components/smoothScroll'
export default function Home() {
    return (
        <div>
            <SmoothScroll>
                <Hero />
            </SmoothScroll>
        </div>
    )
}
