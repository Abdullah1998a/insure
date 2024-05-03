import { motion } from "framer-motion";

const slideDownVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
const slideUpVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
export default function Feature({ feature }) {
  const {
    id,
    img: { src, alt },
    title,
    body,
  } = feature;
  return (
    <motion.div
      variants={id % 2 === 0 ? slideDownVariants : slideUpVariants}
      className="grid gap-5 text-center md:text-left"
    >
      <img src={src} alt={alt} className="mx-auto md:mx-0" />
      <h3 className="text-2xl text-[hsl(256,26%,20%)] font-dm_serif">
        {title}
      </h3>
      <p className="text-neutral-600">{body}</p>
    </motion.div>
  );
}
