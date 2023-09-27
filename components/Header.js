// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto mt-6 lg:mt-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6">
          {/* logo */}
          <Link href={"/"}>
            <Image src={"/logo-full.png"} width={400} height={60} alt="logo" />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
