import NavItem from "../atoms/NavItem";

const DesktopNav = ({ links }) => {
    return (
        <nav className="hidden lg:flex space-x-6 lg:space-x-16 justify-center text-primary font-cinzel">
            {links.map((page) => (
                <NavItem key={page} href={`/${page}`}>
                    {page.toUpperCase().replace("-", " ")}
                </NavItem>
            ))}
        </nav>
    );
};

export default DesktopNav;
