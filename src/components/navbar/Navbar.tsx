'use client'
import NavItem from './Navitem'
import SlideButton from '@/components/ui/Slidebutton'
import UnderlineText from '@/components/ui/Underlinetext'

export default function Navbar() {
    return (
        <nav className="fixed z-50 top-0 mt-12">
            <div className="bg-black/30 rounded-md backdrop-blur-xl py-5 px-5 font-inter flex gap-6 items-center">
                <div className="font-medium text-white flex items-center gap-7 text-[0.85rem]">
                    <h1 className="text-[1.20rem] font-semibold tracking-wide">
                        Safelab
                    </h1>

                    <NavItem label="Productos" />
                    <NavItem label="Markets" />
                    <NavItem label="Insights" />
                    <NavItem label="Resources" />
                    <NavItem label="About" />
                    <span className="relative inline-block">
                        Contact
                        <span className="absolute left-0 bottom-0 h-[1px] w-full bg-[#abff02] scale-x-0 origin-right transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:origin-left" />
                    </span>
                    <SlideButton className="text-[0.7rem] uppercase font-jetbrains tracking-wider">
                        <UnderlineText>Contact</UnderlineText>
                    </SlideButton>
                </div>
            </div>
        </nav>
    )
}
