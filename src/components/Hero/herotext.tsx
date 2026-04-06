'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const BLOCKS = [
    'Real-time laboratory monitoring.',
    'Intelligent alerts and insights.',
    'Predict risks before they happen.',
    'Safer, smarter operations.',
]

interface HeroTextProps {
    containerRef: React.RefObject<HTMLDivElement>
}

export default function HeroText({ containerRef }: HeroTextProps) {
    const blockRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const container = containerRef.current!

        const splits = blockRefs.current.map((el) => {
            if (!el) return null
            return SplitText.create(el, { type: 'chars,words' })
        })

        blockRefs.current.forEach((el) => {
            if (el) gsap.set(el, { opacity: 0 })
        })

        const dummy = { v: 0 }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
            },
        })

        splits.forEach((split, i) => {
            if (!split) return
            const el = blockRefs.current[i]!
            const isLast = i === BLOCKS.length - 1

            tl.set(el, { opacity: 1 })

            split.chars.forEach((char) => {
                tl.fromTo(
                    char,
                    { opacity: 0, color: '#a2fa00' },
                    { opacity: 1, color: '#a2fa00', duration: 0.003, ease: 'none' },
                )
                tl.to(char, {
                    color: '#ffffff',
                    duration: 0.25,
                    ease: 'power1.inOut',
                })
            })

            tl.to(dummy, { v: i + 0.4, duration: 1, ease: 'none' })

            if (!isLast) {
                tl.set(split.chars, { opacity: 0, color: '#2ef0c0' })
                tl.set(el, { opacity: 0 }, '<')
                tl.to(dummy, { v: i + 1, duration: 0.8, ease: 'none' })
            }
        })

        return () => {
            tl.kill()
            splits.forEach((s) => s?.revert())
        }
    }, [containerRef])

    return (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            {BLOCKS.map((text, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        blockRefs.current[i] = el
                    }}
                    className="absolute text-center leading-tight tracking-tight opacity-0 text-[4rem] drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                    {text}
                </div>
            ))}
        </div>
    )
}
