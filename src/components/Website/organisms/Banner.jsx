import Image from "../atoms/Image";
import InfoBox from "../molecules/InfoBox";
import Heading from "../atoms/Heading";
import Overlay from "../atoms/Overlay";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

const Banner = () => {
    return (
        <div className="min-w-full relative h-[37vw]">
            <Image src="images/gallery/gallery1.png" alt="banner" className="w-full h-full absolute top-0 left-0" />
            <Overlay color="bg-gradient-to-r from-black to-transparent" opacity="opacity-80" />

            {/* title */}
            <div className="absolute top-10 left-10 lg:top-20 lg:left-20 w-[50%]">
                <Heading level="h1" color="text-quaternary" className="text-[16px]">Buy Two All Menu and Get Another One For Free</Heading>
            </div>

            {/* info box */}
            <InfoBox iconSrc="images/restaurant/BreadYard.svg" iconAlt="breadyard"
                className="absolute bottom-10 left-10 lg:bottom-20 lg:left-20 transform bg-white shadow-2xl h-[120px] w-[50%]">
                <div className="w-[60%] flex flex-col space-y-2 items-center">
                    <Text className="text-[14px]">Come and try for enjoying your day with our special menu, Grab Yours Now!</Text>
                    <Button variant="tertiary" className="w-full h-[25px]">
                        <Text className="text-[14px] text center" font="font-cormoran-garamond">Check All Offers</Text>
                    </Button>
                </div>
            </InfoBox>
        </div>
    )
};

export default Banner;