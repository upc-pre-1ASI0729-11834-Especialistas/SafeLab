'use client'

const NavItem = ({ label }) => {
    return (
        <button
            type="button"
            className="flex items-center gap-2 nav-dropdown-trigger">
            {label}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="arrow-icon">
                <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    )
}

export default NavItem
