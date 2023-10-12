'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Section({ data }) {
  const { number, heading, bgColor, textColor } = data;

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const y = useTransform(scrollYProgress, [0, 1], ['-300%', '100%']);

  console.log(y);

  return (
    <section
      className={`relative min-h-screen flex justify-center items-center ${bgColor}`}
    >
      <div ref={sectionRef}>
        <motion.p
          style={{ y: y }}
          className={`absolute left-[50px] text-9xl font-extrabold ${textColor}`}
        >
          #{number}
        </motion.p>
        <h2 className={`text-7xl font-bold text-black`}>{heading}</h2>
      </div>
    </section>
  );
}
