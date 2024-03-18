import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {getAuth,signOut} from 'firebase/auth';
const menubarVariant = {
  initial: {
    opacity: 0,
    x: 900,
  },
  finale: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2 },
  },
  exit: {
    opacity: 0,
    x: 900,
  },
};
const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.2, // Adjust the stagger duration as needed
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.2 },
  },
};

const listItemVariants = {
  visible: { opacity: 1, y: 0, transition: {} },
  hidden: { opacity: 0, y: 20 },
  exit: { opacity: 0 },
};
const items = [
  ["HOME", "/home"],
  ["ABOUT", "/about"],
  ["BROWSE", "browse"],
  ["ARTIST", "/artist"],
];
const Menubar = ({ active }) => {
  console.log(active);
  const user = useSelector((store) => store.user);
  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            className="w-3/4 h-screen right-0 bg-black bg-opacity-80 absolute"
            variants={menubarVariant}
            initial="initial"
            animate="finale"
            exit="exit"
          >
            <div className="text-center mt-20">
              <h1 className="text-white  font-semibold relative ">
                {user?.displayName || "SIGN IN"}
              </h1>
            </div>
            <motion.ul
              className="text-center mt-8 space-y-5"
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {items.map(([item, link], index) => (
                <motion.li
                  key={index}
                  className="text-white"
                  variants={listItemVariants}
                >
                  <Link to={link}>{item}</Link>
                </motion.li>
              ))}
              {true && (
                <motion.li
                  variants={listItemVariants}
                  className="text-red mt-[58]"
                  onClick={() => {
                    signOut(auth)
                      .then(() => {
                        // Sign-out successful.
                      })
                      .catch((error) => {
                        // An error happened.
                      });
                  }}
                >
                  SIGN OUT
                </motion.li>
              )}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menubar;
