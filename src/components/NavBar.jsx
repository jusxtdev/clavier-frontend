import { Search, User, ShoppingBag } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function NavBar() {
  return (
    <nav id="navbar" className="flex items-center justify-between py-5 px-8 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div id="logo" className="flex-1 text-[1.3rem] font-extrabold tracking-tight text-gray-900">
        CLAVIER
      </div>

      <div id="links" className="flex flex-1 justify-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.to}
            href={link.to}
            className="text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div id="auth" className="flex flex-1 justify-end gap-5">
        <button className="text-gray-400 hover:text-gray-900 transition-colors duration-200 cursor-pointer">
          <Search size={18} />
        </button>
        <button className="text-gray-400 hover:text-gray-900 transition-colors duration-200 cursor-pointer">
          <User size={18} />
        </button>
        <button className="text-gray-400 hover:text-gray-900 transition-colors duration-200 cursor-pointer">
          <ShoppingBag size={18} />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
