import { useRef } from 'react';

export default function Section({
  bgColor,
  textColor,
  numberText,
  headingText,
}) {
  const sectionRef = useRef(null);
  return (
    <section
      ref={sectionRef}
      className={`min-h-screen relative flex justify-center items center bg-${bgColor}`}
    >
      <p className={`text-9xl font-extrabold text-${textColor}`}>
        {numberText}
      </p>
      <h2 className={`text-7xl font-bold text-${textColor}`}>{headingText}</h2>
    </section>
  );
}
