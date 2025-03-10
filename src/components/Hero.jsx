import profilePic from "../assets/divyaprofilepic.jpeg";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-10 lg:text-8xl"
            >
              Divya Kampalli
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-3xl mt-10">
            <motion.a
              variants={container(1)}
              initial="hidden"
              animate="visible"
              href="https://www.linkedin.com/in/divya-kampalli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              variants={container(1)}
              initial="hidden"
              animate="visible"
              href="https://github.com/DivyaKampalli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              variants={container(1)}
              initial="hidden"
              animate="visible"
              href="https://www.instagram.com/_divya_chowdary_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              variants={container(1)}
              initial="hidden"
              animate="visible"
              href="https://x.com/divya_chowdary_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </motion.a>
          </div>

          <div className="mt-12">
            <motion.a
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              href="https://drive.google.com/file/d/1pC6ME5Ja7skJr1IK2km2M2Xpr1WA6qYN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                View Resume
              </span>
            </motion.a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="profilePic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
