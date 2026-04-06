'use client'
interface NavItemProps {
    label: string
    options?: string[]
}
const NavItem = ({ label, options = [] }: NavItemProps) => {
    return (
        <div className="relative group">
            <button
                type="button"
                className="relative flex items-center gap-1.5 px-1 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 group-hover:text-[#a2fa00]">
                {label}
                {/* Underline desde el centro */}
                <span className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 h-[4px] bg-[#a2fa00] w-[4px] scale-x-0 origin-center transition-transform duration-200 ease-in group-hover:scale-150" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="flex-shrink-0 mt-px transition-transform duration-300 ease-in-out group-hover:rotate-180">
                    <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {/* Dropdown */}
            <div className="absolute bg-[#484943] top-[calc(100%+4px)] left-1/2 -translate-x-1/2 min-w-[160px] rounded-md  mt-6 p-1.5  z-50 opacity-0 -translate-y-1 scale-95 pointer-events-none group-hover:opacity-70   group-hover:pointer-events-auto transition-all duration-200 ease-in-out origin-top">
                {options.map((opt) => (
                    <button
                        key={opt}
                        type="button"
                        className="flex w-full items-center gap-2.5  px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors duration-150">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default NavItem
