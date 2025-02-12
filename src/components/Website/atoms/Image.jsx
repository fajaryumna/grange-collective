const Image = ({ src, alt, className = "" }) => {
    return <img src={src} alt={alt} className={ `object-cover ${className}`} loading="lazy" />;
};

export default Image;
