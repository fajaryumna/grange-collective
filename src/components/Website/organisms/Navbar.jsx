import { useState } from "react";
import MobileNav from "../molecules/MobileNav";
import DesktopNav from "../molecules/DekstopNav";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const links = ["home", "about", "menu", "gallery", "news", "order"];

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="flex justify-between items-center px-6 lg:px-20 pt-4 lg:pt-0 bg-primary relative">
            {/* Logo */}
            <a href="/">
                <img src="/images/CompanyLogo.svg" alt="Company Logo" className="h-20 lg:h-30" />
            </a>

            {/* Desktop Navigation */}
            <DesktopNav links={links} />

            {/* Hamburger Menu Button (Mobile) */}
            <button onClick={toggleMenu} className="lg:hidden text-white text-3xl focus:outline-none">
                <img src="/images/icons/hamburger-menu.svg" alt="hamburger menu" />
            </button>

            {/* Mobile Navigation */}
            <MobileNav links={links} isOpen={isMobileMenuOpen} closeMenu={closeMenu} />
        </header>
    );
};

export default Navbar;
