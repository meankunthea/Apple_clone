/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Submenu = ({ isOpen }) => {
  return (
    <>
      <div className={`pointer-events-none fixed inset-x-0 top-12 bottom-0 z-40 bg-white/15 backdrop-blur-sm transition duration-200  ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`pointer-events-none fixed inset-x-0 top-12 z-50 overflow-hidden transition-all duration-200 ${isOpen ? 'block opacity-100 pointer-events-auto' : 'hidden opacity-0'}`}>
        <div className="h-[432px] w-full max-w-[1440px] mx-auto bg-white px-6 py-8">
          <div className="grid h-full grid-cols-[280px_1fr_1fr_1fr] gap-6 text-sm text-[#1d1d1f]">
            <div className="space-y-2">
              <p className="text-[12px] text-[#6e6e73]">Explore iPhone</p>
              <Link to="/iphone" className="block text-[24px] text-[#1d1d1f] font-semibold">Explore All iPhone</Link>
              <Link to="/iphone" className="block text-[24px] text-[#1d1d1f] font-semibold hover:text-black">iPhone 17 Pro</Link>
              <Link to="/iphone" className="block text-[24px] text-[#1d1d1f] font-semibold hover:text-black">iPhone Air</Link>
              <Link to="/iphone" className="block text-[24px] text-[#1d1d1f] font-semibold hover:text-black">iPhone 17</Link>
              <Link to="/iphone" className="block text-[24px] text-[#1d1d1f] font-semibold hover:text-black">iPhone 17e</Link>
              <Link to="/iphone" className="block text-[24px] text-[#1d1d1f] font-semibold hover:text-black">iPhone 16</Link>
              <p className="text-[12px] text-[#1d1d1f] font-semibold mt-4">Compare iPhone</p>
              <p className="text-[12px] text-[#1d1d1f] font-semibold">Switch from Android</p>
            </div>
            <div className="space-y-2">
              <p className="text-[12px] text-[#6e6e73]">Shop iPhone</p>
              <Link to="/iphone" className="block text-[12px] text-[#1d1d1f] font-semibold ">Shop iPhone</Link>
              <Link to="/iphone" className="block text-[12px] text-[#1d1d1f] font-semibold">iPhone Accessories</Link>
              <Link to="/iphone" className="block text-[12px] text-[#1d1d1f] font-semibold">Apple Trade In</Link>
              <Link to="/iphone" className="block text-[12px] text-[#1d1d1f] font-semibold">Carrier Deals at Apple</Link>
              <Link to="/iphone" className="block text-[12px] text-[#1d1d1f] font-semibold">Financing</Link>
              <Link to="/iphone" className="block text-[12px] text-[#1d1d1f] font-semibold">Personal Setup</Link>
            </div>
            <div className="space-y-2">
              <p className="text-[12px] text-[#6e6e73]">More from iPhone</p>
              <Link to="/iphone" className="block text-[12px] text-[#1d1d1f] font-semibold ">iPhone Support</Link>
              <Link to="/iphone" className="block text-[12px] text-[#1d1d1f] font-semibold">AppleCare</Link>
              <Link to="/iphone" className="block text-[12px] text-[#1d1d1f] font-semibold">iOS Preview 27</Link>
              <Link to="/iphone" className="block text-[12px] text-[#1d1d1f] font-semibold">Apple Intelligence and Siri</Link>
              <Link to="/iphone" className="block text-[12px] text-[#1d1d1f] font-semibold">iPhone Privacy</Link>
              <Link to="/iphone" className="block text-[12px] text-[#1d1d1f] font-semibold">Better with Mac</Link>
              <Link to="/iphone" className="block text-[12px] text-[#1d1d1f] font-semibold">iCloud+</Link>
              <Link to="/iphone" className="block text-[12px] text-[#1d1d1f] font-semibold">Wallet, Pay, Card</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submenu;
