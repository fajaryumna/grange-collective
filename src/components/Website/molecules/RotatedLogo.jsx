import Image from "../atoms/Image";

const RotatedLogo = ({ src, alt, position, className }) => {
    const rotationClass = position === "left" ? "rotate-90 left-10" : "-rotate-90 right-10";
    return (
        <Image
            src={src}
            alt={alt}
            className={`absolute top-1/2 transform -translate-y-1/2 ${rotationClass} ${className}`}
        />
    );
};

export default RotatedLogo;
