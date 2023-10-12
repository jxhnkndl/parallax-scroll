import Image from 'next/image';
import Section from './components/Section';

const data = [
  { number: '001', heading: 'TOUR', bgColor: 'bg-violet-800', textColor: 'text-white' },
  { number: '002', heading: 'MUSIC', bgColor: 'bg-sky-500', textColor: 'text-white' },
  { number: '003', heading: 'VIDEO', bgColor: 'bg-green-400', textColor: 'text-white' },
  { number: '004', heading: 'MERCH', bgColor: 'bg-yellow-400', textColor: 'text-white' },
];

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex justify-center items-center bg-pink-700">
        <h1 className="text-9xl font-extrabold text-white">
          PARALLAX
          <span className="text-7xl font-bold text-black">SANDBOX</span>
        </h1>
      </section>

      {data.map((section) => (
        <Section key={section.number} data={section} />
      ))}
    </main>
  );
}
