// "https://stackskb.com/wp-content/uploads/2021/12/V9dr54C-scaled-600x600.jpg"

const featuredProducts = [
  {
    id: 206,
    title: "MW Art Nouveau",
    category: "silent",
    imageURL:
      "https://stackskb.com/wp-content/uploads/2021/12/ArtNouveauAellaSquare-600x600.jpg",
    price: "12999.0",
  },
  {
    id: 201,
    title: "Milkyway Pluto Keycap Set",
    category: "silent",
    imageURL: "https://i.ibb.co/chQdpD2Z/0-FKz7cr-scaled-scaled-1.jpg",
    price: "10999.0",
  },
  {
    id: 188,
    title: "ePBT Hellas",
    category: "clicky",
    imageURL:
      "https://stackskb.com/wp-content/uploads/2021/07/d8UpsjD-600x338.webp",
    price: "12499.0",
  },
];

function ProductCard({ title, category, imageURL, price }) {
  return (
    <div className="group w-full max-w-sm overflow-hidden bg-white border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 cursor-pointer">
      <div className="w-full aspect-square overflow-hidden bg-gray-50">
        <img
          src={imageURL}
          alt={title}
          className="w-full h-full object-cover object-center "
        />
      </div>

      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col min-w-0">
          <span className="font-semibold text-sm text-gray-900 truncate">
            {title}
          </span>
          <span className="text-xs text-gray-400 capitalize mt-0.5">
            {category}
          </span>
        </div>

        <span className="font-semibold text-sm text-gray-900 ml-4 shrink-0">
          ${Math.round(Number(price)).toLocaleString()}
        </span>
      </div>
    </div>
  );
}

function Featured() {
  return (
    <section className="py-16 px-8">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            category={product.category}
            imageURL={product.imageURL}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Featured;
