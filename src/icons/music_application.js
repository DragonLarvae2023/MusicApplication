import { motion } from "framer-motion";

const pathVariant = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: { opacity: 1, pathLength: 1 }, // Set pathLength to 1 for the full length of the path
};

const MusicApplication = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="100%"
      height="100%"
    >
      <motion.path
        d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"
        variants={pathVariant}
        animate="visible"
        initial="hidden"
        transition={{
          duration:2
        }}
        fill="none" // No fill
        stroke="white" // Border color
        strokeWidth="32" // Border width
      />
    </svg>
  );
};

export default MusicApplication;
