import LineStroke from "../atoms/LineStroke";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import PlaceCard from "../molecules/PlaceCard";

const OurPlacesSection = () => {
    return (
        <div className="px-20 py-10 lg:px-30 lg:py-15 bg-primary text-primary">
            <div className="min-w-full flex flex-row justify-between">

                <div className="flex flex-col w-1/3">
                    <div className="flex justify-start items-center space-x-10 pb-8">
                        <LineStroke className="lg:w-30 lg:border-t-4" />
                        <Heading level="h3">Our Places</Heading>
                    </div>

                    <Heading level="h1" className="leading-[30px] lg:leading-[52px] py-4 lg:py-0 lg:pb-6">Explore Our Place For Your Fun</Heading>

                    {/* Description */}
                    <Text className="text-justify text-[14px] lg:text-[18px] leading-[18px] lg:leading-[35px] pb-2 lg:pb-4">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac. Magnis proin nibh aenean gravida nunc.
                    </Text>
                </div>

                <div className="grid grid-cols-4 grid-rows-1 gap-4 w-3/5">
                    <PlaceCard imageSrc={'images/about_us/about1.png'} altText={"about us"} logoSrc={'images/restaurant/Hathaway.svg'} logoAlt={"hathway"} className={"mt-8"}/>
                    <PlaceCard imageSrc={'images/about_us/about2.png'} altText={"about us"} logoSrc={'images/restaurant/BreadYard.svg'} logoAlt={"bread yard"} className={"mb-8"}/>
                    <PlaceCard imageSrc={'images/about_us/about3.png'} altText={"about us"} logoSrc={'images/restaurant/Granary.svg'} logoAlt={"granary"} className={"mt-8"}/>
                    <PlaceCard imageSrc={'images/about_us/about4.png'} altText={"about us"} logoSrc={'images/restaurant/Vernacular.svg'} logoAlt={"vernacular"} className={"mb-8"}/>
                </div>
            </div>
        </div>
    );
};

export default OurPlacesSection;
