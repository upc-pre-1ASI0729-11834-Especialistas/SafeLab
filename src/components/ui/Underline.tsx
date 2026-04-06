'use client'

import { useRef } from 'react'
import gsap from 'gsap'

type Props = {
    delay?: number
    scale?: number
    className?: string
}

export default function Underline({ delay = 0.8, scale = 1.5, className = '' }: Props) {
    const lineRef = useRef<HTMLSpanElement>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleEnter = () => {
        // Espera antes de animar
        timeoutRef.current = setTimeout(() => {
            gsap.to(lineRef.current, {
                scaleX: scale,
                duration: 0.2,
                ease: 'power2.out',
            })
        }, delay * 1000)
    }

    const handleLeave = () => {
        // 🔥 cancela si aún no ejecutó
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        // vuelve al estado inicial
        gsap.to(lineRef.current, {
            scaleX: 0,
            duration: 0.15,
            ease: 'power2.in',
        })
    }

    return (
        <span
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className={`relative inline-block ${className}`}>
            {/* underline */}
            <span
                ref={lineRef}
                className="
          absolute bottom-[-1px] left-1/2 -translate-x-1/2
          h-[4px] w-[4px] bg-foreground origin-center
        "
                style={{ transform: 'scaleX(0)' }}
            />
        </span>
    )
}
