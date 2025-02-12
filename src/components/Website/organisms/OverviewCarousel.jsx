import { useState } from "react";
import OverviewContent from "../molecules/OverviewContent";
import ButtonDot from "../atoms/ButtonDot";

const overviews = [
    {
        clientName: "Bread Yard",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc.",
        topImage: "/images/overview",
        bottomImage: "/images/overview2",
        clientIcon: "/images/clients/BreadYard.svg",
        statistics: [
            { "name": "totalMenu", "value": "100+" },
            { "name": "dailyVisitors", "value": "150+" },
            { "name": "totalReviews", "value": "200+" }
        ],
    },
    {
        clientName: "Granary",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        topImage: "/images/overview",
        bottomImage: "/images/overview2", 
        clientIcon: "/images/clients/Granary.svg",
        statistics: [
            { "name": "totalMenu", "value": "100+" },
            { "name": "dailyVisitors", "value": "150+" },
            { "name": "totalReviews", "value": "200+" }
        ],
    },
    {
        clientName: "Hathaway",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        topImage: "/images/overview",
        bottomImage: "/images/overview2",
        clientIcon: "/images/clients/Hathaway.svg",
        statistics: [
            { "name": "totalMenu", "value": "100+" },
            { "name": "dailyVisitors", "value": "150+" },
            { "name": "totalReviews", "value": "200+" }
        ],
    },
    {
        clientName: "Vernacular",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        topImage: "/images/overview",
        bottomImage: "/images/overview2",
        clientIcon: "/images/clients/Vernacular.svg",
        statistics: [
            { "name": "totalMenu", "value": "100+" },
            { "name": "dailyVisitors", "value": "150+" },
            { "name": "totalReviews", "value": "200+" }
        ],
    }
];

const OverviewCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(1);

    return (
        <div className="px-9 pb-8 lg:px-30 lg:py-6 bg-primary text-primary">
            {/* Carousel Content */}
            <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}>
                    
                    {overviews.map((overview, index) => (
                        <OverviewContent key={index} {...overview} />
                    ))}
                    
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="hidden lg:flex justify-center space-x-8 mt-8">
                {services.map((_, index) => (
                    <ButtonDot key={index} isActive={activeSlide === index + 1} onClick={() => setActiveSlide(index + 1)} />
                ))}
            </div>
        </div>
    );
};

export default OverviewCarousel;
