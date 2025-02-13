import React from "react";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";
import GallerySection from "../organisms/GallerySection";
import OurClientsSection from "../organisms/OurClientsSection";
import ServiceCarousel from "./ServiceCarousel";
import OverviewCarousel from "./OverviewCarousel";
import HomeBannerDekstopContainter from "./HomeBannerDekstopContainer";
import HomeBannerMobileCarousel from "./HomeBannerMobileCarousel";

const HomePageTemplate = ({bannerData, serviceData, overviewData}) => {
    return (
        <>
            <Navbar></Navbar>

            {/* Main Content */}

            <HomeBannerMobileCarousel banners={bannerData}></HomeBannerMobileCarousel>
            <HomeBannerDekstopContainter banners={bannerData}></HomeBannerDekstopContainter>

            <OverviewCarousel overviews={overviewData}></OverviewCarousel>
            <ServiceCarousel services={serviceData}></ServiceCarousel>
            <OurClientsSection></OurClientsSection>
            <GallerySection></GallerySection>

            <Footer></Footer>
        </>        
    );
};

export default HomePageTemplate;
