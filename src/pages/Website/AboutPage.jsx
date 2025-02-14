import React from 'react';
import AboutPageTemplate from '../../components/Website/templates/AboutPageTemplate';

const features = [
    {
        name: "Coffee",
        imageSrc: "/images/about_us/coffee.png",
        logoSrc: "/images/about_us/coffee-logo.svg",
        title: "Original Coffee",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis",
    },
    {
        name: "Drink",
        imageSrc: "/images/about_us/drink.png",
        logoSrc: "/images/about_us/drink-logo.svg",
        title: "Fresh Drink",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis",
    },
    {
        name: "Music",
        imageSrc: "/images/about_us/music.png",
        logoSrc: "/images/about_us/music-logo.svg",
        title: "Music Concert",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis",
    },
    {
        name: "Bakery",
        imageSrc: "/images/about_us/bakery.png",
        logoSrc: "/images/about_us/bakery-logo.svg",
        title: "Fresh Bakery",
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis",
    },
];


export const AboutPage = () => {
    return (
        <AboutPageTemplate features={features}/>
    );
};  