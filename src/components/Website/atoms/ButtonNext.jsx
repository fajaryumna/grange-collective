import Image from "./Image";

const ButtonNext = ({ onClick, className="" }) => {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer z-10 ${className }`}
        >
            <Image src="/images/icons/next-img.svg" alt="next" className="w-8 opacity-80"/>
        </button>
    );
};

export default ButtonNext;
