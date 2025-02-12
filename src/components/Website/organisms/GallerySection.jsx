import GalleryHeader from "../molecules/GalleryHeader";
import GalleryRow1 from "../molecules/GalleryRow1";
import GalleryRow2 from "../molecules/GalleryRow2";
import GalleryRow3 from "../molecules/GalleryRow3";

const GallerySection = () => {
    return (
        <div className="flex flex-col px-9 pb-8 lg:px-30 lg:py-20 bg-primary">
            <div className="flex flex-col">
                <GalleryHeader />
                <GalleryRow1 />
                <GalleryRow2 />
                <GalleryRow3 />
            </div>
        </div>
    );
};

export default GallerySection;
