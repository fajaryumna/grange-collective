const LinkItem = ({ href, children, className = "" }) => {
    return (
        <a href={href} className={`hover:underline text-[18px] ${className}`}>
            {children}
        </a>
    );
};

export default LinkItem;
