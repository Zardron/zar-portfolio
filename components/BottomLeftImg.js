import Image from "next/image";

const BottomLeftImg = () => {
  return (
    <div className="absolute left-0 bottom-0 mix-blend-color-dodge z-30 w-[200px] xl:w-[400px] opacity-50 rotate-[270deg]">
      <Image src="/top-left-img.png" width={400} height={400} alt="top-img" />
    </div>
  );
};

export default BottomLeftImg;
