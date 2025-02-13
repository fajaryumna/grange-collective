import { useState } from "react";
import OverviewContent from "../organisms/OverviewContent";
import ButtonDot from "../atoms/ButtonDot";

const OverviewCarousel = ({ overviews }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className="px-9 pb-8 lg:px-30 lg:py-6 bg-primary text-primary">
            {/* Carousel Content */}
            <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${(activeSlide) * 100}%)` }}>
                    
                    {overviews.map((overview, index) => (
                        <OverviewContent key={index} {...overview} />
                    ))}
                    
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-4 lg:space-x-8 mt-2 lg:mt-8">
                {overviews.map((_, index) => (
                    <ButtonDot key={index} isActive={activeSlide === index} onClick={() => setActiveSlide(index)} />
                ))}
            </div>
        </div>
    );
};

export default OverviewCarousel;
