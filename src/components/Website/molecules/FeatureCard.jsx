import Image from "../atoms/Image";
import Overlay from "../atoms/Overlay";
import Text from "../atoms/Text";

const FeatureCard = ({ imageSrc, altText, logoSrc, title, description }) => {
    return (
        <div className="w-full aspect-[2/3] relative">
            {/* Background Image */}
            <Overlay color="bg-black" opacity="opacity-60"/>
            <Image src={imageSrc} alt={altText} className="w-full h-full" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center w-2/3 left-1/2 transform -translate-x-1/2">
                <Image src={logoSrc} alt={altText} className="pb-2" />             
                <Text className="font-cormoran-garamond text-[18px] lg:text-[24px] text-quaternary pb-2">{title}</Text>
                <Text className="font-poppins text-[12px] leading-[18px] text-quaternary text-center">{description}</Text>
            </div>
        </div>
    );
};

export default FeatureCard;