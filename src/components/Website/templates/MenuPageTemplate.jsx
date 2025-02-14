import React from "react";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";
import MenuBannerCarousel from "./MenuBannerCarousel";

const MenuPageTemplate = () => {
    return (
        <>
            <Navbar/>

            {/* Main Content */}
            <MenuBannerCarousel></MenuBannerCarousel>
            

            <Footer/>
        </>        
    );
};

export default MenuPageTemplate;
