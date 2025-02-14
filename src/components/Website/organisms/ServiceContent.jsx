import Image from "../atoms/Image";
import LineStroke from "../atoms/LineStroke";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import InfoBox from "../molecules/InfoBox";
import CircleIcon from "../atoms/CircleIcon";

const ServiceContent = ({ name, description, imageSrc, restoIcon, restoMotto, serviceList }) => {
    return (
        <div className="min-w-full flex flex-col lg:flex-row lg:justify-between lg:items-center">
            {/* Col 1 */}
            <div className="relative flex flex-col lg:flex-row justify-center pt-0 lg:pt-12 w-full lg:w-4/9">
                {/* Title on Mobile */}
                <div className="lg:hidden flex justify-start items-center space-x-2 pb-2">
                    <LineStroke />
                    <Heading level="h3">OUR B&B SERVICE</Heading>
                </div>

                {/* Image */}
                <Image src={imageSrc} alt="our service" className="h-[45vw] lg:h-[42vw] lg:w-full" />

                {/* Info Box on Desktop, hidden on Mobile */}
                <InfoBox className="absolute bottom-10 hidden h-[120px] lg:flex w-[105%] translate-x-10 left-0 right-0" iconSrc={restoIcon} iconAlt={name}>
                    <div>
                        <Text className="text-[14px]">{restoMotto}</Text>
                    </div>
                </InfoBox>

            </div>

            {/* Col 2 */}
            <div className="flex flex-row w-full lg:w-4/9">
                <div className="flex flex-col">
                    {/* Title on Desktop */}
                    <div className="hidden lg:flex justify-start items-center space-x-8 pb-2">
                        <LineStroke className="lg:w-30 lg:border-t-4"/>
                        <Heading level="h3">OUR B&B SERVICE</Heading>
                    </div>

                    <Heading level="h1" className="py-1">More Complete With Our Service</Heading>
                    <Text className="text-justify text-[14px] lg:text-[20px] leading-[18px] lg:leading-[35px] pb-4 lg:pb-3" >{description}</Text>

                    <div class="grid grid-cols-2 grid-rows-3 gap-y-2 lg:gap-y-1 gap-x-2 lg:gap-x-1">
                        {serviceList.map((service, index) => (
                            <div key={index} className={`row-start-${Math.floor(index / 2) + 1} flex flex-row justify-start items-center space-x-4`}>
                                <CircleIcon src={service.icon} alt={service.name} className="lg:w-16 lg:h-16" imgWidth="w-[50%]"/>
                                <Text className="font-cormoran-garamond text-[18px] lg:text-[32px]">{service.name}</Text>
                            </div>
                        ))}
                    </div>       

                    {/* Navigation Link */}
                    <LineStroke width="w-full" thickness="border-t-2 lg:border-t-4" color="border-grey-custom" className="mb-2 mt-5"/>
                    <div className="flex flex-row justify-start items-center space-x-2 lg:space-x-4 cursor-pointer">
                        
                        <Text className="font-cormoran-garamond text-[24px] text-primary hidden lg:block">Learn more about our services</Text>
                        <Image src="/images/icons/arrow-service.svg" alt="arrow-service" className="w-[34px] hidden lg:block" />
                        
                        <Text className="font-cormoran-garamond text-[16px] text-brown-mobile block lg:hidden">Learn more about our services</Text>
                        <Image src="/images/icons/arrow-service-mobile.svg" alt="arrow-service" className="w-[20px] block lg:hidden" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceContent;
