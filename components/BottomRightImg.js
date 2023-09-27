import Image from "next/image";

const BottomRightImg = () => {
  return (
    <div className="absolute right-0 bottom-0 mix-blend-color-dodge z-50 w-[200px] xl:w-[400px] opacity-50 rotate-180">
      <Image src="/top-left-img.png" width={400} height={400} alt="top-img" />
    </div>
  );
};

export default BottomRightImg;
