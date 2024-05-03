import menu from "../../assets/images/icon-hamburger.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";
import close from "../../assets/images/icon-close.svg";
import logo from "../../assets/images/logo.svg";
import { useEffect, useState } from "react";
import { links } from "../../data/links";
import { Links } from "../links";

const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const slideLeftVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function Navbar() {
  const [show, setShow] = useState(false);
  let isMedium = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (show) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  }, [show]);
  return (
    <nav className="container mx-auto px-4 md:px-12 py-6 flex justify-between items-center relative z-10">
      <motion.a
        variants={slideRightVariants}
        initial="hidden"
        animate="visible"
        href="#"
      >
        <img src={logo} alt="logo" />
      </motion.a>
      <motion.button
        variants={slideLeftVariants}
        initial="hidden"
        animate="visible"
        className="w-8 h-6 flex justify-center items-center md:hidden"
        onClick={() => setShow(!show)}
      >
        <motion.img
          key={show}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={show ? close : menu}
          alt="toggle icon"
        />
      </motion.button>
      <AnimatePresence>
        {(show || isMedium) && <Links links={links} isMedium={isMedium} />}
      </AnimatePresence>
    </nav>
  );
}
