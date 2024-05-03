import bgPatternHowWeWorkDesktop from "../../assets/images/bg-pattern-how-we-work-desktop.svg";
import bgPatternHowWeWorkMobile from "../../assets/images/bg-pattern-how-we-work-mobile.svg";
import { motion } from "framer-motion";

const scaleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};
const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function HowWeWork() {
  return (
    <section className="container mx-auto px-4 md:px-12 mb-24 relative">
      <div className="h-full absolute top-0 right-4 md:right-12 pointer-events-none overflow-clip">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={bgPatternHowWeWorkMobile}
          />
          <img
            className="w-full"
            src={bgPatternHowWeWorkDesktop}
            alt="bg pattern how we work"
          />
        </picture>
      </div>
      <div className="px-8 md:px-12 py-16 bg-[hsl(256,26%,20%)] flex flex-col gap-y-8 md:flex-row justify-between items-center text-center md:text-left">
        <motion.h2
          variants={slideRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-1/2 text-white text-4xl sm:text-4xl lg:text-5xl md:text-balance font-dm_serif"
        >
          Find out more about how we work
        </motion.h2>
        <motion.button
          variants={scaleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ backgroundColor: "white", color: "hsl(256,26%,20%)" }}
          className="btn relative z-10"
        >
          How we work
        </motion.button>
      </div>
    </section>
  );
}
