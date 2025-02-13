import { useState } from "react";
import ServiceContent from "../organisms/ServiceContent";
import ButtonDot from "../atoms/ButtonDot";

const ServiceCarousel = ({ services }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className="px-9 pb-8 lg:px-30 lg:py-6 bg-primary text-primary">
            {/* Carousel Content */}
            <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${(activeSlide) * 100}%)` }}>
                    {services.map((service, index) => (
                        <ServiceContent key={index} {...service} />
                    ))}
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="hidden lg:flex justify-center space-x-8 mt-8">
                {services.map((_, index) => (
                    <ButtonDot key={index} isActive={activeSlide === index} onClick={() => setActiveSlide(index)} />
                ))}
            </div>
        </div>
    );
};

export default ServiceCarousel;
