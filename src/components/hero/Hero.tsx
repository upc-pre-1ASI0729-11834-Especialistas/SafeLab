'use client'
import { useRef } from 'react'
import HeroCanvas from './Herocanvas'
import HeroText from './Herotext'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={containerRef}
            className="relative h-[400vh]">
            <div className="font-inter sticky top-0 h-screen w-full overflow-hidden bg-black">
                <HeroCanvas containerRef={containerRef} />
                <div className="absolute inset-0 z-10 bg-black opacity-40" />

                <HeroText containerRef={containerRef} />
            </div>
        </div>
    )
}
