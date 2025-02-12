const CircleIcon = ({ href="#", src, alt, imgWidth="",className = "", target = "_blank", rel = "noopener noreferrer" }) => {
    return (
        <a
            href={href}
            className={`w-10 h-10 flex items-center justify-center bg-tertiary rounded-full flex-shrink-0 ${className}`}
            target={target}
            rel={rel}
        >
            <img src={src} alt={alt} className={`${imgWidth}`}/>
        </a>
    );
};

export default CircleIcon;
