import { useState } from "react";
import ButtonDot from "../atoms/ButtonDot";
import Banner from "../organisms/Banner";

const MenuBannerCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className="px-15 py-10 lg:px-30 lg:py-10 bg-primary">
            {/* Banner Content */}
            <div className="relative overflow-hidden">
                <div 
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }} 
                >
                    <Banner/>
                    <Banner/>
                    <Banner/>
                    <Banner/>
                </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-4 lg:space-x-8 mt-4 lg:mt-8">
                <ButtonDot isActive={activeSlide === 0} onClick={() => setActiveSlide(0)} />
                <ButtonDot isActive={activeSlide === 1} onClick={() => setActiveSlide(1)} />
                <ButtonDot isActive={activeSlide === 2} onClick={() => setActiveSlide(2)} />
                <ButtonDot isActive={activeSlide === 3} onClick={() => setActiveSlide(3)} />
            </div>
        </div>
    )
};

export default MenuBannerCarousel;