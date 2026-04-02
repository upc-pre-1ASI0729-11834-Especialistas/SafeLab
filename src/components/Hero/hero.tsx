'use client'
import { useRef } from 'react'
import Navbar from './navbar'
import HeroCanvas from './herocanvas'
import HeroText from './herotext'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={containerRef}
            className="relative h-[400vh]">
            <div className="font-inter sticky top-0 h-screen w-full overflow-hidden bg-black">
                <HeroCanvas containerRef={containerRef} />
                <div className="absolute inset-0 z-10 bg-black opacity-40" />
                <div className="absolute top-0 left-0 w-full z-50 flex justify-center">
                    <Navbar />
                </div>
                <HeroText containerRef={containerRef} />
            </div>
        </div>
    )
}
