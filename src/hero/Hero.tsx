import jane from '../assets/jane.jpeg';

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${jane})`,
        backgroundSize: 'cover',
      }}
      className="w-screen h-[248px] md:h-screen bg-red-500 flex items-center p-6">
      <div className="text-white flex flex-col gap-6">
        <div className="text-4xl tracking-widest">Jane's</div>
        <div className="hidden md:block text-6xl font-bold">FASHION BLOG</div>
        <button className="bg-gray-300 font-xl py-3 px-6 opacity-60 hover:opacity-100 text-black w-fit">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}
