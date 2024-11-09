import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            title="ReactJS"
            className="flex justify-center items-center"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            title="JavaScript"
            className="flex justify-center items-center"
          >
            <SiJavascript className="text-7xl text-yellow-500" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
            target="_blank"
            rel="noopener noreferrer"
            title="HTML5"
            className="flex justify-center items-center"
          >
            <FaHtml5 className="text-7xl text-orange-500" />
          </a>
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            title="CSS3"
            className="flex justify-center items-center"
          >
            <FaCss3 className="text-7xl text-blue-600" />
          </a>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Tailwind CSS"
            className="flex justify-center items-center"
          >
            <SiTailwindcss className="text-7xl text-blue-400" />
          </a>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="relative group rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a
            href="https://www.mysql.com"
            target="_blank"
            rel="noopener noreferrer"
            title="MySQL"
            className="flex justify-center items-center"
          >
            <SiMysql className="text-7xl text-blue-600" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
