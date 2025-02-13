import { useState, useEffect } from "react";
import HomeBannerMobile from "../molecules/HomeBannerMobile";
import ButtonDot from "../atoms/ButtonDot";
import ButtonNext from "../atoms/ButtonNext";
import ButtonPrev from "../atoms/ButtonPrev";

const HomeBannerMobileCarousel = ({ banners }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = banners.length;

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="block lg:hidden px-9 py-5 lg:px-30 lg:py-20 bg-primary text-primary relative">
            {/* Banner Content */}
            <div className="relative overflow-hidden">
                <div 
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }} 
                >
                    {banners.map((banner, index) => (
                        <HomeBannerMobile key={index} imgSrc={banner.imageSrc} altText={banner.name} />
                    ))}
                </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-4 mt-4">
                {banners.map((_, index) => (
                    <ButtonDot key={index} isActive={activeSlide === index} onClick={() => setActiveSlide(index)} />
                ))}
            </div>

            {/* Navigation Arrows */}
            <ButtonPrev onClick={prevSlide} className="absolute top-1/2 left-10 transform -translate-y-1/2" />
            <ButtonNext onClick={nextSlide} className="absolute top-1/2 right-10 transform -translate-y-1/2" />
        </div>
    );
};

export default HomeBannerMobileCarousel;
