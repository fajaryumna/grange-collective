import CircleIcon from "../atoms/CircleIcon";
import Text from "../atoms/Text";
import Heading from "../atoms/Heading";
import Image from "../atoms/Image";

const AboutSection = ({className=""}) => {

    const socialLinks = [
        { href: "https://twitter.com", src: "/images/icons/twiter.svg", alt: "Twitter" },
        { href: "https://facebook.com", src: "/images/icons/facebook.svg", alt: "Facebook" },
        { href: "https://instagram.com", src: "/images/icons/instagram.svg", alt: "Instagram" },
        { href: "https://pintrest.com", src: "/images/icons/pintrest.svg", alt: "Pinterest" },
    ];

    return (
        <div className={`flex items-start space-x-4 pb-4 ${className}`}>
            <div className="w-10 border-t-4 mt-5 hidden lg:block"></div>
            <div className="w-9/10 lg:w-64">
                <Heading level="h3" className="text-[32px] pb-1 lg:pb-4">About</Heading>
                <Text className="text-[12px] lg:text-[14px] pb-1 lg:pb-4 text-justify"> Stay connected with us and let’s know more stories about The Grance Collective and more, explore
                    us for get it.</Text>

                <div className="flex space-x-4 mb-4">
                    {socialLinks.map(({ href, src, alt }, index) => (
                        <CircleIcon key={index} href={href} src={src} alt={alt} />
                    ))}
                </div>

                <div className="flex flex-row justify-start space-x-4">
                    <Image src="/images/icons/location.svg" alt="location icon" className="self-start mt-1"/>
                    <div className="flex flex-col font-poppins text-[12px] lg:text-[14px] text-primary">
                        <Text className="font-bold">The Grange Collective</Text>
                        <Text className="">1 Fusionopolis Pl, #01 - 23 / 24 Galaxis Singapore 138522</Text>
                        <a href="https://wa.me/6597735318" target="_blank" rel="noopener noreferrer">
                            <Text className="text-blue-500 cursor-pointer">+65 9773 5318</Text>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutSection