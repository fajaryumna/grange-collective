const Overlay = ({ 
    color = "bg-white", 
    opacity = "opacity-40", 
    className = "", 
    style = {} 
}) => {
    return (
        <div 
            className={`absolute inset-0 ${color} ${opacity} ${className} transition-opacity duration-700`}
            style={{ ...style, opacity }} // Memastikan opacity bisa diatur lewat props
        />
    );
};

export default Overlay;
