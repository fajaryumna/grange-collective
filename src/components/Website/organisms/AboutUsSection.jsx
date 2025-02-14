import Image from "../atoms/Image";
import LineStroke from "../atoms/LineStroke";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import InfoBox from "../molecules/InfoBox";
import StatisticItem from "../molecules/StaticticItem";

const statistics = [
    {
        key: 1,
        value: "100+",
        text: "Of all menu that you can order",
    },
    {
        key: 2,
        value: "150+",
        text: "Daily Visitor to Our Coffee Shop",
    },
    {
        key: 3,
        value: "250+",
        text: "Best Coffee Shop in Semarang",
    },
];

const AboutUsSection = () => {
    return (
        <div className="px-20 py-10 lg:px-30 lg:py-15 bg-primary text-primary">
            <div className="min-w-full flex flex-row justify-between">
                <div className="flex flex-row w-1/2 items-center">
                    <div className="flex flex-col relative z-20">
                        <div
                            className="hidden lg:flex justify-start items-center space-x-2 pb-2 lg:space-x-10 lg:pb-8">
                            <LineStroke className="lg:w-30 lg:border-t-4" />
                            <Heading level="h3">About Us</Heading>
                        </div>
                        <Heading level="h1" className="leading-[30px] lg:leading-[52px] py-4 lg:py-0 lg:pb-6">A Little Infomation For Our Story</Heading>
    
                        {/* Description */}
                        <Text className="text-justify text-[14px] lg:text-[18px] leading-[18px] lg:leading-[35px] pb-2 lg:pb-4">
                            Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc.   
                        </Text>

                        {/* box section on web */}
                        <InfoBox
                            iconSrc={"/images/restaurant/BreadYard.svg"}
                            iconAlt={"breadYard"}
                            hasHorizontalLine={false}
                            className="hidden lg:flex flex-row h-[130px] w-[150%] relative justify-between"
                        >
                            {statistics.map((statistic, index) => (
                                <StatisticItem key={statistic.key} number={statistic.value} text={statistic.text} />
                            ))}
                        </InfoBox>
                    </div>
                </div>  

                <div className="w-1/3 h-[40vw] grid grid-cols-2 grid-rows-2 gap-0">
                    <Image src={"/images/about_us/about2.png"} alt="about us" className="w-full h-full" />
                    <Image src={"/images/about_us/about5.png"} alt="about us" className="w-full h-full" />
                    <Image src={"/images/about_us/about3.png"} alt="about us" className="w-full h-full" />
                    <Image src={"/images/about_us/about4.png"} alt="about us" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;
