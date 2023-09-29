import Image from "next/image";

const BottomLeftImg = () => {
  return (
    <div className="absolute -left-5 bottom-0 w-[200px] xl:w-[400px] ">
      <Image src="/half-avat.png" width={400} height={400} alt="top-img" />
    </div>
  );
};

export default BottomLeftImg;
