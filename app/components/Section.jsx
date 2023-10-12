'use client'
import { useRef } from 'react';

export default function Section({ data }) {
  const { number, heading, bgColor, textColor } = data;

  const sectionRef = useRef(null);
  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex justify-center items-center ${bgColor}`}
    >
      <p className={`text-9xl font-extrabold ${textColor}`}>
        #{number}
      </p>
      <h2 className={`text-7xl font-bold text-black`}>{heading}</h2>
    </section>
  );
}
