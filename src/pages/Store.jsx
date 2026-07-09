import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BigProductCard from "../components/BigProductCard";
import SmallProductCard from "../components/SmallProductCard";
import Footer from "../components/Footer"

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { name: "Mac", image: "/images/Store/store-card-13-mac-nav-202603.png" },
  {
    name: "iPhone",
    image: "/images/Store/store-card-13-iphone-nav-202509.png",
  },
  { name: "iPad", image: "/images/Store/store-card-13-ipad-nav-202405.png" },
  {
    name: "Apple Watch",
    image: "/images/Store/store-card-13-watch-nav-202509.png",
  },
  {
    name: "AirPods",
    image: "/images/Store/store-card-13-airpods-nav-202509.png",
  },
  {
    name: "Accessories",
    image: "/images/Store/store-card-13-accessories-nav-202603.png",
  },
  {
    name: "Apple TV 4K",
    image: "/images/Store/store-card-13-appletv-nav-202210.png",
  },
  {
    name: "HomePod",
    image: "/images/Store/store-card-13-homepod-nav-202301.png",
  },
  {
    name: "Apple Vision Pro",
    image: "/images/Store/store-card-13-vision-pro-nav-202401.png",
  },
  {
    name: "AirTag",
    image: "/images/Store/store-card-13-airtags-nav-202601.png",
  },
  {
    name: "Apple Gift Card",
    image:
      "/images/Store/store-card-13-holiday-giftcards-asit-agc-nav-202111.png",
  },
];

// ProductCard
const products = [
  {
    badge: "New",
    title: "iPhone 16 Pro",
    description: "Hello, Apple Intelligence.",
    price: "From $999",
    image: "/images/Store/store-card-40-iphone-17-pro-202509_FMT_WHH.jpeg",
  },
  {
    badge: "New",
    title: "MacBook Air",
    description: "Supercharged by M4.",
    price: "From $999",
    image: "/images/Store/store-card-40-macbook-neo-202603_FMT_WHH.jpeg",
  },
  {
    badge: "New",
    title: "iPhone 17e",
    description: "Feature stacked. Value packed.",
    price: "From $999",
    image: "/images/Store/store-card-40-iphone-17e-202603_FMT_WHH.jpeg",
  },
  {
    badge: "New",
    title: "MacBook Air",
    description: "Supercharged by M4.",
    price: "From $999",
    image: "/images/Store/store-card-40-macbook-neo-202603_FMT_WHH.jpeg",
  },
  {
    badge: "New",
    title: "MacBook Air",
    description: "Supercharged by M4.",
    price: "From $999",
    image: "/images/Store/store-card-40-macbook-neo-202603_FMT_WHH.jpeg",
  },
  {
    badge: "New",
    title: "iPhone 16",
    description: "Supercharged by M4.",
    price: "From $999",
    image: "/images/Store/store-card-40-macbook-neo-202603_FMT_WHH.jpeg",
  },
  {
    badge: "New",
    title: "iPhone 16 Pro",
    description: "Supercharged by M4.",
    price: "From $999",
    image: "/images/Store/store-card-40-macbook-neo-202603_FMT_WHH.jpeg",
  },
  {
    badge: "New",
    title: "MacBook Air",
    description: "Supercharged by M4.",
    price: "From $999",
    image: "/images/Store/store-card-40-macbook-neo-202603_FMT_WHH.jpeg",
  },
  {
    badge: "New",
    title: "iPhone",
    description: "Supercharged by M4.",
    price: "From $999",
    image: "/images/Store/store-card-40-iphone-17e-202603_FMT_WHH.jpeg",
  },
  {
    badge: "New",
    title: "Watch Band",
    description: "Supercharged by M4.",
    price: "From $9",
    image: "/images/Store/store-card-40-watch-bands-202605_FMT_WHH.jpeg",
  },
];

// Big ProductCard
const BigProduct = [
  {
    id: 1,
    badge: "APPLE SPECIALIST",
    title: "Shop one on one with a Specialist. Online or in a store.",
    description: "",
    image: "/images/Store/store-card-50-specialist-help-202512_FMT_WHH.jpeg",
  },
  {
    id: 2,
    badge: "",
    title: "Shop with a Specialist over a video.",
    description: "Get expert help choosing the right product for you.",
    image: "/images/Store/store-card-50-specialist-video-202601_FMT_WHH.jpeg",
  },
  {
    id: 3,
    badge: "Today at Apple",
    title: "Shop with a Specialist over a video.",
    description: "Get expert help choosing the right product for you.",
    image: "/images/Store/store-card-50-taa-ai-202604_FMT_WHH.jpeg",
  },
  {
    id: 4,
    badge: "",
    title: "Shop with a Specialist over a video.",
    description: "Get expert help choosing the right product for you.",
    image: "/images/Store/store-card-50-taa-202604_FMT_WHH.jpeg",
  },
  {
    id: 5,
    badge: "",
    title: "Shop with a Specialist over a video.",
    description: "Get expert help choosing the right product for you.",
    image: "/images/Store/store-card-50-specialist-video-202601_FMT_WHH.jpeg",
  },
  {
    id: 6,
    badge: "",
    title: "Shop with a Specialist over a video.",
    description: "Get expert help choosing the right product for you.",
    image: "/images/Store/store-card-50-specialist-video-202601_FMT_WHH.jpeg",
  },
];

