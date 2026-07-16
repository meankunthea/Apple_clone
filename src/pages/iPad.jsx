import Navbar from "../components/Navbar";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { ChevronLeft, ChevronRight, ChevronUp, Plus } from "lucide-react";
import BigCard from "../components/BigProductCard";
import Footer from "../components/Footer"

const categories = [
  { name: "iPad Pro", image: "/images/iPad/ipad_pro_bd732ab83_2x.png" },
  {
    name: "iPad Air",
    image: "/images/iPad/ipad_air_1ebbfa37b_2x.png",
  },
  { name: "iPad", image: "/images/iPad/ipad_473e5c831_2x.png" },
  {
    name: "iPad mini ",
    image: "/images/iPad/ipad_mini_f62883aa9_2x.png",
  },
  {
    name: "Compare",
    image: "/images/iPad/compare_51cfd77c0_2x.png",
  },
  {
    name: "Apple Pencil",
    image: "/images/iPad/apple_pencil_78eb83b97_2x.png",
  },
  {
    name: "Keyboards",
    image: "/images/iPad/keyboards_f5cef0366_2x.png",
  },
  {
    name: "Accessories",
    image: "/images/iPad/accessories_bf015339a_2x.png",
  },
  {
    name: "iPadOS 27",
    image: "/images/iPad/ipados_588cf979c_2x.png",
  },
  {
    name: "Shop iPad",
    image: "/images/iPad/shop_ipad_04978bb75_2x.png",
  },
];

// Explore lineup products
const lineupProducts = [
  {
    id: 1,
    slug: "ipad-pro",
    category: "iPad Pro",
    image: "/images/iPad/ipad_pro_4728732b6_2x.png",
    name: "iPad Pro",
    description:
      "The ultimate iPad experience with the most advanced technology.",
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
    slug: "ipad-air",
    category: "Laptops",
    image: "/images/iPad/ipad_air_fc8e6de30_2x.png",
    name: "iPad Air",
    description: "Serious performance in a thin and light design.",
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
    slug: "ipad",
    category: "Laptops",
    image: "/images/iPad/ipad_mini_7a6b96b66_2x.png",
    name: "iPad",
    description:
      "The colorful, all‑screen iPad for the things you do every day.",
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
    slug: "ipad-mini",
    category: "Desktops",
    image: "/images/iPad/ipad_b5ff17629_2x.png",
    name: "iPad mini",
    description: "he full iPad experience in an ultraportable design.",
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
    titleSmall: "Apple Trade In",
    title: "Save on Mac with\neducation pricing.*",
    desc: "College students and educators can save through the Apple Store.",
    image: "/images/iPad/trade_in_4f412e91d_2x.jpg",
  },
  {
    titleSmall: "Education",
    title: "Meet your new Mac with\nPersonal Setup.",
    desc: "Get one-on-one help with data transfer, the latest features, and more.",
    image: "/images/iPad/education_0f3061d4d_2x.jpg",
  },
  {
    titleSmall: "Customize Your Mac",
    title: "Customize your Mac.",
    desc: "Choose your chip, memory, storage, even color.",
    image: "/images/iPad/setup_55d11fe77_2x.jpg",
  },
  {
    titleSmall: "Delivery & Pickup",
    title: "Delivery & Pickup",
    desc: "Choose your chip, memory, storage, even color.",
    image: "/images/iPad/deliver_9b8c5d64c_2x.jpg",
  },
  {
    titleSmall: "Engraving",
    title: "Get flexible delivery and\neasy pickup.",
    desc: "Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options.",
    image: "/images/iPad/customize_db0427324_2x.jpg",
  },
  {
    titleSmall: "Guided Shopping",
    title: "Get flexible delivery and\neasy pickup.",
    desc: "Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options.",
    image: "/images/iPad/customize_db0427324_2x.jpg",
  },

  {
    titleSmall: "Apple Store App",
    title: "Get flexible delivery and\neasy pickup.",
    desc: "Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options.",
    image: "/images/iPad/customize_db0427324_2x.jpg",
  },
];

const product = [
  {
    id: 1,
    titleSmall: "ApodOS + Apps",
    title: "Flexible windowing. A multitasker's delight.",
    image: "/images/iPad/fc_ipados_289b3f886_2x.jpg",
    textColor: "text-white",
  },
  {
    id: 2,
    titleSmall: "Apple Intelligence",
    title: "Effortlessly helpful every day.",
    image: "/images/iPad/fc_apple_intelligence_f8c73bc96_2x.jpg",
    textColor: "text-white",
  },
  {
    id: 3,
    titleSmall: "Productivity",
    title: "Easy to use. Easy to love.",
    image: "/images/iPad/fc_productivity_aaa953610_2x.jpg",
    textColor: "text-white",
  },
  {
    id: 4,
    titleSmall: "Creativity",
    title: "Together they \nwork wonders.",
    image: "/images/iPad/fc_creativity_02762ec5f_2x.jpg",
    textColor: "text-white",
  },
  {
    id: 5,
    titleSmall: "Learning",
    title: "Mac runs your\n favorite apps.",
    desc: "Choose your chip, memory, storage, even color.",
    image: "/images/iPad/fc_learning_04156319d_2x.jpg",
    textColor: "text-white",
  },
  {
    id: 6,
    titleSmall: "Entertainment",
    title: "Get flexible delivery and\neasy pickup.",
    image: "/images/iPad/fc_entertainment_61254e461_2x.jpg",
    textColor: "text-white",
  },
  {
    id: 7,
    titleSmall: "Apple Pencil",
    title: "Get flexible delivery and\neasy pickup.",
    image: "/images/iPad/fc_pencil_60e914513_2x.jpg",
    textColor: "text-white",
  },
];

