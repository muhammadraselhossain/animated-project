import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const Projects = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8">
        <h1 className="text-yellow-500 flex justify-center items-center text-5xl font-bold mb-28 mt-10">PROJECTS</h1>
      <div className="mx-auto max-w-5xl">
        <Project
          heading="Project Alpha"
          subheading="An innovative solution"
          imgSrc="https://cdn.dribbble.com/userupload/13549570/file/original-60f1f4f3feee0420dafc7059800de697.png?resize=1504x1128"
          href="#"
        />
        <Project
          heading="Project Beta"
          subheading="Making lives better"
          imgSrc="https://cdn.dribbble.com/userupload/5358463/file/original-6ab9ea21a1312d874684e207dc909a2e.jpg?resize=1504x1128"
          href="#"
        />
        <Project
          heading="Project Gamma"
          subheading="Leading the change"
          imgSrc="https://cdn.dribbble.com/userupload/13144423/file/original-f91dbfbb9cbef35a94c698309c098364.png?resize=1504x1128"
          href="#"
        />
        <Project
          heading="Project Delta"
          subheading="Revolutionizing industries"
          imgSrc="https://cdn.dribbble.com/userupload/14560123/file/original-423708df9a4a8f0de35ec9b4e007db7c.jpg?resize=1504x1128"
          href="#"
        />
        <Project
          heading="Project Omega"
          subheading="Next-gen innovation"
          imgSrc="https://cdn.dribbble.com/userupload/12611313/file/original-690cd40a7e0c848245918a408b6aa909.png?resize=1504x1128"
          href="#"
        />
      </div>
    </section>
  );
};

const Project = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
