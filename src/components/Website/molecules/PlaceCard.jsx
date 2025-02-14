import Image from "../atoms/Image";

const PlaceCard = ({ imageSrc, altText, logoSrc, logoAlt, className }) => {
    return (
        <div className={`relative ${className}`}>
            <Image src={imageSrc} alt={altText} className="w-full h-full" />

            {/* logo overlay */}
            <div className="absolute bottom-0 right-0 bg-white flex items-center justify-center bg-primary">
                <Image src={logoSrc} alt={logoAlt} className="w-4/5 py-2 px-2" />
            </div>
        </div>
    );
};

export default PlaceCard;