const Store = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f5f7] mx-auto px-[80px] pt-[48px]">
        <div className="w-full h-[58px] flex items-center justify-center border-b border-gray-100 bg-white text-center ">
          <p className="text-[14px] text-[#1d1d1f]">
            Now you can buy Apple Watch with Education savings.
          </p>
          <a href="#" className="ml-1 text-[14px] text-[#0066cc]">
            Learn more.
          </a>
        </div>

        <main className="flex w-full flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8  pl-[140px]">
          <div className="flex h-[228px] w-full items-center  px-8 lg:px-12">
            <div className=" ">
              <h1 className="text-[80px] font-bold text-[#1d1d1f]">Store</h1>
            </div>
            <div className="ml-auto max-w-[520px] text-right">
              <p className="text-[28px] font-semibold text-[#1d1d1f]">
                The best way to buy the <br></br> products you love.
              </p>
              <p className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0066cc] hover:underline">
                Connect with a Specialist
                <img
                  src="/images/Store/arrow_outward.png"
                  alt="Arrow"
                  className="h-4 w-4"
                />
              </p>
              <br></br>
              <a
                href="#"
                className=" inline-flex items-center gap-2 text-[14px] font-semibold text-[#0066cc] hover:underline"
              >
                Find an Apple Store
                <img
                  src="/images/Store/arrow_outward.png"
                  alt="Arrow"
                  className="h-4 w-4"
                />
              </a>
            </div>
          </div>

          {/* Categories products */}
          <div className="bg-[#f5f5f7] px-6 py-8">
            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-[#1d1d1f] sm:gap-6">
              {categories.map((item) => (
                <div
                  key={item.name}
                  className="group flex h-[148px] w-[136px] flex-col items-center justify-center gap-2 "
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
          {/* Product cards */}
          <div className="bg-[#f5f5f7] px-6 py-8">
            <div className="mb-6 flex items-center justify-between ">
              <div className="flex items-baseline gap-2 mt-3">
                <p className="text-[28px] font-semibold text-[#1d1d1f]">
                  The latest.
                </p>
                <h2 className="text-[28px] font-semibold text-[#6e6e73]">
                  Take a look at what’s new, right now.
                </h2>
              </div>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={20}
              slidesPerView={"auto"}
              style={{
                "--swiper-navigation-color": "#6e6e73",
              }}
            >
              {products.map((item) => (
                <SwiperSlide key={item.title} className="!w-[400px]">
                  <ProductCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Big ProductCard */}
          <div className="w-full h-[579px]  flex flex-col justify-between">
            <div className="flex items-baseline gap-2">
              <p className="text-[28px] font-semibold text-[#1d1d1f]">
                Help is here.
              </p>

              <h2 className="text-[28px] font-semibold text-[#6e6e73]">
                Whenever or however you need it.
              </h2>
            </div>

            <div className="flex gap-5">
              {BigProduct.map((item) => (
                <BigProductCard key={item.id} {...item} />
              ))}
            </div>
          </div>

          <div className="w-full overflow-x-auto scrollbar-hide">
            {/* Heading */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <p className="text-[28px] font-semibold text-[#1d1d1f]">
                  The latest.
                </p>

                <h2 className="text-[28px] font-semibold text-[#6e6e73]">
                  Take a look at what’s new, right now.
                </h2>
              </div>
            </div>

            {/* Cards */}
            <div className="flex gap-5 w-max pb-4">
              {/* Card 1 */}
              <div className="w-[303px] h-[228px] shrink-0 bg-white rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-7 flex flex-col">
                <img
                  src="/images/Store/desktop_icon.png"
                  className="w-9 h-9 mb-5"
                />

                <p className="text-[24px] leading-[1.2] font-semibold">
                  <span className="text-[#007AFF]">
                    Trade in your current device.
                  </span>{" "}
                  <span className="text-[#1D1D1F]">
                    Get credit toward a new one.
                  </span>
                </p>
              </div>

              {/* Card 2 */}
              <div className="w-[303px] h-[228px] shrink-0 bg-white rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-7 flex flex-col">
                <img
                  src="/images/Store/creditcard_icon.png"
                  className="w-9 h-9 mb-5"
                />

                <p className="text-[24px] leading-[1.2] font-semibold">
                  <span className="text-[#1d1d1f]">Pay in full or</span>{" "}
                  <span className="text-[#008009]">pay over time.</span>
                  <span className="text-[#1d1d1f]">Your choice.</span>{" "}
                </p>
              </div>

              {/* Card 3 */}
              <div className="w-[303px] h-[228px] shrink-0 bg-white rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-7 flex flex-col">
                <img
                  src="/images/Store/add_reaction.png"
                  className="w-9 h-9 mb-5"
                />

                <p className="text-[24px] leading-[1.2] font-semibold">
                  <span className="text-[#1d1d1f]">Make them yours.</span>{" "}
                  <span className="text-[#a339ff]">
                    Engrave a mix of emoji, names, and numbersfor free.
                  </span>
                </p>
              </div>

              {/* Card 4 */}

              <div className="w-[303px] h-[228px] shrink-0 bg-white rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-7 flex flex-col">
                <img
                  src="/images/Store/local_shipping.png"
                  className="w-9 h-9 mb-5"
                />

                <p className="text-[24px] leading-[1.2] font-semibold">
                  <span className="text-[#1D1D1F]">Enjoy,</span>
                  <span className="text-[#008009]">
                    two-hours delivery
                  </span>{" "}
                  <span className="text-[#1D1D1F]">from an Apple store,</span>
                  <span className="text-[#008009]">free delivery,</span>{" "}
                  <span className="text-[#1D1D1F]">or,</span>
                  <span className="text-[#008009]">easy pick up.</span>{" "}
                </p>
              </div>
              {/* Card 5 */}

              <div className="w-[303px] h-[228px] shrink-0 bg-white rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-7 flex flex-col">
                <img
                  src="/images/Store/desktop_icon.png"
                  className="w-9 h-9 mb-5"
                />

                <p className="text-[24px] leading-[1.2] font-semibold">
                  <span className="text-[#007AFF]">
                    Trade in your current device.
                  </span>{" "}
                  <span className="text-[#1D1D1F]">
                    Get credit toward a new one.
                  </span>
                </p>
              </div>
              {/* Card 6 */}
              <div className="w-[303px] h-[228px] shrink-0 bg-white rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-7 flex flex-col">
                <img
                  src="/images/Store/enterprise_icon.png"
                  className="w-9 h-9 mb-5"
                />

                <p className="text-[24px] leading-[1.2] font-semibold">
                  <span className="text-[#007AFF]">
                    Trade in your current device.
                  </span>{" "}
                  <span className="text-[#1D1D1F]">
                    Get credit toward a new one.
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* small product card */}
          <div className="w-full h-[579px] bg-red-200">
            <div className="flex gap-2">
              <p className="text-[28px] font-semibold text-[#1d1d1f]">
                Accessories.
              </p>
              <p className="text-[28px] font-semibold text-[#6e6e73]">
                {" "}
                Essentials that pair perfectly with your favorite devices.
              </p>
            </div>
            <div className="flex bg-green-100 pt-9.5 gap-5">
              <SmallProductCard
                image="/images/Store/MHW04.jpeg"
                badge="New"
                title="iPhone 17 Pro Silicone Case with MagSafe - Bright Guava"
                price="$49.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/MHYX4.jpeg"
                badge="New"
                title="Crossbody Strap - Bright Guava"
                price="$59.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/store-card-13-airpods-nav-202509.png"
                badge="New"
                title="HomePod mini"
                price="$19.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/store-card-13-airtags-nav-202601.png"
                badge="New"
                title="HomePod mini"
                price="$19.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/"
                badge="New"
                title="HomePod mini"
                price="$19.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/MHYX4.jpeg"
                badge="New"
                title="HomePod mini"
                price="$19.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/MHYX4.jpeg"
                badge="New"
                title="HomePod mini"
                price="$19.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/MHYX4.jpeg"
                badge="New"
                title="HomePod mini"
                price="$19.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/MHYX4.jpeg"
                badge="New"
                title="HomePod mini"
                price="$19.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
            </div>
          </div>
          {/* small product card */}
          <div className="w-full h-[579px] bg-red-200">
            <div className="flex gap-2">
              <p className="text-[28px] font-semibold text-[#1d1d1f]">
                Accessories.
              </p>
              <p className="text-[28px] font-semibold text-[#6e6e73]">
                {" "}
                Essentials that pair perfectly with your favorite devices.
              </p>
            </div>
            <div className="flex bg-green-100 pt-9.5 gap-5">
              <SmallProductCard
                image="/images/Store/MHW04.jpeg"
                badge="New"
                title="iPhone 17 Pro Silicone Case with MagSafe - Bright Guava"
                price="$49.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/MHYX4.jpeg"
                badge="New"
                title="Crossbody Strap - Bright Guava"
                price="$59.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/store-card-13-airpods-nav-202509.png"
                badge="New"
                title="HomePod mini"
                price="$19.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/store-card-13-airtags-nav-202601.png"
                badge="New"
                title="HomePod mini"
                price="$19.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/"
                badge="New"
                title="HomePod mini"
                price="$19.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/MHYX4.jpeg"
                badge="New"
                title="HomePod mini"
                price="$19.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/MHYX4.jpeg"
                badge="New"
                title="HomePod mini"
                price="$19.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/MHYX4.jpeg"
                badge="New"
                title="HomePod mini"
                price="$19.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
              <SmallProductCard
                image="/images/Store/MHYX4.jpeg"
                badge="New"
                title="HomePod mini"
                price="$19.00"
                variants={[
                  "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
                  "/images/Store/homepod-mini-select-white-202110_SW_COLOR.png",
                  "/images/Store/homepod-select-midnight-202210_SW_COLOR.png",
                ]}
              />
            </div>
          </div>
          {/* Big ProductCard */}
          <div className="w-full h-[579px]  flex flex-col justify-between">
            <div className="flex items-baseline gap-2">
              <p className="text-[28px] font-semibold text-[#1d1d1f]">
                An Appple Experience.
              </p>

              <h2 className="text-[28px] font-semibold text-[#6e6e73]">
                Do even more with Apple products and services.
              </h2>
            </div>

            <div className="flex gap-5">
              {BigProduct.map((item) => (
                <BigProductCard key={item.id} {...item} />
              ))}
            </div>
          </div>
          {/* Product cards */}
          <div className="bg-[#f5f5f7] px-6 py-8">
            <div className="mb-6 flex items-center justify-between ">
              <div className="flex items-baseline gap-2 mt-3">
                <p className="text-[28px] font-semibold text-[#1d1d1f]">
                  The latest.
                </p>
                <h2 className="text-[28px] font-semibold text-[#6e6e73]">
                  Take a look at what’s new, right now.
                </h2>
              </div>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={20}
              slidesPerView={"auto"}
              style={{
                "--swiper-navigation-color": "#6e6e73",
              }}
            >
              {products.map((item) => (
                <SwiperSlide key={item.title} className="!w-[400px]">
                  <ProductCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Quick Links */}
          <div className="w-full">
            <p className="text-[28px] text-[#1d1d1f] font-semibold">
              Quick Links
            </p>
            <div className="flex gap-4">
              <button
                  className="
                    mt-4
                    h-[38px]
                    px-8
                    rounded-full
                    border
                    border-[#1d1d1f]
                    text-[14px]
                    font-medium
                    text-[#1d1d1f]
                    whitespace-nowrap
                    transition-all
                    duration-200
                    hover:bg-[#1d1d1f]
                    hover:text-white
                  "
                >
                  Find a Store
              </button>
              <button
                  className="
                    mt-4
                    h-[38px]
                    px-8
                    rounded-full
                    border
                    border-[#1d1d1f]
                    text-[14px]
                    font-medium
                    text-[#1d1d1f]
                    whitespace-nowrap
                    transition-all
                    duration-200
                    hover:bg-[#1d1d1f]
                    hover:text-white
                  "
                >
                  Order Status
              </button>
              <button
                  className="
                    mt-4
                    h-[38px]
                    px-8
                    rounded-full
                    border
                    border-[#1d1d1f]
                    text-[14px]
                    font-medium
                    text-[#1d1d1f]
                    whitespace-nowrap
                    transition-all
                    duration-200
                    hover:bg-[#1d1d1f]
                    hover:text-white
                  "
                >
                  Shopping Helps
              </button>
              <button
                  className="
                    mt-4
                    h-[38px]
                    px-8
                    rounded-full
                    border
                    border-[#1d1d1f]
                    text-[14px]
                    font-medium
                    text-[#1d1d1f]
                    whitespace-nowrap
                    transition-all
                    duration-200
                    hover:bg-[#1d1d1f]
                    hover:text-white
                  "
                >
                  Returns
              </button>
              <button
                  className="
                    mt-4
                    h-[38px]
                    px-8
                    rounded-full
                    border
                    border-[#1d1d1f]
                    text-[14px]
                    font-medium
                    text-[#1d1d1f]
                    whitespace-nowrap
                    transition-all
                    duration-200
                    hover:bg-[#1d1d1f]
                    hover:text-white
                  "
                >
                 Your Saves
              </button>
            </div>
          </div>
          {/* Text on Footer */}
          <Footer/>
        </main>
      </div>
    </>
  );
};

export default Store;
