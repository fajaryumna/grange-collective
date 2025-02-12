import { useEffect, useRef } from "react";
import NavItem from "../atoms/NavItem";

const MobileNav = ({ links, isOpen, closeMenu }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, closeMenu]);

    return (
        <div
            ref={menuRef}
            className={`fixed top-0 right-0 w-3/4 h-full bg-brown-mobile transform transition-transform duration-300 ease-in-out lg:hidden z-100 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <button onClick={closeMenu} className="absolute top-5 left-5">
                <img src="/images/icons/back-navbar.svg" alt="Back navbar" />
            </button>
            <nav className="flex flex-col items-center mt-20 space-y-6 text-quaternary font-cinzel font-normal text-[24px]">
                {links.map((page) => (
                    <NavItem key={page} href={`/${page}`} onClick={closeMenu}>
                        {page.toUpperCase().replace("-", " ")}
                    </NavItem>
                ))}
            </nav>
        </div>
    );
};

export default MobileNav;
