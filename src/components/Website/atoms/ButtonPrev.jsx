import Image from "./Image";

const ButtonPrev = ({ onClick, className="" }) => {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer z-10 ${className }`}
        >
            <Image src="/images/icons/prev-img.svg" alt="prev" className="w-8 opacity-80"/>
        </button>
    );
};

export default ButtonPrev;
