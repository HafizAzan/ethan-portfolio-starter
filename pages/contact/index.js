import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container flex items-center justify-center py-32 mx-auto text-center xl:text-left">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            className="mb-12 text-center h2"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col flex-1 w-full gap-6 mx-auto"
          >
            <div className="flex w-full gap-x-6">
              <input type="text" placeholder="Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Subject" className="input" />
            <textarea placeholder="message" className="textarea"></textarea>
            <button className="border border-white/50 max-w-[170px] px-0 rounded-full btn transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s Talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:-translate-y-[0] group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
