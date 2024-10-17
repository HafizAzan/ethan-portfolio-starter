import Image from "next/image";
import { UtilImages } from "../utills";

const Bulb = () => {
  return (
    <div
      className="absolute -left-32 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10
    w-[160px] xl:w-[200px] 
    "
    >
      <Image
        src={UtilImages.bulb}
        width={220}
        height={160}
        className="w-full h-full"
        alt="bulb"
      />
    </div>
  );
};

export default Bulb;
