import { motion } from "framer-motion";

const scaleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};
export default function Attribution({ personal }) {
  const { name, website } = personal;
  return (
    <motion.div
      variants={scaleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="col-span-4 text-center text-neutral-800 text-sm"
    >
      Challenge by{" "}
      <motion.a
        initial={{ color: "hsl(228,52%,42%)" }}
        whileHover={{ color: "hsl(228,62%,39%)", textDecoration: "underline" }}
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </motion.a>
      . Coded by{" "}
      <motion.a
        initial={{ color: "hsl(228,52%,42%)" }}
        whileHover={{ color: "hsl(228,62%,39%)", textDecoration: "underline" }}
        href={website}
        target="_blank"
      >
        {name}
      </motion.a>
      .
    </motion.div>
  );
}
