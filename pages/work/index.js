import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center justify-center">
      <Circles />
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row gap-x-6">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              className="h2"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              className="mb-4 max-x-[300px] mx-auto lg:mx-0 text-[14px]"
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              reprehenderit in voluptates quia deleniti vero fphs.
            </motion.p>
          </div>
          <motion.div
            className="w-full xl:max-w-[65%]"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
