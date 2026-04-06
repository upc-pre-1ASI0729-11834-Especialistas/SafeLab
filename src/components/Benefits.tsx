'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const SLIDES = [
    {
        video: 'https://videos.pexels.com/video-files/31575747/13456598_2560_1440_30fps.mp4',
        title: 'Beyond the Horizon',
        desc: 'With Labwatch, you can monitor all your laboratories in real-time through comprehensive dashboards that display temperature, air quality, ventilation, and other critical parameters. Receive intelligent alerts immediately when conditions deviate from safe thresholds, enabling fast and informed decisions to protect your research and resources.',
    },
    {
        video: 'https://videos.pexels.com/video-files/32386519/13814710_2560_1440_100fps.mp4',
        title: 'Into the Green',
        desc: 'Labwatch helps prevent risks by detecting anomalies early and sending smart alerts based on severity. Avoid accidents, prevent material loss, and ensure that your lab operates under optimal and safe conditions at all times. Proactive monitoring means fewer surprises and more control.',
    },
    {
        video: 'https://videos.pexels.com/video-files/8381316/8381316-uhd_2560_1440_25fps.mp4',
        title: 'Open Water',
        desc: 'Centralize management of multiple laboratories from a single platform. Analyze historical data, generate detailed reports, and identify trends to improve operational efficiency. Labwatch predictive analytics help forecast potential issues before they occur, saving time, cost, and effort.',
    },
    {
        video: 'https://videos.pexels.com/video-files/8381459/8381459-uhd_2560_1440_25fps.mp4',
        title: 'Labwatch Advantage',
        desc: 'Enhance safety and reliability across all your lab facilities. Configure custom ranges, monitor multiple environments simultaneously, and utilize advanced detection features. Labwatch ensures your laboratory environment remains controlled, compliant, and optimized, providing peace of mind for researchers and staff alike.',
    },
]

function SplitLine({ children }: { children: React.ReactNode }) {
    return (
        // Este overflow:hidden es el "tope" — el texto desaparece al llegar al borde
        <div style={{ overflow: 'hidden', display: 'block' }}>
            <div
                className="split-child"
                style={{ display: 'block', willChange: 'transform' }}>
                {children}
            </div>
        </div>
    )
}

export default function Benefits() {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const imageRefs = useRef<(HTMLDivElement | null)[]>([])
    const textRefs = useRef<(HTMLDivElement | null)[]>([])
    const currentSlide = useRef(0)
    const isAnimating = useRef(false)

    const goToSlide = (next: number) => {
        if (isAnimating.current) return
        const prev = currentSlide.current
        if (next === prev) return
        isAnimating.current = true
        currentSlide.current = next

        const prevImg = imageRefs.current[prev]
        const nextImg = imageRefs.current[next]
        const prevText = textRefs.current[prev]
        const nextText = textRefs.current[next]

        const tl = gsap.timeline({
            onComplete: () => {
                isAnimating.current = false
            },
        })

        tl.to(
            prevImg,
            {
                yPercent: 100,
                duration: 0.9,
                ease: 'power4.inOut',
            },
            0,
        )

        gsap.set(nextImg, { yPercent: -100, opacity: 1 })
        tl.to(
            nextImg,
            {
                yPercent: 0,
                duration: 0.9,
                ease: 'power4.inOut',
            },
            0,
        )

        if (prevText) {
            const prevLines = prevText.querySelectorAll('.split-child')
            tl.to(
                prevLines,
                {
                    yPercent: -105,

                    duration: 0.45,
                    ease: 'power2.in',
                    stagger: 0.05,
                },
                0,
            )
        }

        if (nextText) {
            const nextLines = nextText.querySelectorAll('.split-child')
            gsap.set(nextLines, { yPercent: 100 })
            tl.to(
                nextLines,
                {
                    yPercent: 0,
                    duration: 0.7,
                    ease: 'power4.out',
                    stagger: 0.08,
                },
                0.5,
            )
        }
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            const totalScroll = window.innerHeight * (SLIDES.length - 1)

            imageRefs.current.forEach((el, i) => {
                gsap.set(el, { yPercent: i === 0 ? 0 : 100, opacity: 1 })
            })
            textRefs.current.forEach((el, i) => {
                if (!el) return
                const lines = el.querySelectorAll('.split-child')
                gsap.set(lines, { yPercent: i === 0 ? 0 : 100 })
            })

            ScrollTrigger.create({
                trigger: wrapperRef.current,
                start: 'top top',
                end: `+=${totalScroll}px`,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    const slideIndex = Math.min(
                        Math.round(self.progress * (SLIDES.length - 1)),
                        SLIDES.length - 1,
                    )
                    if (slideIndex !== currentSlide.current) {
                        goToSlide(slideIndex)
                    }
                },
            })
        }, wrapperRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={wrapperRef}
            className="relative h-screen w-full flex flex-col">
            <div
                className="relative w-full overflow-hidden"
                style={{ height: '75%' }}>
                {SLIDES.map((slide, i) => (
                    <div
                        key={i}
                        ref={(el) => {
                            imageRefs.current[i] = el
                        }}
                        className="absolute inset-0 will-change-transform">
                        <video
                            src={slide.video}
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="relative bg-white overflow-hidden h-[25vh]">
                {SLIDES.map((slide, i) => (
                    <div
                        key={i}
                        ref={(el) => {
                            textRefs.current[i] = el
                        }}
                        className="absolute inset-0 flex items-center overflow-hidden text-black text-[1.5rem]  font-medium tracking-tighter font-inter">
                        <div className="ml-16 flex flex-col -space-y-2 ">
                            <SplitLine>
                                <span className="text-[#86888d] whitespace-nowrap text-[1.5rem]">
                                    Benefit 0{i + 1}
                                </span>
                            </SplitLine>
                            <SplitLine>
                                <span className="text-[#052424]">{slide.title}</span>
                            </SplitLine>
                        </div>

                        <div className="absolute text-[#86888d] max-w-[40rem] text-[0.9rem] translate-x-[30vw]">
                            <SplitLine>
                                <p>{slide.desc}</p>
                            </SplitLine>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
