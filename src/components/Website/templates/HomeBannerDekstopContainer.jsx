import { useState, useEffect, useRef } from "react";
import Button from "../atoms/Button";
import HomeBannerWeb from "../organisms/HomeBannerWeb";

const BannerContainer = ({ banners }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const nextBanner = () => {
        // stopAutoSlide();
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const prevBanner = () => {
        // stopAutoSlide();
        setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };

    // const startAutoSlide = () => {
    //     stopAutoSlide(); 
    //     intervalRef.current = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    //     }, 2000);
    // };

    // const stopAutoSlide = () => {
    //     if (intervalRef.current) {
    //         clearInterval(intervalRef.current);
    //         intervalRef.current = null;
    //     }
    // };

    // // Start auto slide when component mounts
    // useEffect(() => {
    //     startAutoSlide();
    //     return () => stopAutoSlide(); 
    // }, []);


    return (
        <div className="hidden lg:block w-full px-30 py-9 bg-primary relative overflow-hidden">
            <div className="relative w-full">
                <div id="banner-container" className="relative min-w-full h-full flex flex-row items-center justify-center">
                    {banners.map((banner, index) => {
                        const isTopBanner = index === currentIndex;
                        return (
                            <HomeBannerWeb
                                key={index}
                                imageSrc={banner.imageSrc}
                                altText={banner.name}
                                logoSrc={banner.logoSrc}
                                infoText={banner.infoText}
                                isTopBanner={isTopBanner}
                                zIndex={isTopBanner ? 30 : (30 - (Math.abs(currentIndex - index) * 10))} 
                                index={index}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-10 mt-7">
                <Button id="prev" onClick={prevBanner} variant="primary">
                    <img src="/images/icons/arrow-prev.svg" alt="Prev" />
                </Button>


                <Button id="next" onClick={nextBanner} variant="primary" className="space-x-2">
                    <span className="text-[18px]">NEXT</span>
                    <img src="/images/icons/arrow-next.svg" alt="Next" /> 
               </Button>

               {/* <button id="next"
                    className="border-2 border-black px-10 py-2 flex items-center space-x-2 hover:bg-gray-200 transition cursor-pointer">
                    <span className="text-[18px]">NEXT</span>
                    <img src="/images/icons/arrow-next.svg" alt="next" />
                </button> */}
            </div>
        </div>
    );
};

export default BannerContainer;
