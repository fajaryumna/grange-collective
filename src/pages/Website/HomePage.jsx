import React from 'react';
import HomePageTemplate from '../../components/Website/templates/HomePageTemplate';

const serviceData = [
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

const bannerData = [
    {
        name: "Bread Yard",
        imageSrc: "/images/banner/bread-yard.png",
        logoSrc: "/images/clients/BreadYard.svg",
        infoText: "Lorem ipsum dolor sit amet consectetur. Arcu cras interdum commodo dui metus vel urna.",
    },
    {
        name: "Granary",
        imageSrc: "/images/banner/granary.png",
        logoSrc: "/images/clients/Granary.svg",
        infoText: "Lorem ipsum dolor sit amet consectetur. Arcu cras interdum commodo dui metus vel urna.",
    },
    {
        name: "Hathway",
        imageSrc: "/images/banner/hathway.png",
        logoSrc: "/images/clients/Hathaway.svg",
        infoText: "Lorem ipsum dolor sit amet consectetur. Arcu cras interdum commodo dui metus vel urna.",
    },
    {
        name: "Vernacular",
        imageSrc: "/images/banner/vernacular-coffe.png",
        logoSrc: "/images/clients/Vernacular.svg",
        infoText: "Lorem ipsum dolor sit amet consectetur. Arcu cras interdum commodo dui metus vel urna.",
    },
];

const overviewData = [
    {
        clientName: "Bread Yard",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc.",
        topImage: "/images/overview.png",
        bottomImage: "/images/overview2.png",
        clientIcon: "/images/clients/BreadYard.svg",
        statistics: [
            { key: "totalMenu", value: "100+", text:"Of all menu that you can order" },
            { key: "dailyVisitors", value: "150+", text:"Daily Visitor to Our Coffee Shop" },
            { key: "totalReviews", value: "200+", text:"Best Coffee Shop in Semarang" }
        ],
    },
    {
        clientName: "Granary",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        topImage: "/images/overview.png",
        bottomImage: "/images/overview2.png",
        clientIcon: "/images/clients/Granary.svg",
        statistics: [
            { key: "totalMenu", value: "100+", text:"Of all menu that you can order" },
            { key: "dailyVisitors", value: "150+", text:"Daily Visitor to Our Coffee Shop" },
            { key: "totalReviews", value: "200+", text:"Best Coffee Shop in Semarang" }
        ],
    },
    {
        clientName: "Hathaway",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        topImage: "/images/overview.png",
        bottomImage: "/images/overview2.png",
        clientIcon: "/images/clients/Hathaway.svg",
        statistics: [
            { key: "totalMenu", value: "100+", text:"Of all menu that you can order" },
            { key: "dailyVisitors", value: "150+", text:"Daily Visitor to Our Coffee Shop" },
            { key: "totalReviews", value: "200+", text:"Best Coffee Shop in Semarang" }
        ],
    },
    {
        clientName: "Vernacular",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        topImage: "/images/overview.png",
        bottomImage: "/images/overview2.png",
        clientIcon: "/images/clients/Vernacular.svg",
        statistics: [
            { key: "totalMenu", value: "100+", text:"Of all menu that you can order" },
            { key: "dailyVisitors", value: "150+", text:"Daily Visitor to Our Coffee Shop" },
            { key: "totalReviews", value: "200+", text:"Best Coffee Shop in Semarang" }
        ],
    }
];

export const HomePage = () => {
    return (
        <>
            <HomePageTemplate
                bannerData={bannerData}
                serviceData={serviceData}
                overviewData={overviewData}
            />
        </>
    );
};  