// BigCard
const bigCards = [
  {
    id: 1,
    title: "Apple Pencil",
    description:
      "Dream it up. Jot it down.",
    image: "/images/iPad/pencil_afee11a20_2x.png",
    subtitle: "Learn more >",
  },
  {
    id: 2,
    title: "Keyboards for iPad.",
    description: "Type it out. Take it with you.",
    image: "/images/iPad/keyboard_d02dc03ac_2x.png",
    subtitle: "Learn more >",
  },
];

const appleFeatures = [
  {
    id: 1,
    title: "iPad and iPhone",
    description:
      "iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations, and more. You can also pick up wherever you left off with Handoff.",
    image: "/images/iPad/ipad_iphone_632147d37_2x.jpg",
  },
  {
    id: 2,
    title: "iPad and Mac",
    description:
      "iPad and Mac are designed to work together to form the ultimate creative setup. Sketch on your iPad and have it appear instantly on your Mac with Sidecar. Then use your iPad for drawing or editing with Apple Pencil or as a second display. Extend your workflow to new places, and when you return to your desk, Universal Control allows you to use one mouse or trackpad seamlessly across both devices.",
    image: "/images/iPad/ipad_mac_97f267217_2x.jpg",
  },
  {
    id: 3,
    title: "iPad and Apple Watch",
    description:
      "Unlock your iPad automaticallyiPad is a great way to optimize your workouts while tracking your progress on Apple Watch. See personal metrics from Apple Watch integrated on the screen of your iPad in real time. The sensors in Apple Watch combine with advanced algorithms to provide data that keeps you motivated. And see it all come together in the Health app on iPad. with Apple Watch. Approve passwords and payments instantly and enjoy seamless continuity across your devices.",
    image: "/images/iPad/ipad_watch_8e111cb6e_2x.jpg",
  },
];
function iPad() {
  const navigate = useNavigate();
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
    <div className="flex flex-col items-center w-full min-h-screen overflow-x-hidden py-2 bg-[#f5f5f7]">
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
                <h1 className="text-[80px] font-bold text-[#1d1d1f]">iPad</h1>
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
            <h2 className="text-[48px] font-semibold text-[#1d1d1f] ">
              Explore the lineup.
            </h2>

            {/* Tabs */}

           

            {/* Products */}
            
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
                    <button
                      onClick={() => navigate(`/product/${item.slug}`)}
                      className="bg-[#0071e3] text-white px-8 py-3 rounded-full"
                    >
                      Learn more
                    </button>

                    <button className="text-[#0071e3]">Buy ›</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mb-6 flex justify-center gap-3 pt-10">
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
          </div>

          {/* Products */}
          <section className="bg-[#f5f5f7] w-full px-32">
            {/* Header */}
            <div className="max-w-[1440px] flex justify-between items-end mb-10 pt-10">
              <h2 className="text-[48px] font-bold text-[#1d1d1f] leading-tight">
                Why Apple is the best
                <br />
                place to buy iPad.
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
              className="flex gap-4 overflow-x-auto pr-10 scroll-smooth no-scrollbar "
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
          </section>

          <section className="bg-white w-full">
            {/* Header */}
            <div className="max-w-[1440px] flex  px-32 py-12">
              <h2 className="text-[48px] font-bold text-[#1d1d1f]">
                Get to Know iPad.
              </h2>
            </div>

            {/* Cards */}

            <div
              ref={scrollRef}
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

          {/* BigCard */}
          <div className="h-auto bg-[#f5f5f7] pt-12 px-32">
            <p className="text-[#1d1d1f] text-[48px] font-semibold ">
              iPad Essentials.
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
                <h2 className="text-[48px] font-semibold text-[#1d1d1f] tracking-[-0.02em] ">
                  Significant others.
                </h2>

                <button className="text-[#0066cc] text-[17px] hover:underline ">
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

      <div className="w-full bg-[#fafafc]">
        <div className="max-w-[980px] mx-auto flex gap-24 pt-16 pb-50">
          {/* Column 1 */}
          <div className="min-w-[190px]">
            <p className="text-[12px] text-[#6e6e73] mb-3">Explore iPad</p>

            <ul className="space-y-[6px]">
              {[
                "Explore All iPad",
                "iPad Pro",
                "iPad Air",
                "iPad",
                "iPad mini",
                "Apple Pencil",
                "Keyboards",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[36px] leading-[1.15] font-semibold text-[#1d1d1f] cursor-pointer hover:text-black"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              <p className="text-[17px] font-medium text-[#1d1d1f] cursor-pointer">
                Compare iPad
              </p>

             
            </div>
          </div>

          {/* Column 2 */}
          <div className="min-w-[120px]">
            <p className="text-[12px] text-[#6e6e73] mb-3">Shop Mac</p>

            <ul className="space-y-3">
              {[
                "Shop iPad",
                "iPad Accessories",
                "Apple Trade In",
                "Financing",
                "Personal Setup",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[17px] font-medium text-[#1d1d1f] cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="min-w-[200px]">
            <p className="text-[12px] text-[#6e6e73] mb-3">More from Mac</p>

            <ul className="space-y-3">
              {[
                "iPad Support",
                "AppleCare",
                "iPadOS 27 Preview",
                "Apple Intelligence and Siri",
                "Apps by Apple",
                "Apple Creator Studio",
                "Better with iPhone",
                "iCloud+",
                "Education",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[17px] font-medium text-[#1d1d1f] cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default iPad;
