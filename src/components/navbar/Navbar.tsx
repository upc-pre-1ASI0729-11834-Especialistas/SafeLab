'use client'
import NavItem from './Navitem'

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

                    <button className="flex bg-[#fff] text-[0.65rem] font-jetbrains tracking-widest text-black rounded-md px-8 py-3 gap-2">
                        CONTACT
                    </button>
                </div>
            </div>
        </nav>
    )
}
