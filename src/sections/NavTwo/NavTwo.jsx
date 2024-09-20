import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

export const NavTwoExample = () => {
  return (
    <div className="bg-neutral-100 py-20">
      <NavTwo />
    </div>
  );
};

const NavTwo = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width: width,
          opacity: 1,
        });
      }}
      className="relative cursor-pointer px-4 py-2"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 h-1 bg-black rounded-full"
      style={{
        width: position.width,
        left: position.left,
        opacity: position.opacity,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: position.opacity }}
      transition={{ duration: 0.3 }}
    />
  );
};


export default NavTwo