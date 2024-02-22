import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollToTop from "../scroll-utils/ScrollToTop";

function ButtonBlack({ to, children }) {
  return (
    <Link to={to}>
      <motion.button
        whileTap={{ scale: 0.9 }}
        duration={{ duration: 0.3 }}
        onClick={ScrollToTop}
        className="bg-pureBlack outline outline-1 hover:outline-none hover:bg-pureWhite hover:text-pureBlack uppercase text-subtitle text-pureWhite px-[30px] py-[15px] transition-colors duration-300"
      >
        {children}
      </motion.button>
    </Link>
  );
}

export default ButtonBlack;
