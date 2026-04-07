export default function SlideButton({
    children,
    className = '',
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`
        relative overflow-hidden inline-flex items-center justify-center
        px-10 py-3.5 text-sm font-medium tracking-wide
        rounded-md
        text-neutral-900 bg-white
        transition-all duration-400 ease-in-out

        before:absolute before:bottom-0 before:left-0 before:w-full
        before:h-0
        before:bg-neutral-900
        before:transition-all before:duration-400
        before:opacity-0

        hover:before:opacity-100
        hover:before:h-full
        hover:text-[#abff02]
        hover:bg-transparent

        active:scale-[0.98]
        ${className}
      `}
            {...props}>
            <span className="relative z-10">{children}</span>
        </button>
    )
}
