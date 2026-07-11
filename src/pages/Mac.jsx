import Navbar from "../components/Navbar";
import { useState, useRef } from "react";

import { ChevronLeft, ChevronRight, ChevronUp, Plus } from "lucide-react";
import BigCard from "../components/BigProductCard";

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
    image: "/images/Mac/mbn_0cd16ed14_2x (1).jpg",
    name: "MacBook Neo",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color2.png",
      "/images/Mac/color3.png",
      "/images/Mac/color4.png",
      "/images/Mac/color5.png",
    ],
  },
  {
    id: 2,
    category: "Laptops",
    image: "/images/Mac/mba_13_15_7482a7376_2x.jpg",
    name: "MacBook Air 13 &15",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color2.png",
      "/images/Mac/color3.png",
      "/images/Mac/color4.png",
      "/images/Mac/color5.png",
    ],
  },

  {
    id: 3,
    category: "Laptops",
    image: "/images/Mac/mbp_14_16_304f8e722_2x.jpg",
    name: "MacBook Pro 14",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color2.png",
      "/images/Mac/color3.png",
      "/images/Mac/color4.png",
      "/images/Mac/color5.png",
    ],
  },

  {
    id: 4,
    category: "Desktops",
    image: "/images/Mac/imac_24_9168aa3d6_2x.jpg",
    name: "iMac",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color2.png",
      "/images/Mac/color3.png",
      "/images/Mac/color4.png",
      "/images/Mac/color5.png",
    ],
  },
  {
    id: 5,
    category: "Desktops",
    image: "/images/Mac/mac_mini_0688a3785_2x.jpg",
    name: "Mac mini",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color2.png",
      "/images/Mac/color3.png",
      "/images/Mac/color4.png",
      "/images/Mac/color5.png",
    ],
  },
  {
    id: 6,
    category: "Desktops",
    image: "/images/Mac/mac_studio_3170621a5_2x.jpg",
    name: "Mac Studio",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color2.png",
      "/images/Mac/color3.png",
      "/images/Mac/color4.png",
      "/images/Mac/color5.png",
    ],
  },
  {
    id: 7,
    category: "Displays",
    image: "/images/Mac/studio_display_5624b03ba_2x.jpg",
    name: "Studio Display",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color2.png",
      "/images/Mac/color3.png",
      "/images/Mac/color4.png",
      "/images/Mac/color5.png",
    ],
  },
  {
    id: 8,
    category: "Displays",
    image: "/images/Mac/studio_display_xdr_8f8c40a27_2x.jpg",
    name: "Studio Display XDR",
    description: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo.",
    colors: [
      "/images/Mac/color1.png",
      "/images/Mac/color2.png",
      "/images/Mac/color3.png",
      "/images/Mac/color4.png",
      "/images/Mac/color5.png",
    ],
  },
];

//Products

const products = [
  {
    titleSmall: "Ways to Buy",
    title: "Pay over time,\ninterest-free.",
    desc: "When you choose to check out with Apple Card Monthly Installments.",
    image: "/images/Mac/apple_card_3230c808c_2x.jpg",
  },
  {
    titleSmall: "Education",
    title: "Save on Mac with\neducation pricing.*",
    desc: "College students and educators can save through the Apple Store.",
    image: "/images/Mac/education_9d319824e_2x.jpg",
  },
  {
    titleSmall: "Personal Setup",
    title: "Meet your new Mac with\nPersonal Setup.",
    desc: "Get one-on-one help with data transfer, the latest features, and more.",
    image: "/images/Mac/setup_032f3b488_2x.jpg",
  },
  {
    titleSmall: "Customize Your Mac",
    title: "Customize your Mac.",
    desc: "Choose your chip, memory, storage, even color.",
    image: "/images/Mac/customize_55ea537ad_2x.jpg",
  },
  {
    titleSmall: "Delivery & Pickup",
    title: "Delivery & Pickup",
    desc: "Choose your chip, memory, storage, even color.",
    image: "/images/Mac/delivery_985fbbc2e_2x.jpg",
  },
  {
    titleSmall: "Guided Shopping",
    title: "Get flexible delivery and\neasy pickup.",
    desc: "Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options.",
    image: "/images/Mac/support_a6134bd81_2x.jpg",
  },
];

