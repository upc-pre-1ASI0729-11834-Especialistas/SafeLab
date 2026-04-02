'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const TOTAL_FRAMES = 120
const FRAME_PATH = (i: number) => `/frames/frame_${String(i).padStart(4, '0')}.png`

interface HeroCanvasProps {
    containerRef: React.RefObject<HTMLDivElement>
}

export default function HeroCanvas({ containerRef }: HeroCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const framesRef = useRef<HTMLImageElement[]>([])
    const currentFrameRef = useRef(0)

    const drawContain = (
        ctx: CanvasRenderingContext2D,
        img: HTMLImageElement,
        canvasW: number,
        canvasH: number,
    ) => {
        const scale = Math.max(canvasW / img.naturalWidth, canvasH / img.naturalHeight)
        const x = (canvasW - img.naturalWidth * scale) / 2
        const y = (canvasH - img.naturalHeight * scale) / 2
        ctx.clearRect(0, 0, canvasW, canvasH)
        ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale)
    }

    useEffect(() => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext('2d')!
        const container = containerRef.current!

        const images: HTMLImageElement[] = Array.from(
            { length: TOTAL_FRAMES },
            (_, i) => {
                const img = new Image()
                img.src = FRAME_PATH(i + 1)
                return img
            },
        )
        framesRef.current = images

        const setCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            const idx = currentFrameRef.current
            if (images[idx]?.complete)
                drawContain(ctx, images[idx], canvas.width, canvas.height)
        }

        images[0].onload = () => {
            setCanvasSize()
            drawContain(ctx, images[0], canvas.width, canvas.height)
        }

        window.addEventListener('resize', setCanvasSize)

        const obj = { frame: 0 }
        const frameTween = gsap.to(obj, {
            frame: TOTAL_FRAMES - 1,
            snap: 'frame',
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.5,
            },
            onUpdate() {
                const idx = Math.round(obj.frame)
                if (idx !== currentFrameRef.current && images[idx]?.complete) {
                    currentFrameRef.current = idx
                    drawContain(ctx, images[idx], canvas.width, canvas.height)
                }
            },
        })

        return () => {
            frameTween.kill()
            window.removeEventListener('resize', setCanvasSize)
        }
    }, [containerRef])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0"
        />
    )
}
