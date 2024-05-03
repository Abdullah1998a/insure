import { features } from "../../data/features";
import { motion } from "framer-motion";
import { Feature } from "../feature";

const faddingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function WhyUs() {
  return (
    <section className="container mx-auto px-4 md:px-12 pt-44 pb-36">
      <motion.h2
        variants={slideRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[hsl(256,26%,20%)] text-4xl lg:text-6xl text-balance font-dm_serif relative before:absolute before:left-1/2 md:before:left-0 before:-top-1/4 before:w-1/4 before:-translate-x-1/2 md:before:-translate-x-0 md:before:w-[12%] before:h-0.5 before:bg-[hsl(216,30%,68%)] mb-12 text-center md:text-left"
      >
        We’re different
      </motion.h2>
      <motion.div
        variants={faddingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-10"
      >
        {features.map((feature) => (
          <Feature feature={feature} key={feature.id} />
        ))}
      </motion.div>
    </section>
  );
}
