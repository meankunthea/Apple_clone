import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import IPhoneDropdown from "./IPhoneDropdown";
import IPadDropdown from "./IPadDropdown";
import MacDropdown from "./MacDropdown";
import StoreDropdown from "./StoreDropdown";

const Navbar = () => {
  const [isIPhoneOpen, setIsIPhoneOpen] = useState(false);
  const [isIPadOpen, setIsIPadOpen] = useState(false);
  const [isMacOpen, setIsMacOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const hideTimeoutRef = useRef(null);
  const iPadTimeoutRef = useRef(null);
  const macTimeoutRef = useRef(null);
  const storeTimeoutRef = useRef(null);
  const menuRef = useRef(null);
  const iPadMenuRef = useRef(null);
  const macMenuRef = useRef(null);
  const storeMenuRef = useRef(null);

  const clearHideTimer = () => {
    if (hideTimeoutRef.current) {
      window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const openIPhone = () => {
    closeIPad();
    closeMac();
    closeStore();
    clearHideTimer();
    setIsIPhoneOpen(true);
  };

  const closeIPhone = () => {
    clearHideTimer();
    setIsIPhoneOpen(false);
  };

  const scheduleCloseIPhone = () => {
    clearHideTimer();
    hideTimeoutRef.current = window.setTimeout(() => {
      setIsIPhoneOpen(false);
    }, 120);
  };

  const clearIPadTimer = () => {
    if (iPadTimeoutRef.current) {
      window.clearTimeout(iPadTimeoutRef.current);
      iPadTimeoutRef.current = null;
    }
  };

  const openIPad = () => {
    closeIPhone();
    closeMac();
    closeStore();
    clearIPadTimer();
    setIsIPadOpen(true);
  };

  const closeIPad = () => {
    clearIPadTimer();
    setIsIPadOpen(false);
  };

  const scheduleCloseIPad = () => {
    clearIPadTimer();
    iPadTimeoutRef.current = window.setTimeout(() => {
      setIsIPadOpen(false);
    }, 120);
  };

  const clearMacTimer = () => {
    if (macTimeoutRef.current) {
      window.clearTimeout(macTimeoutRef.current);
      macTimeoutRef.current = null;
    }
  };

  const openMac = () => {
    closeIPhone();
    closeIPad();
    closeStore();
    clearMacTimer();
    setIsMacOpen(true);
  };

  const closeMac = () => {
    clearMacTimer();
    setIsMacOpen(false);
  };

  const scheduleCloseMac = () => {
    clearMacTimer();
    macTimeoutRef.current = window.setTimeout(() => {
      setIsMacOpen(false);
    }, 120);
  };

  const clearStoreTimer = () => {
    if (storeTimeoutRef.current) {
      window.clearTimeout(storeTimeoutRef.current);
      storeTimeoutRef.current = null;
    }
  };

  const openStore = () => {
    closeIPhone();
    closeIPad();
    closeMac();
    clearStoreTimer();
    setIsStoreOpen(true);
  };

  const closeStore = () => {
    clearStoreTimer();
    setIsStoreOpen(false);
  };

  const scheduleCloseStore = () => {
    clearStoreTimer();
    storeTimeoutRef.current = window.setTimeout(() => {
      setIsStoreOpen(false);
    }, 120);
  };

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeIPhone();
      }
      if (iPadMenuRef.current && !iPadMenuRef.current.contains(event.target)) {
        closeIPad();
      }
      if (macMenuRef.current && !macMenuRef.current.contains(event.target)) {
        closeMac();
      }
      if (storeMenuRef.current && !storeMenuRef.current.contains(event.target)) {
        closeStore();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      clearHideTimer();
      clearIPadTimer();
      clearMacTimer();
      clearStoreTimer();
    };
  }, []);

  const handleMenuToggle = () => {
    if (isIPhoneOpen) {
      closeIPhone();
    } else {
      openIPhone();
    }
  };

  const handleIPadMenuToggle = () => {
    if (isIPadOpen) {
      closeIPad();
    } else {
      openIPad();
    }
  };

  const handleDropdownItemClick = () => {
    closeIPhone();
  };

  const handleIPadDropdownItemClick = () => {
    closeIPad();
  };

  const handleMacMenuToggle = () => {
    if (isMacOpen) {
      closeMac();
    } else {
      openMac();
    }
  };

  const handleMacDropdownItemClick = () => {
    closeMac();
  };

  const handleStoreMenuToggle = () => {
    if (isStoreOpen) {
      closeStore();
    } else {
      openStore();
    }
  };

  const handleStoreDropdownItemClick = () => {
    closeStore();
  };

  return (
    <nav className="fixed top-0 w-full h-12 bg-[#f5f5f7] backdrop-blur-md z-50">
      <div className="flex items-center justify-center h-full gap-6 text-sm text-[#1d1d1f]">
        <Link to="/" className="text-xl font-bold">
          <img className="w-4 h-4" src="/images/home/45dfd13dacaf484f3462.svg" alt="logo" />
        </Link>

        <div ref={storeMenuRef} className="relative">
          <button
            type="button"
            onClick={handleStoreMenuToggle}
            onMouseEnter={openStore}
            className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f] focus:outline-none"
          >
            Store
          </button>

          <StoreDropdown
            isOpen={isStoreOpen}
            onMouseEnter={openStore}
            onMouseLeave={scheduleCloseStore}
            onItemClick={handleStoreDropdownItemClick}
          />
        </div>

        <div ref={macMenuRef} className="relative">
          <button
            type="button"
            onClick={handleMacMenuToggle}
            onMouseEnter={openMac}
            className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f] focus:outline-none"
          >
            Mac
          </button>

          <MacDropdown
            isOpen={isMacOpen}
            onMouseEnter={openMac}
            onMouseLeave={scheduleCloseMac}
            onItemClick={handleMacDropdownItemClick}
          />
        </div>

        <div ref={iPadMenuRef} className="relative">
          <button
            type="button"
            onClick={handleIPadMenuToggle}
            onMouseEnter={openIPad}
            className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f] focus:outline-none"
          >
            iPad
          </button>

          <IPadDropdown
            isOpen={isIPadOpen}
            onMouseEnter={openIPad}
            onMouseLeave={scheduleCloseIPad}
            onItemClick={handleIPadDropdownItemClick}
          />
        </div>

        <div ref={menuRef} className="relative">
          <button
            type="button"
            onClick={handleMenuToggle}
            onMouseEnter={openIPhone}
            className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f] focus:outline-none"
          >
            iPhone
          </button>

          <IPhoneDropdown
            isOpen={isIPhoneOpen}
            onMouseEnter={openIPhone}
            onMouseLeave={scheduleCloseIPhone}
            onItemClick={handleDropdownItemClick}
          />
        </div>

        <Link to="/watch" className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]" onClick={() => { closeIPhone(); closeIPad(); closeMac(); closeStore(); }}>Watch</Link>
        <Link to="/vision" className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]" onClick={() => { closeIPhone(); closeIPad(); closeMac(); closeStore(); }}>Vision</Link>
        <Link to="/airpods" className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]" onClick={() => { closeIPhone(); closeIPad(); closeMac(); closeStore(); }}>AirPods</Link>
        <Link to="/tv-home" className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]" onClick={() => { closeIPhone(); closeIPad(); closeMac(); closeStore(); }}>TV & Home</Link>
        <Link to="/entertainment" className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]" onClick={() => { closeIPhone(); closeIPad(); closeMac(); closeStore(); }}>Entertainment</Link>
        <Link to="/accessories" className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]" onClick={() => { closeIPhone(); closeIPad(); closeMac(); closeStore(); }}>Accessories</Link>
        <Link to="/support" className="text-[#1d1d1f] text-[12px] hover:text-black" onClick={() => { closeIPhone(); closeIPad(); closeMac(); closeStore(); }}>Support</Link>

        <button className="hover:text-black">
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