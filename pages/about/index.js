// icons
import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CustomCountUp from "../../components/CustomCountUp";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        className="hidden xl:flex absolute bottom-0 -left-[224px] h-[420px]"
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col h-[380px]">
          <motion.h2
            className="h2"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent design.
          </motion.h2>
          <motion.p
            className="text-[12px] xl:text-[15px] xl:leading-[1.4] max-w-[400px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            10 years ago, I began freelancing as a developer. Since then, I've
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-x-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-4">
              <CustomCountUp end={10}>Years of experience</CustomCountUp>
              <CustomCountUp end={250}>Satisfied Clients</CustomCountUp>
              <CustomCountUp end={650}>Finished Project</CustomCountUp>
              <CustomCountUp end={6}>Winning Awwards</CustomCountUp>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[380px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, i) => (
              <div
                key={i}
                className={`${
                  i === index &&
                  "text-accent after:w-[100%] after:!bg-accent after:transition-all after:duration-300 "
                } mb-2 cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-3 after:left-0`}
                onClick={() => setIndex(i)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div
            className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 
          items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row
              max-w-max gap-x-2 items-center text-white/60
              "
              >
                <div className="font-light mb-2 md:mb-0 text-[12px] md:text-[14.1px]">
                  {item.title}
                </div>
                <div className="hidden md:flex text-[12px] md:text-[14.1px]">
                  -
                </div>
                <div className="text-[12px] md:text-[14.1px]">{item.stage}</div>
                <div className="flex gap-x-4 ">
                  {item.icons?.map((icon, i) => (
                    <div key={i} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
