export default function UnderlineText({
    children,
    className = '',
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <span className={`relative inline-block leading-none ${className}`}>
            {children}
            <span
                className="
          pointer-events-none
          absolute left-0 -bottom-[4px]  
          h-[1px] w-full
          bg-[#abff02]
          scale-x-0 origin-right
          transition-transform duration-300 ease-in-out
          group-hover:scale-x-100 group-hover:origin-left
        "
            />
        </span>
    )
}
