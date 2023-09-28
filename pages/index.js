// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer moition
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";
import Circles from "@/components/Circles";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center pt-20 xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mb-4 lg:mb-4"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-6 text-justify text-sm lg:text-[18px]"
          >
            I'm a Bachelor of Science in Information Technology Graduate at
            University of Cebu Lapu-Lapu and Manduae (UCLM) - Philippines.
            <br /> <br />A very ambitious developer. I love to code because if I
            can think it, I can make it a reality. Also a competitive coder with
            an amazing ability to develop websites that are both functional and
            aesthetically pleasing.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center relative xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge opacity-70"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar image */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[500px] max-h-[478px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
      <Circles />
    </div>
  );
};

export default Home;
