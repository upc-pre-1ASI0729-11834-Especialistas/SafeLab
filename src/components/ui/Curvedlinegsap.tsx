'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

interface CurvedLineGSAPProps {
    path: string
    strokeColor?: string
    rectColor?: string
    rectWidth?: number
    rectHeight?: number
    duration?: number
    autoRotate?: boolean
    viewBox?: string
    className?: string
}

export default function CurvedLineGSAP({
    path,
    strokeColor = 'rgba(255,255,255,0.1)',
    rectColor = 'white',
    rectWidth = 2,
    rectHeight = 1,
    duration = 3,
    autoRotate = true,
    viewBox = '0 0 800 150',
    className = 'w-full max-w-[800px] h-[150px]',
}: CurvedLineGSAPProps) {
    const rectRef = useRef<SVGRectElement>(null)

    useEffect(() => {
        if (!rectRef.current) return

        const anim = gsap.to(rectRef.current, {
            duration,
            repeat: -1,
            ease: 'linear',
            motionPath: {
                path: '#curve',
                align: '#curve',
                alignOrigin: [0.5, 0.5],
                autoRotate,
            },
        })

        return () => {
            anim.kill()
        }
    }, [path, duration, autoRotate])

    return (
        <div className="w-full flex justify-center">
            <svg
                className={className}
                viewBox={viewBox}>
                <path
                    id="curve"
                    d={path}
                    stroke={strokeColor}
                    strokeWidth="2"
                    fill="none"
                />
                <rect
                    ref={rectRef}
                    width={rectWidth}
                    height={rectHeight}
                    x={-rectWidth / 2}
                    y={-rectHeight / 2}
                    fill={rectColor}
                />
            </svg>
        </div>
    )
}
