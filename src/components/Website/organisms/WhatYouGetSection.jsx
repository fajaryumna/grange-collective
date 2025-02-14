import LineStroke from "../atoms/LineStroke";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import FeatureCard from "../molecules/FeatureCard";

const WhatYouGetSection = ({ features }) => {
    return (
        <div className="px-15 py-10 lg:px-30 lg:py-10 bg-primary text-primary">
            <div className="flex flex-col items-center">
                <div className="w-11/20 pb-5">
                    <div className="flex flex-row space-x-10 justify-center items-center pb-3">
                        <LineStroke width="w-24" thickness="border-t-4" />
                        <Heading level="h2">What You Get</Heading>
                        <LineStroke width="w-24" thickness="border-t-4"/>
                    </div>

                    <Text className="text-[18px] leading-[30px] text-center" >
                        Lorem ipsum dolor sit amet
                        consectetur. Pellentesque netus lobortis imperdiet et non ac.
                        Magnis proin nibh aenean gravida nunc.
                    </Text>
                </div>

                <div class="grid grid-cols-4 gap-1 w-full">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))};
                </div>

            </div>
        </div>
    )
}

export default WhatYouGetSection;