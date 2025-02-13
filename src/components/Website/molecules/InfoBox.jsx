import VerticalLine from "../atoms/VerticalLine";
import HorizontalLine from "../atoms/HorizontalLine";
import IconImage from "../atoms/IconImage";

const InfoBox = ({
    iconSrc,
    iconAlt,
    children,
    hasVerticalLine = true,
    hasHorizontalLine = true,
    className = "",
}) => {
    return (
        <div className={`bg-white shadow-xl space-x-6 h-[100px] flex flex-row items-center ${className}`}>
            <VerticalLine isVisible={hasVerticalLine} />

            <div className="flex items-center justify-center pl-12">
                <IconImage src={iconSrc} alt={iconAlt} />
            </div>
            {children}
            <HorizontalLine isVisible={hasHorizontalLine} />
        </div>
    );
};

export default InfoBox;
