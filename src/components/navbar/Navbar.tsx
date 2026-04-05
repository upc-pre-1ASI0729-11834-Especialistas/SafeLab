'use client'
import NavItem from './Navitem'

export default function Navbar() {
    return (
        <nav className="fixed z-50 top-0 mt-12">
            <div className="bg-black/20 rounded-lg backdrop-blur-sm py-5 px-8 font-inter flex gap-6 items-center">
                <div className="font-medium flex items-center gap-7 text-[0.85rem]">
                    <h1 className="xl:text-[1.20rem] font-semibold tracking-wide">
                        Safelab
                    </h1>

                    <NavItem label="System" />
                    <NavItem label="Markets" />
                    <NavItem label="Insights" />
                    <NavItem label="Resources" />
                    <NavItem label="About" />

                    <button className="flex bg-[#fff] text-[0.65rem] font-jetbrains tracking-widest text-black rounded-[5px] px-6 py-2 gap-2">
                        CONTACT
                    </button>
                </div>
            </div>
        </nav>
    )
}
