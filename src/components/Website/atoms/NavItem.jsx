const NavItem = ({ href, children, onClick, className = "" }) => {
    const isActive = window.location.pathname === href || (href === "/home" && window.location.pathname === "/");

    return (
        <a
            href={href}
            onClick={onClick}
            className={`relative text-[20px] lg:text-[24px] hover:text-gray-800 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[4px] after:bg-[#D2B589] after:transition-all after:duration-300 hover:after:w-full ${
                isActive ? "font-bold" : ""
            } ${className}`}
        >
            {children}
        </a>
    );
};

export default NavItem;
