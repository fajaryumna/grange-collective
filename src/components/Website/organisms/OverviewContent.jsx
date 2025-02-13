import Image from "../atoms/Image";
import LineStroke from "../atoms/LineStroke";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import InfoBox from "../molecules/InfoBox";
import StatisticItem from "../molecules/StaticticItem";

const OverviewContent = ({ clientName, description, topImage, bottomImage, clientIcon, statistics }) => {
    return (
        <div className="min-w-full flex flex-col lg:flex-row lg:justify-between">
            {/* Title on mobile */}
            <div className="lg:hidden flex justify-start items-center space-x-2 pb-3 order-1 lg:order-none">
                <LineStroke />
                <Heading level="h3">OVERVIEW</Heading>
            </div>

            {/* col 1 */}
            <div className="flex flex-row w-full lg:w-4/9 items-center order-3 lg:order-none">
                <div className="flex flex-col relative z-20">
                    {/* section info */}
                    <div
                        className="hidden lg:flex justify-start items-center space-x-2 pb-2 lg:space-x-10 lg:pb-8">
                        <LineStroke className="lg:w-30 lg:border-t-4" />
                        <Heading level="h3">OVERVIEW</Heading>
                    </div>
                    <Heading level="h1" className="leading-[30px] lg:leading-[52px] py-4 lg:py-0 lg:pb-6">A Little Infomation For Our Guest</Heading>

                    {/* box section on mobile */}
                    <div className="flex flex-row lg:hidden items-center justify-between bg-primary space-x-1 w-full pb-3 text-brown-mobile">
                        {statistics.map((statistic, index) => (
                            <StatisticItem key={statistic.key} number={statistic.value} text={statistic.text} borderColor={"border-brown-mobile"} textColor={"text-brown-mobile"}/>
                        ))}
                    </div>
                   
                    <Text className="text-justify text-[14px] lg:text-[18px] leading-[18px] lg:leading-[35px] pb-2 lg:pb-4">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque netus
                        lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc.
                    </Text>

                    {/* box section on web */}
                    <InfoBox
                        iconSrc={clientIcon}
                        iconAlt={clientName}
                        hasHorizontalLine={false}
                        className="hidden lg:flex flex-row h-[130px] w-[150%] relative justify-between"
                    >
                        {statistics.map((statistic, index) => (
                            <StatisticItem key={statistic.key} number={statistic.value} text={statistic.text} />
                        ))}
                    </InfoBox>
                    
                </div>
            </div>

            {/* col 2 */}
            <div
                className="w-full lg:w-4/9 flex lg:flex-row justify-between items-center relative order-2 lg:order-none">
                {/* top image */}
                <div className="relative z-10 w-full">
                    <Image src={topImage} alt="top-image" className="w-full lg:w-4/5 h-[45vw] lg:h-[35vw]" />
                </div>
                {/* bottom image */}
                <div className="absolute z-0 top-1/2 left-[50%] transform -translate-y-1/2">
                    <Image src={bottomImage} alt="bottom-image" className="hidden lg:block h-[50%] opacity-80" />
                </div>
            </div>
        </div>
    )
};

export default OverviewContent;