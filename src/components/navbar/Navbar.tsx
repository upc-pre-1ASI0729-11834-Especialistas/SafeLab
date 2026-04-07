'use client'
import { useState } from 'react'
import NavItem from './Navitem'
import SlideButton from '@/components/ui/Slidebutton'
import UnderlineText from '@/components/ui/Underlinetext'

const NAV_ITEMS = ['Productos', 'Markets', 'Insights', 'Resources', 'About']

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className="fixed z-50 top-0 mt-6 md:mt-12 left-0 right-0 flex justify-center px-4 md:px-0">
                <div className="bg-black/30 rounded-lg backdrop-blur-xl py-4 px-5 font-inter flex items-center justify-between md:justify-start md:gap-6 w-full md:w-auto">
                    {/* Logo — siempre visible */}
                    <h1 className="text-[1.20rem] font-semibold tracking-wide text-white">
                        Safelab
                    </h1>

                    {/* Links — solo desktop */}
                    <div className="hidden md:flex items-center gap-4 text-[0.85rem] font-medium text-white">
                        {NAV_ITEMS.map((label) => (
                            <NavItem
                                key={label}
                                label={label}
                            />
                        ))}
                        <SlideButton className="text-[0.7rem] uppercase font-semibold tracking-widest font-jetbrains">
                            <UnderlineText>Contact</UnderlineText>
                        </SlideButton>
                    </div>

                    {/* Hamburger — solo móvil */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
                        aria-label="Toggle menu">
                        <span
                            className={`block h-[1.5px] bg-white transition-all duration-300 ease-in-out origin-center ${open ? 'w-5 rotate-45 translate-y-[6.5px]' : 'w-5'}`}
                        />
                        <span
                            className={`block h-[1.5px] bg-white transition-all duration-300 ease-in-out ${open ? 'w-0 opacity-0' : 'w-4'}`}
                        />
                        <span
                            className={`block h-[1.5px] bg-white transition-all duration-300 ease-in-out origin-center ${open ? 'w-5 -rotate-45 -translate-y-[6.5px]' : 'w-5'}`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            <div
                className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setOpen(false)}
                />

                {/* Panel */}
                <div
                    className={`absolute top-0 right-0 h-full w-3/4 max-w-xs bg-black/80 backdrop-blur-2xl border-l border-white/10 flex flex-col pt-28 pb-12 px-8 transition-transform duration-500 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col gap-1">
                        {NAV_ITEMS.map((label, i) => (
                            <div
                                key={label}
                                className={`transition-all duration-300 ${open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                                style={{
                                    transitionDelay: open ? `${i * 60 + 100}ms` : '0ms',
                                }}
                                onClick={() => setOpen(false)}>
                                <span className="text-white text-[1.4rem] font-medium tracking-tight py-3 block border-b border-white/10 hover:text-white/60 transition-colors cursor-pointer">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div
                        className={`mt-8 transition-all duration-300 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ transitionDelay: open ? '400ms' : '0ms' }}>
                        <SlideButton className="text-[0.7rem] uppercase font-semibold tracking-widest font-jetbrains w-full">
                            <UnderlineText>Contact</UnderlineText>
                        </SlideButton>
                    </div>
                </div>
            </div>
        </>
    )
}
