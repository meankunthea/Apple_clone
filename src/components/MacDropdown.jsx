import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MacDropdown = ({ isOpen, onMouseEnter, onMouseLeave, onItemClick }) => {
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
        <div className="h-[530px] max-w-full mx-auto bg-white px-6 py-8">
          <div className="grid-cols-[280px_1fr_1fr_1fr] gap-32 text-sm text-[#1d1d1f] mx-auto flex h-full max-w-full items-start justify-center px-24 py-8">
            <div className="space-y-2">
              <p className="text-[12px] text-[#6e6e73]">Explore Mac</p>
              <Link
                to="/mac"
                className="block text-[24px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Explore All Mac
              </Link>
              <Link
                to="/mac"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                MacBook Neo
              </Link>
              <Link
                to="/mac"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                MacBook Air
              </Link>
              <Link
                to="/mac"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                MacBook Pro
              </Link>
              <Link
                to="/mac"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                iMac
              </Link>
              <Link
                to="/mac"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                Mac mini
              </Link>
              <Link
                to="/mac"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                Mac Studio
              </Link>
               <Link
                to="/mac"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                Displays
              </Link>
              <p className="text-[12px] text-[#333336] font-semibold mt-4">
                Comapare Mac
              </p>
              <p className="text-[12px] text-[#333336] font-semibold">
                Switch from PC to Mac
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[12px] text-[#6e6e73]">Shop Mac</p>
              <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Shop Mac
              </Link>
              <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Mac Accessories
              </Link>
              <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Apple Trade In
              </Link>
              <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Financing
              </Link>
              <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Personal Setup
              </Link>
              
            </div>
            <div className="space-y-2">
              <p className="text-[12px] text-[#6e6e73]">More from Mac</p>
              <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Mac Support
              </Link>
              <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                AppleCare
              </Link>
              <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                iOS Preview 27
              </Link>
              <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Apple Intelligence and Siri
              </Link>
              <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Apps by Apple
              </Link>
              <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Apple Creator Studio
              </Link>
               <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Better with iPhone
              </Link>
              <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                iCloud+
              </Link>
              <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Mac for Bussiness
              </Link>
              <Link
                to="/mac"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Education
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MacDropdown;
