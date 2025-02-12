import Heading from "../atoms/Heading";
import LinkItem from "../atoms/LinkItem";
import LineStroke from "../atoms/LineStroke";

const FooterSection = ({ title, links, className="" }) => {
    return (
        <div className={`flex items-start space-x-4 pb-4 ${className}`}>
            <LineStroke width="w-10" className="hidden lg:block mt-5"/>
            <div className="w-full">
                <Heading level="h3" className="text-[32px] pb-1 lg:pb-4">{title}</Heading>
                <ul className="space-y-1 lg:space-y-4 font-poppins text-[18px]">
                    {links.map((link) => (
                        <li>
                            <LinkItem key={link.label} href={link.href}>{link.label}</LinkItem>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FooterSection;
