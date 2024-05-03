import iconAffordablePrices from "../assets/images/icon-affordable-prices.svg";
import iconSnappyProcess from "../assets/images/icon-snappy-process.svg";
import iconPeopleFirst from "../assets/images/icon-people-first.svg";

export const features = [
  {
    id: 1,
    img: {
      src: iconSnappyProcess,
      alt: "icon snappy process",
    },
    title: "Snappy Process",
    body: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
  },
  {
    id: 2,
    img: {
      src: iconAffordablePrices,
      alt: "icon affordable prices",
    },
    title: "Affordable Prices",
    body: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
  },
  {
    id: 3,
    img: {
      src: iconPeopleFirst,
      alt: "icon people first",
    },
    title: "People First",
    body: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
  },
];
