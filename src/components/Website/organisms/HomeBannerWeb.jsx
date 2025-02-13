import Image from "../atoms/Image";
import InfoBox from "../molecules/InfoBox";
import RotatedLogo from "../molecules/RotatedLogo";
import Text from "../atoms/Text";

const HomeBannerWeb = ({ imageSrc, altText, infoText, logoSrc, isTopBanner, zIndex, index }) => {
    return (
        <div 
            className={`relative flex flex-row justify-center w-full lg:flex" ${index !== 0 ? "-ml-[39vw]" : "-mr-[0vw]"}`}
            style={{
                zIndex: zIndex,            
            }}
            >

            <div className="img-banner relative min-w-full lg:w-[50vw]">
                <Image src={imageSrc} alt={altText} className="w-full h-[45vw] lg:h-[38vw] object-cover"/>
                <div 
                    className="absolute inset-0 bg-white transition-opacity duration-700 banner-overlay"
                    style={{ opacity: isTopBanner ? "0" : "0.4" }}
                ></div>
            </div>

            {/* Info Box  */}
            {isTopBanner && (
                <InfoBox
                    iconSrc={logoSrc}
                    iconAlt={altText}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[75%] info-box transition-opacity duration-700"
                >
                    <Text className="text-[14px]">
                        {infoText}
                    </Text>
                </InfoBox>
            )}

            {/* Restaurant Logo */}
            {!isTopBanner && (
                <div className="logo-banner">
                    <RotatedLogo src={logoSrc} alt={altText} position="left" />
                    <RotatedLogo src={logoSrc} alt={altText} position="right" />
                </div>
            )}
        </div>
    );
};

export default HomeBannerWeb;
