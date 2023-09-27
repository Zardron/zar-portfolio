// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="absolute bottom-0 right-[5%] hidden xl:flex xl:max-w-none">
      <Image
        src={"/avat.png"}
        width={700}
        height={678}
        alt="avatar"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
