import bgPatternIntroRightDesktop from "../../assets/images/bg-pattern-intro-right-desktop.svg";
import bgPatternIntroLeftDesktop from "../../assets/images/bg-pattern-intro-left-desktop.svg";
import bgPatternIntroRightMobile from "../../assets/images/bg-pattern-intro-right-mobile.svg";
import bgPatternIntroLeftMobile from "../../assets/images/bg-pattern-intro-left-mobile.svg";
import imageIntroDesktop from "../../assets/images/image-intro-desktop.jpg";
import imageIntroMobile from "../../assets/images/image-intro-desktop.jpg";
import { motion } from "framer-motion";

const scaleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};
const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
export default function Header() {
  return (
    <header className="bg-[hsl(256,26%,20%)] relative">
      <div
        className="absolute bottom-[40%] min-[360px]:bottom-1/3 min-[450px]:bottom-[25.5%] sm:bottom-[27%] md:-bottom-[25%] lg:-bottom-[40%] left-0 pointer-events-none
          "
      >
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={bgPatternIntroLeftMobile}
          />
          <img
            className="w-full"
            src={bgPatternIntroLeftDesktop}
            alt="bg pattern intro left"
          />
        </picture>
      </div>
      <div className="lg:h-[calc(100vh-72px)] container mx-auto pb-20 lg:py-0 md:px-12 flex flex-col-reverse lg:flex-row gap-y-20 lg:gap-y-0 items-center relative">
        <motion.div
          variants={slideRightVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-3/5 xl:w-1/2 text-center lg:text-left px-8 md:px-0"
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl text-balance font-dm_serif lg:relative lg:before:absolute lg:before:-top-1/4 lg:before:w-1/4 lg:before:h-0.5 lg:before:bg-[hsl(216,30%,68%)]">
            Humanizing your insurance.
          </h1>
          <p className="text-neutral-300 my-7">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <motion.button
            variants={scaleVariants}
            whileHover={{ backgroundColor: "white", color: "hsl(256,26%,20%)" }}
            className="btn"
          >
            View plans
          </motion.button>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          initial="hidden"
          animate="visible"
          className="lg:absolute lg:top-1/4 right-0 xl:right-[10%]"
        >
          <picture>
            <source media="(max-width: 768px)" srcSet={imageIntroMobile} />
            <img
              src={imageIntroDesktop}
              alt="intro image"
              className="w-full lg:max-w-sm xl:max-w-md"
            />
          </picture>
        </motion.div>
      </div>
      <picture>
        <source media="(max-width: 768px)" srcSet={bgPatternIntroRightMobile} />
        <img
          className="absolute top-[85%] sm:top-[88%] md:top-0 right-0 pointer-events-none"
          src={bgPatternIntroRightDesktop}
          alt="bg pattern intro right"
        />
      </picture>
    </header>
  );
}
