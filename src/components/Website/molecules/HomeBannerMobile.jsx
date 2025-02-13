import Image from "../atoms/Image";

const HomeBannerMobile = ({ imgSrc, altText}) => {
    return (
        <div className="relative flex flex-row justify-center min-w-full">
            <div className="relative min-w-full lg:w-[50vw]">
                <Image src={imgSrc} alt={altText} className="w-full h-[47vw]"/>
            </div>
        </div>
    );
};

export default HomeBannerMobile;