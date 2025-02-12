import { useState } from "react";
import ServiceContent from "../molecules/ServiceContent";
import ButtonDot from "../atoms/ButtonDot";

const services = [
    {
        clientName: "Bread Yard",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc.",
        imageSrc: "/images/gallery/gallery4.png",
        clientIcon: "/images/clients/BreadYard.svg",
        clientMoto: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac.",
        serviceList: [
            { name: "Corporate Event", icon: "/images/icons/service2.svg" },
            { name: "Catering", icon: "/images/icons/service3.svg" },
            { name: "Wedding", icon: "/images/icons/service4.svg" },
            { name: "Birthday", icon: "/images/icons/service1.svg" },
            { name: "Product Launch", icon: "/images/icons/service4.svg" },
        ],
    },
    {
        clientName: "Granary",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        imageSrc: "/images/gallery/gallery4.png",
        clientIcon: "/images/clients/Granary.svg",
        clientMoto: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac.",
        serviceList:[
            { name: "Corporate Event", icon: "/images/icons/service2.svg" },
            { name: "Catering", icon: "/images/icons/service3.svg" },
            { name: "Wedding", icon: "/images/icons/service4.svg" },
            { name: "Birthday", icon: "/images/icons/service1.svg" },
            { name: "Product Launch", icon: "/images/icons/service4.svg" },
        ],
    },
    {
        clientName: "Hathaway",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        imageSrc: "/images/gallery/gallery4.png",
        clientIcon: "/images/clients/Hathaway.svg",
        clientMoto: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac.",
        serviceList:[
            { name: "Corporate Event", icon: "/images/icons/service2.svg" },
            { name: "Catering", icon: "/images/icons/service3.svg" },
            { name: "Wedding", icon: "/images/icons/service4.svg" },
            { name: "Birthday", icon: "/images/icons/service1.svg" },
            { name: "Product Launch", icon: "/images/icons/service4.svg" },
        ],
    },
    {
        clientName: "Vernacular",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        imageSrc: "/images/gallery/gallery4.png",
        clientIcon: "/images/clients/Vernacular.svg",
        clientMoto: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac.",
        serviceList:[
            { name: "Corporate Event", icon: "/images/icons/service2.svg" },
            { name: "Catering", icon: "/images/icons/service3.svg" },
            { name: "Wedding", icon: "/images/icons/service4.svg" },
            { name: "Birthday", icon: "/images/icons/service1.svg" },
            { name: "Product Launch", icon: "/images/icons/service4.svg" },
        ],
    }
];

const ServiceCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(1);

    return (
        <div className="px-9 pb-8 lg:px-30 lg:py-6 bg-primary text-primary">
            {/* Carousel Content */}
            <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}>
                    {services.map((service, index) => (
                        <ServiceContent key={index} {...service} />
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

export default ServiceCarousel;
