import ProjectsBtn from "./../components/ProjectsBtn";
import { motion } from "framer-motion";
import { fadeIn } from "./../variants";
import Image from "next/image";
import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";

const Home = () => {
  return (
    <section className="h-full bg-primary/60">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container flex flex-col justify-center h-full pt-20 mx-auto text-center xl-pt-40 xl:text-left">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-14 text-[14px]"
          >
            As a developer, I turn ideas into digital experiences, building
            <br /> apps & Website that merge creativity and technology
          </motion.p>
          <div className="relative flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[800px] h-full absolute bottom-0 right-0">
        <div className="absolute w-full h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat xl:mix-blend-color-dodge translate-z-6 "></div>

        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[600px] max-h-[530px] absolute lg:right-[5%] lg:bottom-0"
        >
          <Avatar />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
