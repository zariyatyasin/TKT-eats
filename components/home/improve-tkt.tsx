"use client";

import { useEffect, useRef, useState } from "react";
import { Utensils, Users, Book, Star, CookingPot, Soup } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

const CountUp = ({ end, duration = 1 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({
        transition: { duration },
      });

      let start = 0;
      const increment = end / (duration * 60); // assuming 60 frames per second
      const animate = () => {
        start += increment;
        if (start < end) {
          setCount(Math.round(start));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      animate();
    }
  }, [controls, end, inView, duration]);

  useEffect(() => {
    if (!inView) {
      setCount(0);
    }
  }, [inView]);

  return <motion.div ref={ref}>{count}</motion.div>;
};

function StatCard({
  icon: Icon,
  end,
  label,
}: {
  icon: any;
  end: number;
  label: string;
}) {
  return (
    <motion.div
      className="flex flex-col items-center p-6 transition-all duration-300 hover:shadow-lg rounded-lg"
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="w-10 h-10 text-[#9DCA30] mb-4" />
      <div className="flex items-baseline text-5xl font-bold mb-2 text-gray-800">
        <CountUp end={end} />
        {/* <span className="text-3xl">+</span> */}
      </div>
      <div className="text-sm text-gray-500 uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}

export default function ImproveTkt() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="py-16 px-4 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Culinary Excellence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StatCard icon={Users} end={86} label="Guests Served" />
          <StatCard icon={Utensils} end={246} label="Dishes Served" />

          <StatCard icon={Soup} end={734} label="UNIQUE MENU ITEMS " />
        </div>
      </div>
    </motion.section>
  );
}
