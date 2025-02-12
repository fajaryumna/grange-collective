import Heading from "../atoms/Heading";
import LineStroke from "../atoms/LineStroke";

const GalleryHeader = ({ className = "" }) => {
    return (
        <div className={`lg:hidden flex justify-start items-center space-x-4 pb-2 ${className}`}>
            <LineStroke thickness="border-t-2" width="w-10" />
            <Heading level="h3">GALLERY</Heading>
        </div>
    );
};

export default GalleryHeader;
