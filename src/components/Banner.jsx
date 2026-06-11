import bannerImg from "../assets/banner.png";

function Banner() {
  return (
    <section
      className="relative w-full min-h-112 lg:min-h-128 bg-cover bg-center flex flex-col justify-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />

      {/* Text content — left aligned, vertically centered */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 max-w-md">
        <p className="text-xs tracking-widest text-white/80 uppercase mb-3">
          Crafted for Perfection
        </p>

        <h1 className="text-4xl font-bold text-white leading-tight mb-4">
          The Ultimate Typing Experience
        </h1>

        <p className="text-sm text-white/80 mb-8">
          Discover mechanical keyboards engineered for perfection, designed for
          enthusiasts who demand the best.
        </p>

        <button className="w-fit border border-white px-6 py-2.5 text-sm text-white font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200 cursor-pointer">
          Explore Collection
        </button>
      </div>
    </section>
  );
}

export default Banner;
