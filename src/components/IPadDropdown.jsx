import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const IPadDropdown = ({ isOpen, onMouseEnter, onMouseLeave, onItemClick }) => {
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
              <p className="text-[12px] text-[#6e6e73]">Explore iPad</p>
              <Link
                to="/ipad"
                className="block text-[24px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Explore All iPad
              </Link>
              <Link
                to="/ipad"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                iPad Pro
              </Link>
              <Link
                to="/ipad"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                iPad Air
              </Link>
              <Link
                to="/ipad"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                iPad
              </Link>
              <Link
                to="/ipad"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                iPad mini
              </Link>
              <Link
                to="/ipad"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                Apple Pencil
              </Link>
              <Link
                to="/ipad"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                Keyboards
              </Link>
              <p className="text-[12px] text-[#333336] font-semibold mt-4">
                
              </p>
              <p className="text-[12px] text-[#333336] font-semibold">
                Compare iPad
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[12px] text-[#6e6e73]">Shop iPad</p>
              <Link
                to="/ipad"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Shop iPad
              </Link>
              <Link
                to="/ipad"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                iPad Accessories
              </Link>
              <Link
                to="/ipad"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Apple Trade In
              </Link>
             
              <Link
                to="/ipad"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Financing
              </Link>
              <Link
                to="/ipad"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Personal Setup
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-[12px] text-[#6e6e73]">More from iPad</p>
              <Link
                to="/ipad"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                iPad Support
              </Link>
              <Link
                to="/ipad"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                AppleCare
              </Link>
              <Link
                to="/ipad"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                iOS Preview 27
              </Link>
              <Link
                to="/ipad"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Apple Intelligence and Siri
              </Link>
              <Link
                to="/ipad"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                iPad Privacy
              </Link>
              <Link
                to="/ipad"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Better with Mac
              </Link>
              <Link
                to="/ipad"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                iCloud+
              </Link>
              <Link
                to="/ipad"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Wallet, Pay, Card
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IPadDropdown;
