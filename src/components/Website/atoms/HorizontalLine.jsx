const HorizontalLine = ({ isVisible = true }) => {
    if (!isVisible) return null;
    return <div className="absolute top-0 right-0 w-[148px] h-[10px] bg-tertiary"></div>;
};

export default HorizontalLine;
