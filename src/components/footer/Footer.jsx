import bgPatternFooterDesktop from "../../assets/images/bg-pattern-footer-desktop.svg";
import bgPatternFooterMobile from "../../assets/images/bg-pattern-footer-mobile.svg";
import logo from "../../assets/images/logo.svg";
import { FooterLinks } from "../footer-links";
import { Attribution } from "../attribution";
import { motion } from "framer-motion";
import { Social } from "../social";

const faddingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
    },
  },
};
const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const personalData = {
  name: "Abdullah Alnoime",
  website: "https://abdullah-alnoime.netlify.app",
};
export default function Footer() {
  return (
    <footer className="relative py-8">
      <picture>
        <source media="(max-width: 768px)" srcSet={bgPatternFooterMobile} />
        <img
          className="w-full md:w-auto absolute top-0 left-0 pointer-events-none"
          src={bgPatternFooterDesktop}
          alt="bg pattern footer mobile"
        />
      </picture>
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <motion.div
          variants={faddingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-y-8 justify-between items-center border-b-2 pb-6"
        >
          <motion.a variants={slideRightVariants} href="#">
            <img className="" src={logo} alt="logo" />
          </motion.a>
          <Social />
        </motion.div>
        <FooterLinks />
        <Attribution personal={personalData} />
      </div>
    </footer>
  );
}
