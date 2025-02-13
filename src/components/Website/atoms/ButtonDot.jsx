const ButtonDot = ({ isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-2 h-2 lg:w-4 lg:h-4 rounded-full cursor-pointer ${
                isActive ? "bg-tertiary" : "bg-gray-400"
            }`}
        >
        </button>
    );
};

export default ButtonDot;