const product = [
  {
    id: 1,
    titleSmall: "Performance and Battery Life",
    title: "Go Fast, Go Far.",
    image: "/images/Mac/fc_performance_0f92b741a_2x.jpg",
    textColor: "text-white",
  },
  {
    id: 2,
    titleSmall: "Built For AI",
    title: "Smart. Secure.\nOn Device.",
    image: "/images/Mac/fc_intelligence_69d4bf8c2_2x.jpg",
    textColor: "text-white",
  },
  {
    id: 3,
    titleSmall: "macOS and Apple Intelligence",
    title: "Easy to use. Easy to love.",
    image: "/images/Mac/fc_macos_65fcfdaf2_2x.jpg",
    textColor: "text-[#1d1d1f]",
  },
  {
    id: 4,
    titleSmall: "Mac + iPhone",
    title: "Together they \nwork wonders.",
    image: "/images/Mac/fc_iphone_1a4c9f1e5_2x  .jpg",
    textColor: "text-[#1d1d1f]",
  },
  {
    id: 5,
    titleSmall: "Compatibility",
    title: "Mac runs your\n favorite apps.",
    desc: "Choose your chip, memory, storage, even color.",
    image: "/images/Mac/fc_compatibility_e94c0f8a8_2x.jpg",
    textColor: "text-[#1d1d1f]",
  },
  {
    id: 6,
    titleSmall: "Privacy and Security",
    title: "Get flexible delivery and\neasy pickup.",
    image: "/images/Mac/fc_security_4edf4d348_2x.jpg",
    textColor: "text-white",
  },
  {
    id: 7,
    titleSmall: "Privacy and Security",
    title: "Get flexible delivery and\neasy pickup.",
    image: "/images/Mac/fc_durability_44004299a_2x.jpg",
    textColor: "text-white",
  },
  {
    id: 8,
    titleSmall: "Privacy and Security",
    title: "Get flexible delivery and\neasy pickup.",
    image: "/images/Mac/fc_values_e5b10a05a_2x.jpg",
    textColor: "text-white",
  },
];

// BigCard
const bigCards = [
  {
    id: 1,
    title: "Give us the old. Save on\nthe new",
    description:
      "with Apple trade in, you can get a great value for\nyou current device and apply it toward a new one.\nIf youyr device isn't eligible for credit, we'll recycle it   for free.",
    image: "/images/Mac/trade_in_f0404b799_2x.png",
    subtitle: "See What your device is worth >",
  },
  {
    id: 2,
    title: "Give us the old. Save on\nthe new",
    description: "Show how easy it move to Mac.",
    image: "/images/Mac/mac_does_that_118f02192_2x.png",
    subtitle: "Learn more >",
  },
];

