import { Link } from "react-router-dom";

const IPhoneDropdown = ({ isOpen, onMouseEnter, onMouseLeave, onItemClick }) => {
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
              <p className="text-[12px] text-[#6e6e73]">Explore iPhone</p>
              <Link
                to="/iphone"
                className="block text-[24px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Explore All iPhone
              </Link>
              <Link
                to="/iphone"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                iPhone 17 Pro
              </Link>
              <Link
                to="/iphone"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                iPhone Air
              </Link>
              <Link
                to="/iphone"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                iPhone 17
              </Link>
              <Link
                to="/iphone"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                iPhone 17e
              </Link>
              <Link
                to="/iphone"
                className="block text-[24px] text-[#333336] font-semibold hover:text-black"
                onClick={onItemClick}
              >
                iPhone 16
              </Link>
              <p className="text-[12px] text-[#333336] font-semibold mt-4">
                Compare iPhone
              </p>
              <p className="text-[12px] text-[#333336] font-semibold">
                Switch from Android
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[12px] text-[#6e6e73]">Shop iPhone</p>
              <Link
                to="/iphone"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Shop iPhone
              </Link>
              <Link
                to="/iphone"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                iPhone Accessories
              </Link>
              <Link
                to="/iphone"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Apple Trade In
              </Link>
              <Link
                to="/iphone"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Carrier Deals at Apple
              </Link>
              <Link
                to="/iphone"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Financing
              </Link>
              <Link
                to="/iphone"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Personal Setup
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-[12px] text-[#6e6e73]">More from iPhone</p>
              <Link
                to="/iphone"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                iPhone Support
              </Link>
              <Link
                to="/iphone"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                AppleCare
              </Link>
              <Link
                to="/iphone"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                iOS Preview 27
              </Link>
              <Link
                to="/iphone"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Apple Intelligence and Siri
              </Link>
              <Link
                to="/iphone"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                iPhone Privacy
              </Link>
              <Link
                to="/iphone"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                Better with Mac
              </Link>
              <Link
                to="/iphone"
                className="block text-[12px] text-[#333336] font-semibold"
                onClick={onItemClick}
              >
                iCloud+
              </Link>
              <Link
                to="/iphone"
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

export default IPhoneDropdown;
