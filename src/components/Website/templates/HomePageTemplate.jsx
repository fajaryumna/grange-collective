import React from "react";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";
import GallerySection from "../organisms/GallerySection";
import OurClientsSection from "../organisms/OurClientsSection";
import ServiceCarousel from "../organisms/ServiceCarousel";

const HomePageTemplate = () => {
    return (
        <>
            <Navbar></Navbar>

            {/* Main Content */}
            <ServiceCarousel></ServiceCarousel>
            <OurClientsSection></OurClientsSection>
            <GallerySection></GallerySection>

            <Footer></Footer>
        </>        
    );
};

export default HomePageTemplate;
