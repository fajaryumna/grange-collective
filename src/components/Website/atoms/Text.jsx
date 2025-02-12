const Text = ({ children, className = "" }) => {
    return <p className={`font-poppins text-primary text-justify ${className}`}>{children}</p>;
};

export default Text;
