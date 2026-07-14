import { useEffect, useRef, useState } from "react";

const DropdownMenu = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hideTimeoutRef = useRef(null);
  const menuRef = useRef(null);

  const clearHideTimer = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const openMenu = () => {
    clearHideTimer();
    setIsOpen(true);
  };

  const closeMenu = () => {
    clearHideTimer();
    setIsOpen(false);
  };

  const scheduleClose = () => {
    clearHideTimer();
    hideTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 120);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearHideTimer();
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => (isOpen ? closeMenu() : openMenu())}
        onMouseEnter={openMenu}
        className="text-[12px] text-[#6E6E73] hover:text-[#1d1d1f]"
      >
        {label}
      </button>

      <div
        className={`pointer-events-none fixed inset-x-0 top-12 bottom-0 z-40 bg-white/15 backdrop-blur-sm transition duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`fixed inset-x-0 top-12 z-50 transition-all duration-200 ${
          isOpen
            ? "block opacity-100 pointer-events-auto"
            : "hidden opacity-0 pointer-events-none"
        }`}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        {children({ closeMenu })}
      </div>
    </div>
  );
};

export default DropdownMenu;