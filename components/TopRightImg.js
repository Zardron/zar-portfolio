import Image from "next/image";

const TopRightImg = () => {
  return (
    <div className="absolute right-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50 rotate-90">
      <Image src="/top-left-img.png" width={400} height={400} alt="top-img" />
    </div>
  );
};

export default TopRightImg;
