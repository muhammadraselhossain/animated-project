import { motion } from "framer-motion";
import React from "react";

export const SocialProfiles = () => {
  return (
    <section className="grid place-content-center gap-2 bg-secondary-200 px-8 py-24 text-black">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">LinkedIn</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 1,
      }}
    >
      <div className="relative overflow-hidden">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: 0,
                opacity: 1,
              },
              hovered: {
                y: "-100%",
                opacity: 0,
              },
              exit: {
                y: "100%",
                opacity: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
