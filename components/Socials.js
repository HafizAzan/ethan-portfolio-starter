import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiPinterestLine,
  RiWhatsappLine,
} from "react-icons/ri";
import SocialIcon from "./SocialIcon";

const Socials = () => {
  const icons = [
    { icon: <RiYoutubeLine />, href: "/" },
    { icon: <RiInstagramLine />, href: "/" },
    { icon: <RiFacebookLine />, href: "/" },
    { icon: <RiWhatsappLine />, href: "/" },
    { icon: <RiLinkedinLine />, href: "/" },
    { icon: <RiPinterestLine />, href: "/" },
  ];
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {icons.map((item) => (
        <SocialIcon
          href={item.href}
          className="hover:text-accent transition-all duration-300"
        >
          {item.icon}
        </SocialIcon>
      ))}
    </div>
  );
};

export default Socials;
