import LongCard from './long-cards/LongCard';

export default function Articles() {
  return (
    <div className="px-4 py-2 bg-gray-100 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
      <LongCard />
      <LongCard />
    </div>
  );
}
