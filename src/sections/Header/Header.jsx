import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  return (
    <section className="max-w-full px-56 border px-8 bg-secondary-200 py-56 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-secondary-100 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl text-primary-100 md:text-6xl font-bold">
          Partner with us and featured
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className="bg-secondary-100 text-secondary-200 font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  { id: 1, src: "https://cdn.dribbble.com/userupload/13606668/file/original-828e65a135620231018173b2b69c38ae.png?resize=1600x1200" },
  { id: 2, src: "https://cdn.dribbble.com/userupload/9643919/file/original-964e7c7ed9c77cfa90cf565645804613.png?resize=1024x768" },
  { id: 3, src: "https://cdn.dribbble.com/userupload/15480955/file/original-e3028cd6a9e047f382c1b8c14cff4a20.png?resize=1504x1128" },
  { id: 4, src: "https://cdn.dribbble.com/userupload/14560123/file/original-423708df9a4a8f0de35ec9b4e007db7c.jpg?resize=1504x1128" },
  { id: 5, src: "https://cdn.dribbble.com/userupload/13144423/file/original-f91dbfbb9cbef35a94c698309c098364.png?resize=1504x1128" },
  { id: 6, src: "https://cdn.dribbble.com/userupload/7699263/file/original-8fd4b184d61305a70aa25b897ec5befd.jpg?resize=1504x1128" },
  { id: 7, src: "https://cdn.dribbble.com/userupload/5358463/file/original-6ab9ea21a1312d874684e207dc909a2e.jpg?resize=1504x1128" },
  { id: 8, src: "https://cdn.dribbble.com/userupload/12611313/file/original-690cd40a7e0c848245918a408b6aa909.png?resize=1504x1128" },
  { id: 9, src: "https://cdn.dribbble.com/userupload/14544111/file/original-66321caa10ffc723c808a91732480e9c.png?resize=1504x1128" },
  { id: 10, src: "https://cdn.dribbble.com/userupload/7760001/file/original-ce3427f3641aaef12eba82f910ca0bf7.png?resize=1504x1128" },
  { id: 11, src: "https://cdn.dribbble.com/userupload/7760001/file/original-ce3427f3641aaef12eba82f910ca0bf7.png?resize=1504x1128" },
  { id: 12, src: "https://cdn.dribbble.com/userupload/10199873/file/original-afb4dfc2e4abba320d469b9fe11627bd.png?resize=1504x1128" },
  { id: 13, src: "https://cdn.dribbble.com/userupload/10143639/file/original-445876a157e403778029d4142c5ac91c.png?resize=1504x1128" },
  { id: 14, src: "https://cdn.dribbble.com/userupload/9679693/file/original-107b4b16dd7b207f9cce009917d3530b.png?resize=1504x1128" },
  { id: 15, src: "https://cdn.dribbble.com/userupload/9270284/file/original-49bfb5ada3501f2197a7d77960f0977d.png?resize=1504x1128" },
  { id: 16, src: "https://cdn.dribbble.com/userupload/13549570/file/original-60f1f4f3feee0420dafc7059800de697.png?resize=1504x1128" },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Header;
