const Text = ({ children, font="font-poppins", className = "" }) => {
    return <p className={`${font} ${className}`}>{children}</p>;
};

export default Text;
