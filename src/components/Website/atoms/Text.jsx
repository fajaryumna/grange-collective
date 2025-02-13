const Text = ({ children, className = "" }) => {
    return <p className={`font-poppins text-primary ${className}`}>{children}</p>;
};

export default Text;
