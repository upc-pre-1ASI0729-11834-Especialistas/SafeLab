'use client'
import NavItem from './Navitem'
import SlideButton from '@/components/ui/Slidebutton'
import UnderlineText from '@/components/ui/Underlinetext'

export default function Navbar() {
    return (
        <nav className="fixed z-50 top-0 mt-12">
            <div className="bg-black/30 rounded-lg backdrop-blur-xl py-4 px-5 font-inter flex gap-6 items-center">
                <div className="font-medium text-white flex items-center gap-7 text-[0.85rem]">
                    <h1 className="text-[1.20rem] font-semibold tracking-wide">
                        Safelab
                    </h1>

                    <NavItem label="Productos" />
                    <NavItem label="Markets" />
                    <NavItem label="Insights" />
                    <NavItem label="Resources" />
                    <NavItem label="About" />

                    <SlideButton className="text-[0.7rem] uppercase font-semibold tracking-widest font-jetbrains">
                        <UnderlineText>Contact</UnderlineText>
                    </SlideButton>
                </div>
            </div>
        </nav>
    )
}
