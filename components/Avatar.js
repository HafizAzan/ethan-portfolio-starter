import Image from "next/image";
import { UtilImages } from "../utills";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={UtilImages.avatar}
        alt="avatar"
        width={600}
        height={500}
        className="w-full h-full translate-z-0"
      />
    </div>
  );
};

export default Avatar;
