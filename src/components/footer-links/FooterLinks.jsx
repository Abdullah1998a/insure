import { footerLinks } from "../../data/links";
import { motion } from "framer-motion";

const faddingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};
const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function FooterLinks() {
  return (
    <motion.div
      variants={faddingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap gap-y-4 gap-x-44 flex-col md:flex-row mt-8 mb-4 text-center md:text-left"
    >
      <ul className="space-y-4 mb-8 md:my-0">
        {footerLinks.our_company.map(({ id, name, link }) => (
          <motion.li
            variants={slideRightVariants}
            key={id}
            className={`${
              id === 1
                ? "text-[hsl(216,30%,68%)]"
                : "text-[hsl(256,26%,20%)] hover:underline"
            } uppercase text-[0.9rem] font-bold`}
          >
            <a href={link}>{name}</a>
          </motion.li>
        ))}
      </ul>
      <ul className="space-y-4 mb-8 md:my-0">
        {footerLinks.help_me.map(({ id, name, link }) => (
          <motion.li
            variants={slideRightVariants}
            key={id}
            className={`${
              id === 1
                ? "text-[hsl(216,30%,68%)] text-base"
                : "text-[hsl(256,26%,20%)] hover:underline"
            } uppercase text-[0.9rem] font-bold`}
          >
            <a href={link}>{name}</a>
          </motion.li>
        ))}
      </ul>
      <ul className="space-y-4 mb-8 md:my-0">
        {footerLinks.contact.map(({ id, name, link }) => (
          <motion.li
            variants={slideRightVariants}
            key={id}
            className={`${
              id === 1
                ? "text-[hsl(216,30%,68%)] text-base"
                : "text-[hsl(256,26%,20%)] hover:underline"
            } uppercase text-[0.9rem] font-bold`}
          >
            <a href={link}>{name}</a>
          </motion.li>
        ))}
      </ul>
      <ul className="space-y-4 mb-6 md:my-0">
        {footerLinks.others.map(({ id, name, link }) => (
          <motion.li
            variants={slideRightVariants}
            key={id}
            className={`${
              id === 1
                ? "text-[hsl(216,30%,68%)] text-base"
                : "text-[hsl(256,26%,20%)] hover:underline"
            } uppercase text-[0.9rem] font-bold`}
          >
            <a href={link}>{name}</a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
