import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isIPhoneOpen, setIsIPhoneOpen] = useState(false);

  const toggleIPhone = () => {
    setIsIPhoneOpen((current) => !current);
  };

  const closeIPhone = () => {
    setIsIPhoneOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full h-12 bg-[#f5f5f7] backdrop-blur-md z-50">
      
      <div className="flex items-center justify-center h-full gap-6 text-sm text-[#1d1d1f]">
        
        {/* Apple logo */}
        <Link to="/" className="text-xl font-bold">
          <img className="w-4 h-4" src="/images/home/45dfd13dacaf484f3462.svg" alt="logo" />
        </Link>

        {/* Links */}
        <Link to="/store" className=" text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]">Store</Link>
        <Link to="/mac" className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]">Mac</Link>
        <Link to="/ipad" className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]">iPad</Link>
        <div className="relative">
          <button onClick={toggleIPhone} className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f] focus:outline-none">
            iPhone
          </button>
          <div className={`pointer-events-none fixed inset-x-0 top-12 bottom-0 z-40 bg-white/15 backdrop-blur-sm transition duration-200 ${isIPhoneOpen ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className={`pointer-events-none fixed inset-x-0 top-12 z-50 overflow-hidden transition-all duration-200 ${isIPhoneOpen ? 'block opacity-100 pointer-events-auto' : 'hidden opacity-0'}`}>
            <div className="h-[432px]    max-w-[1440px] mx-auto bg-white px-6 py-8">
              <div className="grid h-full grid-cols-[280px_1fr_1fr_1fr] gap-6 text-sm text-[#1d1d1f]">
                <div className="space-y-2">
                  <p className="text-[12px] text-[#6e6e73]">Explore iPhone</p>
                  <Link to="/iphone" className="block text-[24px] text-[#333336] font-semibold">Explore All iPhone</Link>
                  <Link to="/iphone" className="block text-[24px] text-[#333336] font-semibold hover:text-black">iPhone 17 Pro</Link>
                  <Link to="/iphone" className="block text-[24px] text-[#333336] font-semibold hover:text-black">iPhone Air</Link>
                  <Link to="/iphone" className="block text-[24px] text-[#333336] font-semibold hover:text-black">iPhone 17</Link>
                  <Link to="/iphone" className="block text-[24px] text-[#333336] font-semibold hover:text-black">iPhone 17e</Link>
                  <Link to="/iphone" className="block text-[24px] text-[#333336] font-semibold hover:text-black">iPhone 16</Link>
                  <p className="text-[12px] text-[#333336] font-semibold mt-4">Compare iPhone</p>
                  <p className="text-[12px] text-[#333336] font-semibold">Switch from Android</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[12px] text-[#6e6e73]">Shop iPhone</p>
                  <Link to="/iphone" className="block text-[12px] text-[#333336] font-semibold ">Shop iPhone</Link>
                  <Link to="/iphone" className="block text-[12px] text-[#333336] font-semibold">iPhone Accessories</Link>
                  <Link to="/iphone" className="block text-[12px] text-[#333336] font-semibold">Apple Trade In</Link>
                  <Link to="/iphone" className="block text-[12px] text-[#333336] font-semibold">Carrier Deals at Apple</Link>
                  <Link to="/iphone" className="block text-[12px] text-[#333336] font-semibold">Financing</Link>
                  <Link to="/iphone" className="block text-[12px] text-[#333336] font-semibold">Personal Setup</Link>
                </div>
                <div className="space-y-2">
                  <p className="text-[12px] text-[#6e6e73]">More from iPhone</p>
                  <Link to="/iphone" className="block text-[12px] text-[#333336] font-semibold ">iPhone Support</Link>
                  <Link to="/iphone" className="block text-[12px] text-[#333336] font-semibold">AppleCare</Link>
                  <Link to="/iphone" className="block text-[12px] text-[#333336] font-semibold">iOS Preview 27</Link>
                  <Link to="/iphone" className="block text-[12px] text-[#333336] font-semibold">Apple Intelligence and Siri</Link>
                  <Link to="/iphone" className="block text-[12px] text-[#333336] font-semibold">iPhone Privacy</Link>
                  <Link to="/iphone" className="block text-[12px] text-[#333336] font-semibold">Better with Mac</Link>
                  <Link to="/iphone" className="block text-[12px] text-[#333336] font-semibold">iCloud+</Link>
                  <Link to="/iphone" className="block text-[12px] text-[#333336] font-semibold">Wallet, Pay, Card</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/watch" className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]" onClick={closeIPhone}>Watch</Link>
        <Link to="/vision" className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]" onClick={closeIPhone}>Vision</Link>
        <Link to="/airpods" className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]" onClick={closeIPhone}>AirPods</Link>
        <Link to="/tv-home" className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]" onClick={closeIPhone}>TV & Home</Link>
        <Link to="/entertainment" className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]" onClick={closeIPhone}>Entertainment</Link>
        <Link to="/accessories" className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]" onClick={closeIPhone}>Accessories</Link>
        <Link to="/support" className="text-[#1d1d1f] text-[12px] hover:text-black" onClick={closeIPhone}>Support</Link>

        {/* Icons */}
        <button className="hover:text-black ">
          <img className="w-4 h-4" src="/images/home/search_icon.png" alt="search" />
        </button>
        <button className="hover:text-black">
          <img className="w-4 h-4" src="/images/home/shopping_bag.png" alt="shopping_bag" />
        </button>
      </div>

    </nav>
  );
};

export default Navbar;