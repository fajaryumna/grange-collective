import Image from "../atoms/Image";

const GalleryRow2 = () => {
    return (
        <div className="flex flex-row items-center justify-center h-[40vw] lg:h-[498px] bg-secondary">
            <div className="w-1/3 h-full">
                <Image src="/images/gallery/gallery4.png" alt="Gallery Image 3"className="w-full h-full" />
            </div>
            <div className="flex flex-col w-1/3 h-full">
                <div className="h-1/2">
                    <Image src="/images/gallery/gallery1.png" alt="Gallery Image 4" className="w-full h-full" />
                </div>
                <div className="h-1/2">
                    <Image src="/images/gallery/gallery2.png" alt="Gallery Image 5" className="w-full h-full" />
                </div>
            </div>
            <div className="w-1/3 h-full">
                <div className="h-1/2">
                    <Image src="/images/gallery/gallery3.png" alt="Gallery Image 6" className="w-full h-full" />
                </div>
                <div className="h-1/2">
                    <Image src="/images/gallery/gallery1.png" alt="Gallery Image 7" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default GalleryRow2;
