import Heading from "../atoms/Heading";
import Image from "../atoms/Image";
import LineStroke from "../atoms/LineStroke";

const OurClientsSection = () => {
    return (
        <div className="flex flex-col w-full px-9 pb-5 lg:px-30 lg:py-12 bg-primary lg:bg-secondary">
            <div className="flex justify-start items-center space-x-4 lg:space-x-8 pb-2 lg:pb-8">
                <LineStroke className="lg:w-30 lg:border-t-4" />
                <Heading level="h3">OUR CLIENTS</Heading>
            </div>
            <div className="flex flex-row justify-center">
                <Image src="/images/client.png" alt="our clients" className="w-full"> </Image>
            </div>
        </div>
    );
};

export default OurClientsSection;
