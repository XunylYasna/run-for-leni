import React from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title="Run for Leni" />
      <BannerRowBottom title={"About"} className="about" />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled, className }) => (
  <motion.span
    className="row-title"
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, index) => (
      <motion.span
        className="row-letter"
        variants={disabled ? null : letterAni}
        key={index}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row-top"}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0,
        }}
        className="row-col"
      >
        <h1 className="row-title">{title}</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.3,
        }}
        className="row-col"
      >
        <p className="row-message">
          Buong buo ang loob ko ngayon – kailangan nating palayain ang sarili
          mula sa kasalukuyang sitwasyon. Lalaban ako. Lalaban tayo. Inihahain
          ko ang aking sarili bilang kandidato sa pagkapangulo sa halalan ng
          2022
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.6,
        }}
        className="button-container"
      >
        <button>Donate</button>
        <button>Register</button>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title, className }) => {
  return (
    <div className={"banner-row center"}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1.4 }}
        className="scroll"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} className={className} />
    </div>
  );
};

export default Banner;
