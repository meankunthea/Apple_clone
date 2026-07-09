import Navbar from "../components/Navbar";
import { useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "MacBook Neo", image: "/images/Mac/education_bdd3e67fa_2x.jpg" },
  {
    name: "MacBook Air",
    image: "/images/Mac/mba_13_15_7482a7376_2x.jpg",
  },
  { name: "MacBook Pro", image: "/images/Mac/mbp_14_16_304f8e722_2x.jpg" },
  {
    name: "iMac",
    image: "/images/Mac/nav_imac_24_fbf85926c_2x.png",
  },
  {
    name: "Mac mini",
    image: "/images/Mac/mac_mini_0688a3785_2x.jpg",
  },
  {
    name: "Mac Studio",
    image: "/images/Mac/mac_studio_3170621a5_2x.jpg",
  },
  {
    name: "Compare",
    image: "/images/Mac/nav_compare_5c5c25766_2x.png",
  },
  {
    name: "Displays",
    image: "/images/Mac/nav_displays_e08c5b904_2x.png",
  },
  {
    name: "Accessories",
    image: "/images/Mac/nav_accessories_c3e74ad3c_2x.png",
  },
  {
    name: "Shop Mac",
    image: "/images/Mac/nav_shop_mac_180ba8818_2x.png",
  },
  {
    name: "Golden Gate",
    image: "/images/Mac/nav_macos_eba0c550e_2x.png",
  },
];

// Explore lineup products
const lineupProducts = [
  {
    id: 1,
    category: "Laptops",
    image: "/images/Mac/mba_13_15_7482a7376_2x.jpg",
    name: "MacBook Neo",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
    ],
  },
  {
    id: 2,
    category: "Laptops",
    image: "/images/Mac/mba_13_15_7482a7376_2x.jpg",
    name: "MacBook Neo",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
    ],
  },
  {
    id: 1,
    category: "Laptops",
    image: "/images/Mac/mba_13_15_7482a7376_2x.jpg",
    name: "MacBook Neo",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
    ],
  },
  {
    id: 3,
    category: "Laptops",
    image: "/images/Mac/mba_13_15_7482a7376_2x.jpg",
    name: "MacBook Neo",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
    ],
  },
  
  {
    id: 4,
    category: "Laptops",
    image: "/images/Mac/mba_13_15_7482a7376_2x.jpg",
    name: "MacBook Neo",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
    ],
  },
  {
    id: 5,
    category: "Laptops",
    image: "/images/Mac/mba_13_15_7482a7376_2x.jpg",
    name: "MacBook Neo",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
    ],
  },
  {
    id: 6,
    category: "Laptops",
    image: "/images/Mac/mba_13_15_7482a7376_2x.jpg",
    name: "MacBook Neo",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
    ],
  },
  {
    id: 7,
    category: "Laptops",
    image: "/images/Mac/mba_13_15_7482a7376_2x.jpg",
    name: "MacBook Neo",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
      "/images/Mac/color1.png",
    ],
  },

  
];
function Mac() {
  const [activeTab, setActiveTab] = useState("All products");

  const lineupRef = useRef(null);

  const scrollLineupLeft = () => {
    lineupRef.current?.scrollBy({
      left: -900,
      behavior: "smooth",
    });
  };

  const scrollLineupRight = () => {
    lineupRef.current?.scrollBy({
      left: 900,
      behavior: "smooth",
    });
  };

  const filteredProducts =
    activeTab === "All products"
      ? lineupProducts
      : lineupProducts.filter((item) => item.category === activeTab);

  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -600,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 600,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Navbar />
      <div className="min-h-screen bg-white mx-auto px-[80px] pt-[48px]">
        <div className="w-full h-[58px] flex items-center justify-center border-b border-gray-100 bg-white text-center ">
          <p className="text-[14px] text-[#1d1d1f]">
            Now you can buy Apple Watch with Education savings.
          </p>
          <a href="#" className="ml-1 text-[14px] text-[#0066cc]">
            Learn more.
          </a>
        </div>

        <main className="flex w-full flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8  pl-[140px]">
          {/* Mac Text */}
          <div className="flex h-[228px] w-full items-center px-8 ">
            <div className=" ">
              <h1 className="text-[80px] font-bold text-[#1d1d1f]">Mac</h1>
            </div>
          </div>

          {/* Category products */}
          <div className="bg-white px-6 py-8">
            {/* Arrows */}
            <div className="flex justify-end gap-3 mb-4">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={scrollRight}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Categories */}
            <div
              ref={scrollRef}
              className="mb-6 flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            >
              {categories.map((item) => (
                <div
                  key={item.name}
                  className="group flex-shrink-0 flex h-[148px] w-[136px] flex-col items-center justify-center gap-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[78px] w-[120px] object-contain"
                  />
                  <span className="text-center text-[12px] font-medium group-hover:underline">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full bg-[#f5f5f7] py-20 ">
            <h2 className="text-[48px] font-semibold text-[#1d1d1f] mb-10">
              Explore the lineup.
            </h2>

            {/* Tabs */}

            <div className="inline-flex bg-[#e8e8ed] rounded-full p-1 mb-14">
              {["All products", "Laptops", "Desktops", "Displays"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full text-[16px] transition
        ${activeTab === tab ? "bg-[#1d1d1f] text-white" : "text-[#555]"}`}
                  >
                    {tab}
                  </button>
                ),
              )}
            </div>

            {/* Products */}

            <div
              ref={lineupRef}
              className="flex gap-10 overflow-x-auto scroll-smooth scrollbar-hide"
            >
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="w-[340px] flex-shrink-0 text-center"
                >
                  <div className="h-[230px] bg-white rounded-[20px] flex items-center justify-center">
                    <img
                      src={item.image}
                      className="max-h-[180px] object-contain"
                    />
                  </div>
                  <div className="flex justify-center gap-2 mt-8 mb-5">
                    {item.colors?.map((color, index) => (
                      <button
                        key={index}
                        className="w-4 h-4 rounded-full overflow-hidden border border-gray-300 hover:scale-110 transition"
                      >
                        <img
                          src={color}
                          alt={`Color ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  <h3 className="text-[34px] font-semibold text-[#1d1d1f]">
                    {item.name}
                  </h3>

                  <p className="text-[18px] text-[#1d1d1f] mt-3">
                    {item.description}
                  </p>

                  <p className="text-[15px] text-[#6e6e73] mt-6">
                    {item.price}
                  </p>

                  <div className="flex justify-center gap-8 mt-8">
                    <button className="bg-[#0071e3] text-white px-8 py-3 rounded-full">
                      Learn more
                    </button>

                    <button className="text-[#0071e3]">Buy ›</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}

            <div className="flex justify-end gap-4 mt-10">
              <button
                onClick={scrollLineupLeft}
                className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={scrollLineupRight}
                className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Mac;
