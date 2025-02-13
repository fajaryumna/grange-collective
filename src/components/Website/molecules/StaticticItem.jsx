import LineStroke from "../atoms/LineStroke";
import Text from "../atoms/Text";

const StatisticItem = ({ number, text, borderColor, textColor }) => {
    return (
        <div className="flex flex-col items-center text-center w-1/4">
            <div className="flex flex-row items-center space-x-2">
                <LineStroke thickness="border-t-3" className="lg:w-15" color={borderColor}/>
                <Text className={`text-[16x] lg:text-[20px] font-cormoran-garamond ${textColor}`}>{number}</Text>
            </div>
            <Text className={`text-[10px] lg:text-[20px] font-extralight ${textColor}`}>{text}</Text>
        </div>
    );
};

export default StatisticItem;
