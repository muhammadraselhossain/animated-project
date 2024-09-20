import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";

const Menu = () => {
  const [selected, setSelected] = useState(null);

  const handleSetSelected = (val) => {
    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => setSelected(null)}
      className="relative flex justify-center items-center w-full h-24 bg-blue-900"
    >
      {TABS.map((t) => (
        <Tab
          key={t.id}
          selected={selected}
          handleSetSelected={handleSetSelected}
          tab={t.id}
        >
          {t.title}
        </Tab>
      ))}

      <AnimatePresence>
        {selected !== null && (
          <Content selected={selected} />
        )}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab ? "bg-neutral-800 text-neutral-100" : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${selected === tab ? "rotate-180" : ""}`}
      />
    </button>
  );
};

const Content = ({ selected }) => {
  const Component = TABS.find((tab) => tab.id === selected)?.Component;

  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="absolute left-0 top-full mt-2 w-96 rounded-lg border border-neutral-600 bg-neutral-900 p-4 z-10"
    >
      {Component && <Component />}
    </motion.div>
  );
};

const Products = () => (
  <div>
    <div className="flex gap-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">Startup</h3>
        <a href="#" className="mb-1 block text-sm text-neutral-400">
          Bookkeeping
        </a>
        <a href="#" className="block text-sm text-neutral-400">
          Invoicing
        </a>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Scaleup</h3>
        <a href="#" className="mb-1 block text-sm text-neutral-400">
          Live Coaching
        </a>
        <a href="#" className="mb-1 block text-sm text-neutral-400">
          Reviews
        </a>
        <a href="#" className="block text-sm text-neutral-400">
          Tax/VAT
        </a>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Enterprise</h3>
        <a href="#" className="mb-1 block text-sm text-neutral-400">
          White glove
        </a>
        <a href="#" className="mb-1 block text-sm text-neutral-400">
          SOX Compliance
        </a>
        <a href="#" className="block text-sm text-neutral-400">
          Staffing
        </a>
        <a href="#" className="block text-sm text-neutral-400">
          More
        </a>
      </div>
    </div>

    <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
      <span>View more</span>
      <FiArrowRight />
    </button>
  </div>
);

const Pricing = () => (
  <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
    <a
      href="#"
      className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
    >
      <span className="text-xs">Startup</span>
    </a>
    <a
      href="#"
      className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
    >
      <span className="text-xs">Scaleup</span>
    </a>
    <a
      href="#"
      className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
    >
      <span className="text-xs">Enterprise</span>
    </a>
  </div>
);

const Blog = () => (
  <div>
    <div className="grid grid-cols-2 gap-2">
      <a href="#">
        <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
        <p className="text-xs text-neutral-400">Lorem ipsum dolor sit amet</p>
      </a>
      <a href="#">
        <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
        <p className="text-xs text-neutral-400">Lorem ipsum dolor sit amet</p>
      </a>
    </div>
    <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
      <span>View more</span>
      <FiArrowRight />
    </button>
  </div>
);

const TABS = [
  { title: "Products", Component: Products, id: 1 },
  { title: "Pricing", Component: Pricing, id: 2 },
  { title: "Blog", Component: Blog, id: 3 },
];

export default Menu;
