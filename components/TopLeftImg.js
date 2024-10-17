import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 w-[141px] mix-blend-color-dodge z-10 xl:w-[300px]">
      <Image src="/top-left-img.png" width={400} height={400} alt="" />
    </div>
  );
};

export default TopLeftImg;
