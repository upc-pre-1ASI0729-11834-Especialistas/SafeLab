type UnderlineLinkProps = {
    href: string
    children: React.ReactNode
    className?: string
}

export default function Underlinelink({
    href,
    children,
    className = '',
}: UnderlineLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative inline-flex w-fit group text-white ${className}`}>
            {children}

            <span
                className="
          absolute left-0 -bottom-0.5  h-[0.05em] w-full bg-white
          scale-x-0 origin-right rounded-full
          transition-transform duration-400 ease-in-out
          group-hover:scale-x-100 group-hover:origin-left
        "
            />
        </a>
    )
}
