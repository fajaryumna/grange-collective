const Heading = ({ level = "h3", children, className = "" }) => {
    const Tag = level;

    const sizes = {
        h1: "text-[24px] lg:text-[52px]",
        h2: "text-[24px] lg:text-[48px]",
        h3: "text-[16px] lg:text-[32px]", 
        h4: "text-[14px] lg:text-[24px]", 
    };

    return <Tag className={`font-cormoran-garamond text-primary ${sizes[level]} ${className}`}>{children}</Tag>;
};

export default Heading;
