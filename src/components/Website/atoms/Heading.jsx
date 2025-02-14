const Heading = ({ level = "h3", children, color = "text-primary", className = "" }) => {
    const Tag = level;

    const sizes = {
        h1: "lg:text-[52px]",
        h2: "lg:text-[48px]",
        h3: "lg:text-[32px]", 
        h4: "lg:text-[24px]", 
    };

    return <Tag className={`font-cormoran-garamond ${color} ${sizes[level]} ${className}`}>{children}</Tag>;
};

export default Heading;
