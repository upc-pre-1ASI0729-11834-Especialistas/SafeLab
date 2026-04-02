'use client'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="absolute  z-50 top-0 mt-10">
            <div className="bg-black/30 rounded-lg backdrop-blur-md p-4 px-6 font-inter flex gap-4 items-center relative">
                <div className=" flex items-center  gap-6 sm:gap-5 md:gap-4 lg:gap-6 text-xs sm:text-[0.60rem] md:text-[0.55rem] lg:text-[0.65rem] xl:text-[0.80rem] ">
                    <h1>LOGO</h1>
                    <h1>System</h1>
                    <h1>Markets</h1>
                    <h1>Insights</h1>
                    <h1>Resources</h1>
                    <h1>About</h1>

                    <button className="flex bg-[#fff] text-black rounded-[5px] px-6 py-2 gap-2">
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    )
}
