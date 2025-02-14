import React from 'react';
import HomePageTemplate from '../../components/Website/templates/HomePageTemplate';

const serviceData = [
    {
        name: "Bread Yard",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc.",
        imageSrc: "/images/gallery/gallery4.png",
        restoIcon: "/images/restaurant/BreadYard.svg",
        restoMotto: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac.",
        serviceList: [
            { name: "Corporate Event", icon: "/images/icons/service2.svg" },
            { name: "Catering", icon: "/images/icons/service3.svg" },
            { name: "Wedding", icon: "/images/icons/service4.svg" },
            { name: "Birthday", icon: "/images/icons/service1.svg" },
            { name: "Product Launch", icon: "/images/icons/service4.svg" },
        ],
    },
    {
        name: "Granary",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        imageSrc: "/images/gallery/gallery4.png",
        restoIcon: "/images/restaurant/Granary.svg",
        restoMotto: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac.",
        serviceList:[
            { name: "Corporate Event", icon: "/images/icons/service2.svg" },
            { name: "Catering", icon: "/images/icons/service3.svg" },
            { name: "Wedding", icon: "/images/icons/service4.svg" },
            { name: "Birthday", icon: "/images/icons/service1.svg" },
            { name: "Product Launch", icon: "/images/icons/service4.svg" },
        ],
    },
    {
        name: "Hathaway",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        imageSrc: "/images/gallery/gallery4.png",
        restoIcon: "/images/restaurant/Hathaway.svg",
        restoMotto: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac.",
        serviceList:[
            { name: "Corporate Event", icon: "/images/icons/service2.svg" },
            { name: "Catering", icon: "/images/icons/service3.svg" },
            { name: "Wedding", icon: "/images/icons/service4.svg" },
            { name: "Birthday", icon: "/images/icons/service1.svg" },
            { name: "Product Launch", icon: "/images/icons/service4.svg" },
        ],
    },
    {
        name: "Vernacular",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        imageSrc: "/images/gallery/gallery4.png",
        restoIcon: "/images/restaurant/Vernacular.svg",
        restoMotto: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac.",
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
        logoSrc: "/images/restaurant/BreadYard.svg",
        infoText: "Lorem ipsum dolor sit amet consectetur. Arcu cras interdum commodo dui metus vel urna.",
    },
    {
        name: "Granary",
        imageSrc: "/images/banner/granary.png",
        logoSrc: "/images/restaurant/Granary.svg",
        infoText: "Lorem ipsum dolor sit amet consectetur. Arcu cras interdum commodo dui metus vel urna.",
    },
    {
        name: "Hathway",
        imageSrc: "/images/banner/hathway.png",
        logoSrc: "/images/restaurant/Hathaway.svg",
        infoText: "Lorem ipsum dolor sit amet consectetur. Arcu cras interdum commodo dui metus vel urna.",
    },
    {
        name: "Vernacular",
        imageSrc: "/images/banner/vernacular-coffe.png",
        logoSrc: "/images/restaurant/Vernacular.svg",
        infoText: "Lorem ipsum dolor sit amet consectetur. Arcu cras interdum commodo dui metus vel urna.",
    },
];

const overviewData = [
    {
        name: "Bread Yard",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc.",
        topImage: "/images/overview.png",
        bottomImage: "/images/overview2.png",
        restoIcon: "/images/restaurant/BreadYard.svg",
        statistics: [
            { key: "totalMenu", value: "100+", text:"Of all menu that you can order" },
            { key: "dailyVisitors", value: "150+", text:"Daily Visitor to Our Coffee Shop" },
            { key: "totalReviews", value: "200+", text:"Best Coffee Shop in Semarang" }
        ],
    },
    {
        name: "Granary",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        topImage: "/images/overview.png",
        bottomImage: "/images/overview2.png",
        restoIcon: "/images/restaurant/Granary.svg",
        statistics: [
            { key: "totalMenu", value: "100+", text:"Of all menu that you can order" },
            { key: "dailyVisitors", value: "150+", text:"Daily Visitor to Our Coffee Shop" },
            { key: "totalReviews", value: "200+", text:"Best Coffee Shop in Semarang" }
        ],
    },
    {
        name: "Hathaway",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        topImage: "/images/overview.png",
        bottomImage: "/images/overview2.png",
        restoIcon: "/images/restaurant/Hathaway.svg",
        statistics: [
            { key: "totalMenu", value: "100+", text:"Of all menu that you can order" },
            { key: "dailyVisitors", value: "150+", text:"Daily Visitor to Our Coffee Shop" },
            { key: "totalReviews", value: "200+", text:"Best Coffee Shop in Semarang" }
        ],
    },
    {
        name: "Vernacular",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc. ",
        topImage: "/images/overview.png",
        bottomImage: "/images/overview2.png",
        restoIcon: "/images/restaurant/Vernacular.svg",
        statistics: [
            { key: "totalMenu", value: "100+", text:"Of all menu that you can order" },
            { key: "dailyVisitors", value: "150+", text:"Daily Visitor to Our Coffee Shop" },
            { key: "totalReviews", value: "200+", text:"Best Coffee Shop in Semarang" }
        ],
    }
];

export const HomePage = () => {
    return (
        <HomePageTemplate
            bannerData={bannerData}
            serviceData={serviceData}
            overviewData={overviewData}
        />
    );
};  