const VerticalLine = ({ isVisible = true }) => {
    if (!isVisible) return null;
    return <div className="absolute top-0 bottom-0 w-[18px] h-full bg-tertiary"></div>;
};

export default VerticalLine;