const appleFeatures = [
  {
    id: 1,
    title: "Mac and iPhone",
    description:
      "Answer calls or messages from your iPhone directly on your Mac. See and control what's on your iPhone from your Mac with iPhone Mirroring and Live Activities. Use Universal Clipboard to copy images, video, or text from your iPhone, then paste into another app on your nearby Mac.",
    image: "/images/Mac/mac_iphone_d50c6f239_2x.jpg",
  },
  {
    id: 2,
    title: "Mac and iPad",
    description:
      "Sketch on your iPad and instantly see it appear on your Mac with Sidecar. Use Universal Control to move your keyboard and mouse between devices seamlessly.",
    image: "/images/Mac/mac_ipad_e3dad78c7_2x.jpg",
  },
  {
    id: 3,
    title: "Mac and Apple Watch",
    description:
      "Unlock your Mac automatically with Apple Watch. Approve passwords and payments instantly and enjoy seamless continuity across your devices.",
    image: "/images/Mac/mac_watch_0075a526e_2x.jpg",
  },
];
function Mac() {
  const [activeTab, setActiveTab] = useState("All products");
  const [activeFeature, setActiveFeature] = useState(0);

  const categoryRef = useRef(null);
  const lineupRef = useRef(null);
  const scrollRef = useRef(null);

  const scrollCategoryLeft = () => {
    categoryRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollCategoryRight = () => {
    categoryRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const scrollExploreLeft = () => {
    lineupRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollExploreRight = () => {
    lineupRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const filteredProducts =
    activeTab === "All products"
      ? lineupProducts
      : lineupProducts.filter((item) => item.category === activeTab);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "right" ? 400 : -400,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col items-center w-full min-h-screen overflow-x-hidden py-2">
      <Navbar />
      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#f5f5f7] mx-auto pt-12 ">
        <div className="w-full h-[58px] flex items-center justify-center border-b border-gray-100 bg-white text-center ">
          <p className="text-[14px] text-[#1d1d1f]">
            Now you can buy Apple Watch with Education savings.
          </p>
          <a href="#" className="ml-1 text-[14px] text-[#0066cc]">
            Learn more.
          </a>
        </div>

        <main className="flex w-full max-w-full relative z-0 flex-col gap-12 overflow-x-hidden">
          {/* Mac Text */}
          <div className="w-full bg-[#f5f5f7]">
            <div className="flex h-[228px] w-full items-center px-32 bg-white">
              <div className=" ">
                <h1 className="text-[80px] font-bold text-[#1d1d1f]">Mac</h1>
              </div>
            </div>

            {/* Category products */}
            <div className="bg-white px-28 pb-12">
              {/* Arrows */}

              {/* Categories */}
              <div
                ref={categoryRef}
                className="flex max-w-full gap-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {categories.map((item) => (
                  <div
                    key={item.name}
                    className="group flex-shrink-0 flex h-36 w-32 flex-col items-center justify-center gap-2"
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
              <div className="relative z-1000 flex justify-end gap-3 mt-4">
                <button
                  onClick={scrollCategoryLeft}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                >
                  <ChevronLeft />
                </button>

                <button
                  onClick={scrollCategoryRight}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#f5f5f7] px-32">
            <h2 className="text-[48px] font-semibold text-[#1d1d1f] mb-10">
              Explore the lineup.
            </h2>

            {/* Tabs */}

            <div className="inline-flex bg-[#e8e8ed] rounded-full p-1">
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
            <div className="mb-6 flex justify-end gap-3">
              <button
                onClick={scrollExploreLeft}
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center shadow-sm"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={scrollExploreRight}
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center shadow-sm"
              >
                <ChevronRight />
              </button>
            </div>
            <div
              ref={lineupRef}
              className="flex w-full max-w-full gap-10 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
          </div>

          {/* Products */}
          <section className="bg-[#f5f5f7] w-full px-32">
            {/* Header */}
            <div className="max-w-[1440px] mx-auto flex justify-between items-end mb-10">
              <h2
                className="text-[48px] font-bold text-[#1d1d1f] "
              >
                Why Apple is the best
                <br />
                place to buy Mac.
              </h2>

              <a
                href="#"
                className="
          text-[#0066cc]
          text-[14px]
          mb-2
          hover:underline
          "
              >
                Shop Mac ›
              </a>
            </div>

            {/* Cards */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pl-[calc((100vw-1322px)/2)] pr-10 scroll-smooth no-scrollbar "
            >
              {products.map((item, index) => (
                <div
                  key={index}
                  className="
            flex-none
            w-[372px]
            h-[495px]
            bg-white
            rounded-[28px]
            p-7
            relative
            overflow-hidden
            "
                >
                  {/* Text */}
                  <p
                    className="
              text-[14px]
              font-semibold
              text-[#1d1d1f]
              mb-2
            "
                  >
                    {item.titleSmall}
                  </p>

                  <h3
                    className="
              whitespace-pre-line
              text-[25px]
              leading-[1.1]
              font-semibold
              tracking-[-0.02em]
              text-[#1d1d1f]
            "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
              mt-4
              text-[15px]
              leading-[1.4]
              text-[#6e6e73]
              max-w-[290px]
            "
                  >
                    {item.desc}
                  </p>

                  {/* Image */}
                  <img
                    src={item.image}
                    className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              w-[280px]
              object-contain
              "
                  />

                  {/* Plus button */}
                  <button
                    className="
              absolute
              bottom-5
              right-5
              w-8
              h-8
              rounded-full
              bg-[#e8e8ed]
              flex
              items-center
              justify-center
              "
                  >
                    <Plus size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <div
              className="
        max-w-[1322px]
        mx-auto
        flex
        justify-center
        gap-3
        mt-6
      "
            >
              <button
                onClick={() => scroll("left")}
                className="
          w-9
          h-9
          rounded-full
          bg-[#e8e8ed]
          flex
          items-center
          justify-center
          text-[#86868b]
          "
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => scroll("right")}
                className="
          w-9
          h-9
          rounded-full
          bg-[#e8e8ed]
          flex
          items-center
          justify-center
          text-[#1d1d1f]
          "
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </section>

          <section className="bg-[#f5f5f7] w-full">
            {/* Header */}
            <div className="max-w-[1440px] mx-auto flex pt-4 px-32 py-12">
              <h2 className="text-[48px] font-bold text-[#1d1d1f]">
                Get to Know Mac.
              </h2>
            </div>

            {/* Cards */}

            <div ref={scrollRef}
              className=" px-32
    flex
    flex-row
    gap-4
    overflow-x-auto
    no-scrollbar
    scroll-smooth
  "
            >
              {product.map((product) => (
                <div
                  key={product.id}
                  className="
        flex-none
        w-[372px]
        h-[680px]
        rounded-[28px]
        bg-cover
        bg-center
        relative
        overflow-hidden
      "
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                >
                  {/* Card content */}
                  <div className="p-7">
                    <p
                      className={`
    text-[14px]
    font-semibold
    ${product.textColor}
  `}
                    >
                      {product.titleSmall}
                    </p>

                    <h3
                      className={`
    text-[25px]
    font-semibold
    leading-[1.1]
    ${product.textColor}
  `}
                    >
                      {product.title}
                    </h3>
                  </div>
                  {/* Plus button */}
                  <button
                    className="
              absolute
              bottom-5
              right-5
              w-8
              h-8
              rounded-full
              bg-[#e8e8ed]
              flex
              items-center
              justify-center
              "
                  >
                    <Plus size={18} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* BigCard 1 */}
          <div className="h-auto bg-[#f5f5f7] pt-12   px-32">
            <p className="text-[#1d1d1f] text-[48px] font-semibold ">
              Switch to Mac.
            </p>
            <div className="flex gap-5 overflow-x-auto no-scrollbar pt-10">
              {bigCards.map((card) => (
                <BigCard className="" key={card.id} {...card} />
              ))}
            </div>
          </div>

          {/* BigCard 2*/}
          <div className="h-auto bg-[#f5f5f7] pt-12 px-32">
            <p className="text-[#1d1d1f] text-[48px] font-semibold ">
              Mac Essentials.
            </p>
            <div className="flex gap-5 overflow-x-auto no-scrollbar pt-10">
              {bigCards.map((card) => (
                <BigCard className="" key={card.id} {...card} />
              ))}
            </div>
          </div>
          <section className="bg-white py-24">
            {/* Header */}

            <div className="max-w-auto px-32">
              <div className="flex justify-between items-center">
                <h2 className="text-[48px] font-semibold text-[#1d1d1f] tracking-[-0.02em]">
                  Unlock the world of Apple.
                </h2>

                <button className="text-[#0066cc] text-[17px] hover:underline">
                  Learn how Apple devices work better together →
                </button>
              </div>

              {/* Card */}

              <div className="rounded-[34px] bg-[#f5f5f7] h-[640px] flex overflow-hidden">
                {/* Left */}

                <div className="w-[38%] px-14 py-14 flex flex-col justify-center">
                  {appleFeatures.map((item, index) => (
                    <div
                      key={item.id}
                      className="border-b border-[#d2d2d7] last:border-none"
                    >
                      <button
                        onClick={() => setActiveFeature(index)}
                        className="w-full py-6 flex justify-between items-center"
                      >
                        <span className="text-[28px] font-semibold text-[#1d1d1f]">
                          {item.title}
                        </span>

                        <ChevronUp
                          size={28}
                          className={`transition-all duration-300 ${
                            activeFeature === index ? "" : "rotate-180"
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          activeFeature === index
                            ? "max-h-[350px] pb-8"
                            : "max-h-0"
                        }`}
                      >
                        <p className="text-[17px]  text-[#1d1d1f]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right */}

                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={appleFeatures[activeFeature].image}
                    alt=""
                    className="w-[760px] object-contain transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Mac;
