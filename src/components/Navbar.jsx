import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-12 bg-white backdrop-blur-md z-50">
      
      <div className="flex items-center justify-center h-full gap-6 text-sm text-gray-700">
        
        {/* Apple logo */}
        <Link to="/" className="text-xl font-bold">
          <img className="w-4 h-4" src="/images/logo.png" alt="logo" />
        </Link>

        {/* Links */}
        <Link to="/store" className="hover:text-black">Store</Link>
        <Link to="/mac" className="hover:text-black">Mac</Link>
        <Link to="/ipad" className="hover:text-black">iPad</Link>
        <Link to="/iphone" className="hover:text-black">iPhone</Link>
        <Link to="/watch" className="hover:text-black">Watch</Link>
        <Link to="/watch" className="hover:text-black">Vision</Link>
        <Link to="/airpods" className="hover:text-black">AirPods</Link>
        <Link to="/watch" className="hover:text-black">TV & Home</Link>
        <Link to="/watch" className="hover:text-black">Entertainment</Link>
        <Link to="/watch" className="hover:text-black">Accessories</Link>
        <Link to="/support" className="hover:text-black">Support</Link>

        {/* Icons */}
        <button className="hover:text-black ">
          <img className="w-4 h-4" src="/images/search_icon.png" alt="search" />
        </button>
        <button className="hover:text-black">
          <img className="w-4 h-4" src="/images/shopping_bag.png" alt="shopping_bag" />
        </button>
      </div>

    </nav>
  );
};

export default Navbar;