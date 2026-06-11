const categoryTitles = ["mechanical", "custom", "silent", "tactile"];

function TypeCard({ title, count }) {
  return (
    <div className="p-5 bg-white w-2xs mx-auto border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 cursor-pointer">
      <hr className="w-38 h-0.5 mx-auto my-0 bg-neutral-950 border-0 rounded-sm md:my-10" />
      <div className="flex flex-col gap-3 -mt-3 mb-2">
        <p className="font-semibold text-2sm text-gray-900 truncate" >{title.charAt(0).toUpperCase() + title.slice(1)}</p>
        <p className="font-light text-sm" >{count} Products</p>
      </div>
    </div>
  );
}

function ShopByType() {
  return (
    <div className="py-16 px-8 bg-[#f7f5f1] text-center">
      <p className="text-2xl font-bold text-gray-900 text-center mb-10">
        Shop By Type
      </p>
      <div className="grid grid-cols-4 gap-8">
        <TypeCard title="mechanical" count={34} />
        <TypeCard title="mechanical" count={34} />
        <TypeCard title="mechanical" count={34} />
        <TypeCard title="mechanical" count={34} />
      </div>
    </div>
  );
}

export default ShopByType;
