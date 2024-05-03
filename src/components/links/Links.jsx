import { motion } from "framer-motion";
import "./links.css";

const menuVariants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    scaleX: 0,
    x: "-100vw",
  },
};
const linkVariants = {
  hidden: {
    x: -120,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};
export default function Links({ links, isMedium }) {
  return (
    <motion.ul
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`menu ${isMedium ? "open" : ""}`}
    >
      {links.map(({ id, name, link }) => (
        <motion.li variants={linkVariants} key={id}>
          <a className={`link ${id === 4 ? "btn" : ""}`} href={link}>
            {name}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
