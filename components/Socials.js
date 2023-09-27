import Link from "next/link";

// icons

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-12 lg:gap-x-5 text-3xl z-50">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <AiOutlineFacebook />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <AiOutlineInstagram />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <AiOutlineWhatsApp />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <AiOutlineGithub />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <AiOutlineLinkedin />
      </Link>
    </div>
  );
};

export default Socials;
