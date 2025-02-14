import React from "react";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";
import AboutUsSection from "../organisms/AboutUsSection";
import OurPlacesSection from "../organisms/OurPlacesSection";
import WhatYouGetSection from "../organisms/WhatYouGetSection";

const AboutPageTemplate = ({features}) => {
    return (
        <>
            <Navbar/>

            {/* Main Content */}
            <AboutUsSection/>
            <OurPlacesSection/>
            <WhatYouGetSection features={features}/>

            <Footer/>
        </>        
    );
};

export default AboutPageTemplate;
