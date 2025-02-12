import Heading from "../atoms/Heading";
import Image from "../atoms/Image";
import LineStroke from "../atoms/LineStroke";
import Text from "../atoms/Text";

const GalleryRow1 = () => {
    return (
        <div className="flex flex-row items-center justify-center h-[408px] bg-secondary hidden md:hidden lg:flex">
            <div className="flex flex-col px-12 lg:px-16 w-2/5">
                <div className="flex items-center space-x-4">
                    <LineStroke width="w-1/4"/>
                    <Heading level="h3" className="">GALLERY</Heading>
                </div>
                <Heading level="h2" className="pb-4">
                    More Fun In Our CoffeShop
                </Heading>
                <Text className="text-[20px]">Lorem ipsum dolor sit amet consectetur. Pellentesque netus lobortis imperdiet et non ac.</Text>
            </div>
            <div className="w-3/5 h-[408px]">
                <Image src="/images/gallery/gallery5.png" alt="Gallery Image 2" className="w-full h-full"/>
            </div>
        </div>
    );
};

export default GalleryRow1;
