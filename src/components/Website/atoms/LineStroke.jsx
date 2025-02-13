const LineStroke = ({ width = "w-10", thickness = "border-t-2", color = "border-gray", className = "" }) => {
    return <div className={`${width} ${thickness} ${color} ${className}`} />;
};

export default LineStroke;
