import React from 'react';
import FooterSection from '../molecules/FooterSection';
import AboutSection from '../molecules/AboutSection';

export const Footer = () => {
    const productLinks = [
        { href: "#", label: "Coffee" },
        { href: "#", label: "Fast Food" },
        { href: "#", label: "Breakfast" },
        { href: "#", label: "Meeting Room" },
    ];

    const informationLinks = [
        { href: "#", label: "Sign Up" },
        { href: "#", label: "Join Community" },
        { href: "#", label: "Discount Code" },
        { href: "#", label: "Membership" },
    ];

    const platformLinks = [
        { href: "#", label: "Terms Of Use" },
        { href: "#", label: "About" },
        { href: "#", label: "Contact" },
        { href: "#", label: "Cafe Location" },
    ];

    return (
        <>
            <footer className="bg-[#E7E7E6] px-11 py-10 lg:px-30 lg:py-15">
                <div className="flex flex-col lg:flex-row justify-between text-primary space-x-2">
                    {/* About Section */}
                    <AboutSection className='order-1 lg:order-4'></AboutSection>
                    <FooterSection title={"Product"} links={productLinks} className='order-2 lg:order-1' ></FooterSection>
                    <FooterSection title={"Information"} links={informationLinks} className='order-3 lg:order-2'></FooterSection>
                    <FooterSection title={"Platform"} links={platformLinks} className='order-4 lg:order-3'></FooterSection>
                </div>
            </footer>
        </>
    );
};

export default Footer;