import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const StoreDropdown = ({ isOpen, onMouseEnter, onMouseLeave, onItemClick }) => {
  return (
    <>
      <div
        className={`pointer-events-none fixed inset-x-0 top-12 bottom-0 z-40 bg-white/15 backdrop-blur-sm transition duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div
        className={`fixed inset-x-0 top-12 z-50 overflow-hidden transition-all duration-200 ${
          isOpen
            ? "block opacity-100 pointer-events-auto"
            : "hidden opacity-0 pointer-events-none"
        }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="h-[432px] max-w-full mx-auto bg-white px-6 py-8">
          <div className="grid-cols-[280px_1fr_1fr_1fr] gap-32 text-sm text-[#1d1d1f] mx-auto flex h-full max-w-full items-start justify-center px-24 py-8">
            <div className="space-y-2">
              <p className="text-[12px] text-[#6e6e73]">Shop</p>
              <Link
                to="/store"
                className="block text-[24px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Shop the latest
              </Link>
              <Link
                to="/store"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                Mac
              </Link>
              <Link
                to="/store"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                iPad 
              </Link>
              <Link
                to="/store"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                iPhone
              </Link>
              <Link
                to="/store"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                Apple Watch
              </Link>
              <Link
                to="/store"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                Apple Vision Pro
              </Link>
              <Link
                to="/store"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                AirPods
              </Link>
              <Link
                to="/store"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                Accessories
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-[12px] text-[#6e6e73]">Quick Links</p>
              <Link
                to="/store"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Find a Store
              </Link>
              <Link
                to="/store"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Order Status
              </Link>
              <Link
                to="/store"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Apple Trade In
              </Link>
              <Link
                to="/store"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Financing
              </Link>
              
              <Link
                to="/store"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Personal Setup
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-[12px] text-[#6e6e73]">Shop Special Stores</p>
              <Link
                to="/store"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Certified Fefurbished
              </Link>
              <Link
                to="/store"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Education
              </Link>
              <Link
                to="/store"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Bussiness
              </Link>
              <Link
                to="/store"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Veterans and Military
              </Link>
              <Link
                to="/store"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Government
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreDropdown;
