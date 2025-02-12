const IconImage = ({ src, alt, className = "" }) => {
    return <img src={src} alt={alt} className={`w-[110%] max-h-full flex-shrink-0 ${className}`} />;
};

export default IconImage;
