import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BigProductCard from "../components/BigProductCard";
import SmallProductCard from "../components/SmallProductCard";
import Footer from "../components/Footer";
import ProductCard1 from "../components/ProductCard1.jsx"
import { useRef } from "react";

import { FreeMode } from "swiper/modules";
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
    badge: "",
    title: "iPhone 16 Pro",
    description: "Hello, Apple Intelligence.",
    price: "From $399 0r $33.25/mo.",
    image: "/images/Store/store-card-40-iphone-17-pro-202509_FMT_WHH.jpeg",
    textColor: "text-white",
  },
  {
    badge: "New",
    title: "MacBook Neo",
    description: "Supercharged by M4.",
    price: "From $399 0r $33.25/mo.",
    image: "/images/Store/store-card-40-macbook-neo-202603_FMT_WHH.jpeg",
  },
  {
    badge: "",
    title: "iPhone 17e",
    description: "Feature stacked. Value packed.",
    price: "From $399 0r $33.25/mo.",
    image: "/images/Store/store-card-40-iphone-17e-202603_FMT_WHH.jpeg",
  },
  {
    badge: "FREE ENGRAVING",
    title: "AirPods Max 2",
    description: "Supercharged by M4.",
    price: "From $399 0r $33.25/mo.",
    image: "/images/Store/store-card-40-airpods-max-202409_GEO_US_FMT_WHH.jpeg",
  },
  {
    badge: "",
    title: "MacBook Air",
    description: "Supercharged by M4.",
    price: "From $399 0r $33.25/mo.",
    image: "/images/Store/store-card-40-macbook-pro-202510.jpeg",
    textColor: "text-white",
  },
  {
    badge: "",
    title: "MacBook Pro",
    description: "Supercharged by M4.",
    price: "From $399 0r $33.25/mo.",
    image: "/images/Store/store-card-40-macbook-air-202603_FMT_WHH.jpeg",
  },
  {
    badge: "",
    title: "iPad Air",
    description: "Supercharged by M4.",
    price: "From $399 0r $33.25/mo.9",
    image: "/images/Store/store-card-40-ipad-air-202603_FMT_WHH.jpeg",
  },
  {
    badge: "",
    title: "Apple Watch Series 11",
    description: "The ultimate way to watch your health.",
    price: "From $399 0r $33.25/mo.",
    image: "/images/Store/store-card-40-watch-s11-202509_FMT_WHH.jpeg",
  },
  {
    badge: "",
    title: "iPhone",
    description: "Supercharged by M4.",
    price: "From $399 0r $33.25/mo.",
    image: "/images/Store/store-card-40-iphone-17-202509_FMT_WHH.jpeg",
  },
  {
    badge: "",
    title: "iPhone",
    description: "Supercharged by M4.",
    price: "From $399 0r $33.25/mo.",
    image: "/images/Store/store-card-40-iphone-air-202509_FMT_WHH.jpeg",
  },
  {
    badge: "",
    title: "Studio Display",
    description: "A sight to be bold.",
    price: "From $399 0r $33.25/mo.",
    image: "/images/Store/store-card-40-studio-display-202603_FMT_WHH.jpeg",
  },
  {
    badge: "",
    title: "Studio Display XDR",
    description: "Supercharged by M4.",
    price: "From $399 0r $33.25/mo.",
    image: "/images/Store/store-card-40-pro-display-202603_FMT_WHH.jpeg",
    textColor: "text-white",
  },
  {
    badge: "",
    title: "Apple Watch SE 3",
    description: "Supercharged by M4.",
    price: "From $399 0r $33.25/mo.",
    image: "/images/Store/store-card-40-watch-se-202603_FMT_WHH.jpeg",
  },
];


const products1 = [
  {
    badge: "CARRIER DEAL AT APPLE",
    title: "Get UP to $800-$1100 in credit on a new iPhone after trade in.",
    description: "Explore deals that accept eligibles trade-in devices in any condition.",
    price: "",
    image: "/images/Store/iphone-card-40-carriertrade-202409_FMT_WHH.jpeg",
    textColor: "text-[#1d1d1f]",
  },
  {
    badge: "Education",
    title: "Save On a new Mac, iPdad, and Apple Watch with Education pricing.",
    description: "",
    price: "",
    image: "/images/Store/store-card-40-education-202605_FMT_WHH.jpeg",
  },
  {
    badge: "CERTIFIED REBURISHED",
    title: "Shop reburished Apple product backend by one year warranty.",
    description: "",
    price: "",
    image: "/images/Store/store-card-40-refurb-202408_FMT_WHH.jpeg",
  },
  {
    badge: "SMALL BUSSINESS",
    title: "Simple solution for all the ways you work.",
    description: "",
    price: "",
    image: "/images/Store/store-card-40-business-202506_FMT_WHH.jpeg",
     textColor: "text-white",
  },
  {
    badge: "GOVERNMENT",
    title: "Special pricing is available for state, local, and federal agencies.",
    description: "",
    price: "",
    image: "/images/Store/store-card-40-gov-202503_FMT_WHH.jpeg",
     textColor: "text-[#1d1d1f]",
  },
  {
    badge: "VETERANS AND MILITARY",
    title: "MacBook Pro",
    description: "Supercharged by M4.",
    price: "From $399 0r $33.25/mo.",
    image: "/images/Store/store-card-40-veteran-202509_FMT_WHH.jpeg",
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
    badge: "Today at Apple",
    title: "Shop with a Specialist over a video.",
    description: "Get expert help choosing the right product for you.",
    image: "/images/Store/store-card-50-taa-202604_FMT_WHH.jpeg",
  },
  {
    id: 5,
    badge: "Personal Setup",
    title: "Shop with a Specialist over a video.",
    description: "Get expert help choosing the right product for you.",
    image:
      "/images/Store/store-card-50-personal-setup-202408_GEO_US_FMT_WHH.jpeg",
  },
  {
    id: 6,
    badge: "",
    title: "Shop with a Specialist over a video.",
    description: "Get expert help choosing the right product for you.",
    image: "/images/Store/store-card-50-genius-202603_FMT_WHH.jpeg",
  },
];

const BigProduct2 = [
  {
    id: 1,
    badge: "",
    title: "Apple Intelligence.\n Create, communicate, and get\n things done effortlessly.",
    description: "",
    image: "/images/Store/store-card-50-apple-intelligence-202510_FMT_WHH.jpeg",
  },
  {
    id: 2,
    badge: "Today at Apple",
    title: "Shop with a Specialist over a video.",
    description: "Get expert help choosing the right product for you.",
    image: "/images/Store/store-card-50-apple-camp-202606_FMT_WHH.png",
  },
  {
    id: 3,
    badge: "Contituity",
    title: "Shop with a Specialist over a video.",
    description: "Get expert help choosing the right product for you.",
    image: "/images/Store/store-card-50-continuity-202510_GEO_US_FMT_WHH.jpeg",
  },
  {
    id: 4,
    badge: "APPLECARE",
    title: "Shop with a Specialist over a video.",
    description: "Get expert help choosing the right product for you.",
    image: "/images/Store/store-card-50-applecare-202509_GEO_US_FMT_WHH.jpeg",
  },
  {
    id: 5,
    badge: "Apple Store App",
    title: "Shop with a Specialist over a video.",
    description: "Get expert help choosing the right product for you.",
    image:
      "/images/Store/store-card-40-holiday-gifting-202512_FMT_WHH.jpeg",
  },
  {
    id: 6,
    badge: "",
    title: "Put your bow on it.",
    description: "Get expert help choosing the right product for you.",
    image: "/images/Store/store-card-50-subscriptions-202605_FMT_WHH.jpeg",
  },
  {
    id: 7,
    badge: "",
    title: "Put your bow on it.",
    description: "Get expert help choosing the right product for you.",
    image: "/images/Store/store-card-50-applepay-202509_GEO_US_FMT_WHH.jpeg",
  },
  {
    id: 8,
    badge: "HOME",
    title: "See how one app can\n control your entire home.",
    description: "Get expert help choosing the right product for you.",
    image: "/images/Store/store-card-50-homekit-202405_GEO_US_FMT_WHH.jpeg",
  },
];

const smallProducts = [
  {
    id: 1,
    image: "/images/Store/MHW04.jpeg",
    badge: "New",
    title: "iPhone 17 Pro Silicone Case with MagSafe - Bright Guava",
    price: "$49.00",
    variants: [
      "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
      "/images/Store/homepod-select-white-202210_SW_COLOR.png",
      "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
    ],
  },
  {
    id: 2,
    image: "/images/Store/MHYX4.jpeg",
    badge: "New",
    title: "Crossbody Strap - Bright Guava",
    price: "$59.00",
    variants: [
       "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
      "/images/Store/homepod-select-white-202210_SW_COLOR.png",
      "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
    ],
  },
  {
    id: 3,
    image: "/images/Store/MGD74.jpeg",
    badge: "New",
    title: "MagSafe Charger (1m)",
    price: "$59.00",
    variants: [
      "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
    ],
  },
  {
    id: 4,
    image: "/images/Store/MHWC4.jpeg",
    badge: "New",
    title: "iphone 17e clear case with Magsafe",
    price: "$59.00",
    variants: [
     
    ],
  },
  {
    id: 5,
    image: "/images/Store/MHYK4ref.jpeg",
    badge: "New",
    title: "46mm Clemetine Sport Brand",
    price: "$59.00",
    variants: [
       "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
    ],
  },
  {
    id: 6,
    image: "/images/Store/MGYY4.jpeg",
    badge: "New",
    title: "Magic Keyboards",
    price: "$59.00",
    variants: [
      "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
    ],
  },
  {
    id: 7,
    image: "/images/Store/MGPG4.jpeg",
    badge: "New",
    title: "iPhone Mac Air Safe Battery",
    price: "$59.00",
    variants: [
     
    ],
  },
  {
    id: 8,
    image: "/images/Store/MH044.jpeg",
    badge: "New",
    title: "iPhone Air Bumper- Tan",
    price: "$59.00",
    variants: [
      "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
     
    ],
  },
  {
    id: 9,
    image: "/images/Store/HSFN2.jpeg",
    badge: "New",
    title: "Mobile Check Case For iPhone Air",
    price: "$59.00",
    variants: [
      "/images/Store/homepod-mini-select-yellow-202110_SW_COLOR.png",

    ],
  },
  {
    id: 10,
    image: "/images/Store/HSFD2.jpeg",
    badge: "New",
    title: "Hershel Cloud Sling for iPhone",
    price: "$59.00",
    variants: [
      "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
      "/images/Store/HSFC2_SW_COLOR.png",
    ],
  },
  {
    id: 11,
    image: "/images/Store/MGKN4.jpeg",
    badge: "New",
    title: "44W USB-C Adapter",
    price: "$59.00",
    variants: [
      
    ],
  },
  {
    id: 12,
    image: "/images/Store/MWVV3.jpeg",
    badge: "New",
    title: "20W USB-C Power Adapter",
    price: "$59.00",
    variants: [
      
    ],
  },
  {
    id: 13,
    image: "/images/Store/store-card-40-all-accessories-202603_FMT_WHH.jpeg",
    badge: "...",
    title: "Explore Accessories",
    price: "",
    variants: [
    ],
  },
];

const smallProducts1 = [
  {
    id: 1,
    image: "/images/Store/airpods-max-select-202409-midnight_FMT_WHH.jpeg",
    badge: "Free Engraving",
    title: "AirPods Max 2",
    price: "$549.00",
    variants: [
      "/images/Store/airpods-max-select-202409-blue_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-midnight_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-orange_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-purple_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-starlight_SW_COLOR.png",
      "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
    ],
  },
  {
    id: 2,
    image: "/images/Store/airpods-4-anc-select-202409_FMT_WHH.jpeg",
    badge: "Free Engraving",
    title: "AirPods Pro 3",
    price: "$249.00",
    variants: [
      "/images/Store/airpods-max-select-202409-blue_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-midnight_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-orange_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-purple_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-starlight_SW_COLOR.png",
      "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
    ],
  },
  {
    id: 3,
    image: "/images/Store/airpods-pro-3-hero-select-202509_FMT_WHH.jpeg",
    badge: "New",
    title: "MagSafe Charger (1m)",
    price: "$179.00",
    variants: [
      "/images/Store/homepod-mini-select-blue-202110_SW_COLOR.png",
      "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
    ],
  },
  {
    id: 4,
    image: "/images/Store/MX743.jpeg",
    badge: "New",
    title: "Powerbeats Pro 2 — High-Performance Earbuds —",
    price: "$249.00",
    variants: [
     "/images/Store/airpods-max-select-202409-blue_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-midnight_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-orange_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-purple_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-starlight_SW_COLOR.png",
      "/images/Store/homepod-mini-select-orange-202110_SW_COLOR.png",
    
    ],
  },
  {
    id: 5,
    image: "/images/Store/homepod-select-midnight-202210_FMT_WHH.jpeg",
    badge: "New",
    title: "HomePod - Midnight",
    price: "$349.00",
    variants: [
      "/images/Store/airpods-max-select-202409-blue_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-midnight_SW_COLOR.png",
      
    ],
  },
  {
    id: 6,
    image: "/images/Store/homepod-mini-select-orange-202110_FMT_WHH.jpeg",
    badge: "New",
    title: "HomePod mini - orange",
    price: "$129.00",
    variants: [
       "/images/Store/airpods-max-select-202409-blue_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-midnight_SW_COLOR.png",
       "/images/Store/airpods-max-select-202409-blue_SW_COLOR.png",
      "/images/Store/airpods-max-select-202409-midnight_SW_COLOR.png",
    ],
  },
  {
    id: 7,
    image: "/images/Store/MUW33.jpeg",
    badge: "New",
    title: "Beats Solo 4 - On-Ear Wireless",
    price: "$199.99",
    variants: [
     "/images/Store/MW463_SW_COLOR.png",
      "/images/Store/MUW43_SW_COLOR.png",
      "/images/Store/MWQW3_SW_COLOR.png",
    ],
  },
  {
    id: 8,
    image: "/images/Store/MWQW3.jpeg",
    badge: "New",
    title: "Beats Pill - Wireless",
    price: "$149.99",
    variants: [
      "/images/Store/MW463_SW_COLOR.png",
      "/images/Store/MUW43_SW_COLOR.png",
      "/images/Store/MWQW3_SW_COLOR.png",
     
    ],
  },
 
];

const Store = () => {
  

  return (
    <div className="flex flex-col items-center w-full min-h-screen overflow-x-hidden py-2">
      <Navbar />
      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#f5f5f7] mx-auto pt-12  ">
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

            <div className="px-5">
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView="auto"
                style={{
                  "--swiper-navigation-color": "#6e6e73",
                }}
              >
                {BigProduct.map((item) => (
                  <SwiperSlide key={item.id} className="!w-[480px]">
                    <BigProductCard {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
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
              <div className="w-[303px] h-[228px] shrink-0 bg-white rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-7 flex flex-col transition-transform duration-300 ease-out hover:scale-[1.01]">
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
              <div className="w-[303px] h-[228px] shrink-0 bg-white rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-7 flex flex-col transition-transform duration-300 ease-out hover:scale-[1.01]">
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
              <div className="w-[303px] h-[228px] shrink-0 bg-white rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-7 flex flex-col transition-transform duration-300 ease-out hover:scale-[1.01]">
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

              <div className="w-[303px] h-[228px] shrink-0 bg-white rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-7 flex flex-col transition-transform duration-300 ease-out hover:scale-[1.01]">
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

              <div className="w-[303px] h-[228px] shrink-0 bg-white rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-7 flex flex-col transition-transform duration-300 ease-out hover:scale-[1.01]">
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
              <div className="w-[303px] h-[228px] shrink-0 bg-white rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-7 flex flex-col transition-transform duration-300 ease-out hover:scale-[1.01]">
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
          <div className="w-full h-[579px]  ">
            <div className="flex gap-2">
              <p className="text-[28px] font-semibold text-[#1d1d1f] pb-10">
                Accessories.
              </p>
              <p className="text-[28px] font-semibold text-[#6e6e73]">
                {" "}
                Essentials that pair perfectly with your favorite devices.
              </p>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView="auto"
              spaceBetween={30}
              style={{
                "--swiper-navigation-color": "#6e6e73",
              }}
            >
              {smallProducts.map((item) => (
                <SwiperSlide key={item.id} className="!w-[313px]">
                  <SmallProductCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* small product card */}
          <div className="w-full h-[579px]  ">
            <div className="flex gap-2">
              <p className="text-[28px] font-semibold text-[#1d1d1f] pb-10">
                Loud and Clear.
              </p>
              <p className="text-[28px] font-semibold text-[#6e6e73]">
                {" "}
                Unparalleled choices for rich, high-quality sound.
              </p>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView="auto"
              spaceBetween={30}
              style={{
                "--swiper-navigation-color": "#6e6e73",
              }}
            >
              {smallProducts1.map((item) => (
                <SwiperSlide key={item.id} className="!w-[313px]">
                  <SmallProductCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Big ProductCard */}
          <div className="w-full h-[579px]  flex flex-col justify-between">
            <div className="flex items-baseline gap-2">
              <p className="text-[28px] font-semibold text-[#1d1d1f]">
                The Apple Experience.
              </p>

              <h2 className="text-[28px] font-semibold text-[#6e6e73]">
                Do even more with Apple products and services.  
              </h2>
            </div>

            <div className="px-5">
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView="auto"
                style={{
                  "--swiper-navigation-color": "#6e6e73",
                }}
              >
                {BigProduct2.map((item) => (
                  <SwiperSlide key={item.id} className="!w-[480px]">
                    <BigProductCard {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
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
              {products1.map((item) => (
                <SwiperSlide key={item.title} className="!w-[400px]">
                  <ProductCard1 {...item} />
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
          <section className="bg-[#f5f5f7]">
            <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6  text-[12px] text-[#6e6e73]">
              <p className="mb-3">
                ◊ Apple Watch Hermès is not eligible for education savings.
              </p>

              <p className="mb-3">
                ∆ Available to current and newly accepted college students and
                their parents, as well as faculty, staff, and homeschool
                teachers of all grade levels. See Terms for more information.
              </p>

              <p className="mb-3">
                § Financing available to qualified customers, subject to credit
                approval and credit limit, and requires you to select Citizens
                One Apple iPhone Payments or Apple Card Monthly Installments
                (ACMI) as your payment type at checkout at Apple. In order to
                buy an iPhone with ACMI, you must select one of the following
                carriers (but you cannot use a prepaid carrier plan): AT&T,
                Boost Mobile, T-Mobile, or Verizon. An iPhone purchased with
                ACMI is always unlocked, so you can switch carriers at any time,
                subject to your carrier’s terms. Taxes and shipping on items
                purchased using ACMI are subject to your card’s variable APR,
                not the ACMI 0% APR. ACMI is not available for purchases made at
                special storefronts or when using such special discounts
                in-store at Apple, except ACMI is available at the Education
                storefront and with the Education discount. The last month’s
                payment for each product will be the product’s purchase price,
                less all other payments at the monthly payment amount. ACMI is
                subject to change at any time for any reason, including but not
                limited to installment term lengths and eligible products. See
                the Apple Card Customer Agreement(Opens in a new window) for
                more information about ACMI. Additional Citizens One Apple
                iPhone Payments terms are here(Opens in a new window).
              </p>

              <p className="mb-3">
                ± Financing available to qualified customers, subject to credit
                approval and credit limit, and requires you to select Apple Card
                Monthly Installments (ACMI) as your payment type at checkout at
                Apple. Financing terms vary by product. Taxes and shipping on
                items purchased using ACMI are subject to your card’s variable
                APR, not the ACMI 0% APR. ACMI is not available for purchases
                made at special storefronts or when using such special discounts
                in-store at Apple, except ACMI is available at the Education
                storefront and with the Education discount. The last month’s
                payment for each product will be the product’s purchase price,
                less all other payments at the monthly payment amount. ACMI is
                subject to change at any time for any reason, including but not
                limited to installment term lengths and eligible products. See
                the Apple Card Customer Agreement(Opens in a new window) for
                more information about ACMI.
              </p>

              <p className="mb-3">
                ※ AT&T iPhone 17 Pro, iPhone 17 Pro Max, and iPhone 17 Special
                Deal: Monthly price (if shown) reflects net monthly payment,
                after application of AT&T trade-in credit applied over 36 months
                with purchase of an iPhone 17 Pro, iPhone 17 Pro Max, and iPhone
                17 and trade-in of eligible smartphone. Receive credit with
                purchase of an iPhone 17 Pro or iPhone 17 Pro Max activated on
                any eligible AT&T unlimited plan except Unlimited Starter,
                Unlimited Starter SL, Unlimited Starter(SM), or AT&T Value 2.0
                plans of either $1100, $700 or $350 (based upon the model and
                condition of your trade-in smartphone). Receive credit with
                purchase of an iPhone 17 Pro or iPhone 17 Pro Max activated on
                an AT&T Unlimited Starter, AT&T Unlimited Starter SL, or AT&T
                Unlimited Starter(SM) plan of either $830, $700 or $350 (based
                upon the model and condition of your trade-in smartphone).
                Receive credit with purchase of an iPhone 17 Pro or iPhone 17
                Pro Max activated on an AT&T Value 2.0 plan of either $500 or
                $350 (based upon the model and condition of your trade-in
                smartphone). Receive credit with purchase of an iPhone 17
                activated on any eligible AT&T unlimited plan except Unlimited
                Starter, Unlimited Starter SL, Unlimited Starter(SM), or AT&T
                Value 2.0 plans of either $700 or $350 (based upon the model and
                condition of your trade-in smartphone). Receive credit with
                purchase of an iPhone 17 activated on an AT&T Unlimited Starter,
                AT&T Unlimited Starter SL, or AT&T Unlimited Starter(SM) plan of
                either $800, $700, or $350 (based upon the model and condition
                of your trade-in smartphone). Receive credit with purchase of an
                iPhone 17 activated on AT&T Value 2.0 plans of either $500 or
                $350 (based upon the model and condition of your trade-in
                smartphone). Max bill credits will not exceed the cost of the
                device. Requires upgrade of an existing line or activation of a
                new line and purchase of a new iPhone 17 Pro, iPhone 17 Pro Max,
                or iPhone 17 on qualifying 36 month 0% APR installment plan,
                subject to carrier credit qualification. Customers purchasing
                this offer through Apple cannot add the Next Up Anytime option.
                $0 down for well qualified customers only, or down payment may
                be required and depends on a variety of factors. Tax on full
                retail price due at sale. Requires activation on eligible AT&T
                unlimited plan. AT&T may temporarily slow data speeds if the
                network is busy. If you cancel eligible wireless service,
                credits will stop and you will owe the remaining device balance.
                Activation/Upgrade Fee: $35. Trade in device may not be on
                existing installment plan. Bill credits are applied as a monthly
                credit over the 36-month installment plan. Credits start within
                3 bills. Will receive catchup credits once credits start.
                Wireless line must be on an installment agreement, active, and
                in good standing for 30 days to qualify. Installment agreement
                starts when device is shipped. To get all credits, device must
                remain on agreement for entire term and you must keep eligible
                service on device for entire installment term. Limited time
                offer; subject to change. Limits: one trade-in per qualifying
                purchase and one credit per line. May not be combinable with
                other offers, discounts, or credits. Purchase, financing, other
                limits, and restrictions apply. Price for iPhone 17 includes $30
                AT&T connectivity discount. Activation required.
              </p>
              <p className="mb-3">
                AT&T iPhone Air Special Deal: Monthly price (if shown) reflects
                net monthly payment, after application of AT&T trade-in credit
                applied over 36 months with purchase of an iPhone Air and
                trade-in of eligible smartphone. Receive credit with purchase of
                an iPhone Air activated on any eligible AT&T unlimited plan
                except Unlimited Starter, Unlimited Starter SL, Unlimited
                Starter(SM), or AT&T Value 2.0 plans of either $700 or $350
                (based upon the model and condition of your trade-in
                smartphone). Receive credit with purchase of an iPhone Air
                activated on an AT&T Unlimited Starter, AT&T Unlimited Starter
                SL, or AT&T Unlimited Starter(SM) plan of either $830, $700, or
                $350 (based upon the model and condition of your trade-in
                smartphone). Receive credit with purchase of an iPhone Air
                activated on AT&T Value 2.0 plans of either $500 or $350 (based
                upon the model and condition of your trade-in smartphone). Max
                bill credits will not exceed the cost of the device. Requires
                upgrade of an existing line or activation of a new line and
                purchase of a new iPhone Air on qualifying 36 month 0% APR
                installment plan, subject to carrier credit qualification.
                Customers purchasing this offer through Apple cannot add the
                Next Up Anytime option. $0 down for well qualified customers
                only, or down payment may be required and depends on a variety
                of factors. Tax on full retail price due at sale. Requires
                activation on eligible AT&T unlimited plan. AT&T may temporarily
                slow data speeds if the network is busy. If you cancel eligible
                wireless service, credits will stop and you will owe the
                remaining device balance. Activation/Upgrade Fee: $35. Trade in
                device may not be on existing installment plan. Bill credits are
                applied as a monthly credit over the 36-month installment plan.
                Credits start within 3 bills. Will receive catchup credits once
                credits start. Wireless line must be on an installment
                agreement, active, and in good standing for 30 days to qualify.
                Installment agreement starts when device is shipped. To get all
                credits, device must remain on agreement for entire term and you
                must keep eligible service on device for entire installment
                term. Limited time offer; subject to change. Limits: one
                trade-in per qualifying purchase and one credit per line. May
                not be combinable with other offers, discounts, or credits.
                Purchase, financing, other limits, and restrictions apply.
                Activation required.
              </p>
              <p className="mb-3">
                Boost Mobile iPhone 17 and iPhone Air Special Deal: Buy an
                iPhone 17 Pro, iPhone 17 Pro Max, iPhone Air, or iPhone 17 and
                get $830 in bill credits (not to exceed the cost of the iPhone)
                applied over 36 months. No trade-in required. If you are trading
                in a device with this deal, trade-in value will be applied as
                additional bill credits over 36 months. Monthly price (if shown)
                reflects net monthly payment, after application of $830 in bill
                credit (not to exceed the cost of the iPhone purchased) and
                trade-in credit (if applicable) applied over 36 months
                respectively. Requires activation of a new line, Boost Mobile
                Infinite Access plan and purchase on qualifying 36-month 0% APR
                installment plan, subject to carrier credit qualification. After
                making 12 installment payments, you may upgrade to a new iPhone
                and get up to $830 in bill credits (not to exceed the cost of
                the iPhone) applied over 36 months for the new iPhone on the
                Infinite Access plan and purchase on new qualifying 36-month 0%
                APR installment plan, subject to carrier credit qualification.
                Tax on full retail price due at sale. If you cancel eligible
                wireless service, credits will stop and you will owe the
                remaining device balance. Bill credits are applied as a monthly
                credit over the 36-month installment plan. Trade-in credits
                start within 3 bills. Installment agreement starts when device
                is shipped. To get all credits, device must remain on agreement
                for entire term and you must keep eligible service on device for
                entire installment term. Limited-time offer; subject to change.
                Limits: one credit per line. May not be combined with other
                offers, discounts, or credits. Purchase, financing, other
                limits, and restrictions apply. Price for iPhone 17 includes $30
                Boost Mobile connectivity discount. Activation required.
              </p>
              <p className="mb-3">
                T-Mobile iPhone 17 and iPhone Air Special Deal: Monthly price
                (if shown) reflects net monthly payment, after application of
                T-Mobile trade-in credit applied over 24 months with purchase of
                an iPhone 17 Pro, iPhone 17 Pro Max, iPhone 17, or iPhone Air
                and trade-in of eligible smartphone. Any Condition trade-in
                offer requires Experience Beyond or Go5G Next plan. Max bill
                credits will not exceed the cost of the device. Credit comprised
                of (i) Apple instant trade-in credit at checkout and (ii)
                T-Mobile monthly bill credits applied over 24 months. Allow 2
                bill cycles from valid submission and validation of trade-in.
                Tax on pre-credit price due at sale. Limited-time; subject to
                change. Qualifying credit, data plan, and trade-in (e.g., iPhone
                16 Pro Max) in good condition required. $35 device connection
                charge due on next bill. May not be combinable with some offers,
                discounts, or promotions. Activation required. Price for iPhone
                17 includes $30 T-Mobile connectivity discount. Contact T-Mobile
                before cancelling entire account to continue remaining bill
                credits, or credits stop & balance on required finance agreement
                is due. Bill credits end if you pay off early.
              </p>
              <p className="mb-3">
                Existing customers: Receive credit with purchase of an iPhone 17
                Pro, iPhone 17 Pro Max, iPhone 17, or iPhone Air (based upon the
                model and condition of your trade-in smartphone) of $1100, $800
                or $500 for customers on an Experience Beyond or Go5G Next plan
                (excluding all 55+, Military, & First Responder Savings plans)
                ($100+/mo. plan after AutoPay discount and plus taxes & fees if
                applicable) Max 4 promotions on any iPhone per account; $900,
                $600 or $300 for customers on an Experience Beyond or Go5G Next
                (with 55+, Military, & First Responder Savings) plan ($85+/mo.
                plan after AutoPay discount and plus taxes & fees if applicable)
                Max 4 promotions on any iPhone per account; $800 or $400 for
                customers on an Experience More or Go5G Plus plan (excluding all
                55+, Military, & First Responder Savings plans)($85+/mo. plan
                after AutoPay discount and plus taxes & fees if applicable) Max
                4 promotions on any iPhone per account; $600 or $300 for
                customers on an Experience More or Go5G Plus (with 55+,
                Military, & First Responder Savings)plan ($70+/mo. plan after
                AutoPay discount and plus taxes & fees if applicable) Max 4
                promotions on any iPhone per account; or $300 or $150 for
                customers on a Go5G, Magenta, Magenta MAX, or Essentials plan
                (including 55+, Military, & First Responder Savings plans)
                ($45+/mo. plan after AutoPay discount and plus taxes & fees if
                applicable) Max 4 promotions on any iPhone per account. Must be
                an existing T-Mobile customer.
              </p>
              <p className="mb-3">
                Add-a-Line customers: Receive credit with purchase of an iPhone
                17 Pro, iPhone 17 Pro Max, iPhone 17, or iPhone Air (based upon
                the model and condition of your trade-in smartphone) of $1100,
                $800 or $500 for customers on an Experience Beyond or Go5G Next
                plan (excluding all 55+, Military, & First Responder Savings
                plans) ($100+/mo. plan after AutoPay discount and plus taxes &
                fees if applicable) Max 4 promotions on any iPhone per account;
                $900, $600 or $300 for customers on an Experience Beyond or Go5G
                Next (with 55+, Military, & First Responder Savings) plan
                ($85+/mo. plan after AutoPay discount and plus taxes & fees if
                applicable) Max 4 promotions on any iPhone per account; $800 or
                $400 for customers on an Experience More or Go5G Plus plan
                (excluding all 55+, Military, & First Responder Savings
                plans)($85+/mo. plan after AutoPay discount and plus taxes &
                fees if applicable) Max 4 promotions on any iPhone per account;
                $600 or $300 for customers on an Experience More or Go5G Plus
                (with 55+, Military, & First Responder Savings)plan ($70+/mo.
                plan after AutoPay discount and plus taxes & fees if applicable)
                Max 4 promotions on any iPhone per account; $700 or $350 for
                customers on a Go5G, Magenta, Magenta MAX, or Essentials plan
                (excluding all 55+, Military, & First Responder Savings plans)
                ($60+/mo. plan after AutoPay discount and plus taxes & fees if
                applicable) Max 4 promotions on any iPhone per account; or $300
                or $150 for customers on a Go5G, Magenta, Magenta MAX, or
                Essentials (with 55+, Military, & First Responder Savings) plan
                ($45+/mo. plan after AutoPay discount and plus taxes & fees if
                applicable) Max 4 promotions on any iPhone per account. Must be
                a T-Mobile customer adding a new line to an existing T-Mobile
                account.
              </p>
              <p className="mb-3">
                New customers: Receive credit with purchase of an iPhone 17 Pro,
                iPhone 17 Pro Max, iPhone 17, or iPhone Air (based upon the
                model and condition of your trade-in smartphone) of $1100, $800
                or $500 for customers on an Experience Beyond plan (excluding
                all 55, Military, First Responder plans) ($100+/mo. plan after
                AutoPay discount if applicable; plus taxes & fees) Max 4
                promotions on any iPhone per account; $800 or $400 for customers
                on an Experience More plan (excluding all 55, Military, First
                Responder plans) ($85+/mo. plan after AutoPay discount if
                applicable; plus taxes & fees) Max 4 promotions on any iPhone
                per account; or $700 or $350 for customers on an Essentials plan
                (excluding all 55, Military, First Responder plans) ($60+/mo.
                plan after AutoPay discount if applicable; plus taxes & fees)
                Max 4 promotions on any iPhone per account. Must be a new
                T-Mobile customer.
              </p>
              <p className="mb-3">
                T-Mobile iPhone 17 and iPhone Air No Trade-in Required Deal:
                T-Mobile port-in bill credit applied over 24 months with
                purchase of an iPhone 17 Pro Max, iPhone 17 Pro, iPhone Air, or
                iPhone 17. Max bill credits will not exceed the cost of the
                device. Line with promo must be active and in good standing to
                receive credits; allow 2 bill cycles. Tax on pre-credit price
                due at sale. Limited-time; subject to change. Qualifying credit,
                service, and port-in (AT&T, Verizon, or another eligible
                carrier, see complete list at T‑Mobile.com/port(Opens in a new
                window)) required. $35 device connection charge due on next
                bill. Max 4 promotions on any iPhone per account. May not be
                combinable with some offers, discounts, or promotions.
                Activation required. Contact T-Mobile before cancelling entire
                account to continue remaining bill credits, or credits stop &
                balance on required finance agreement is due. Bill credits end
                if you pay off early.
              </p>
              <p className="mb-3">
                Add-a-line Customers: Buy an iPhone 17, iPhone 17 Pro, iPhone 17
                Pro Max, or iPhone Air and get up to $1100 in bill credits
                applied over 24 months for customers on an Experience Beyond or
                Go5G Next plan (excluding all 55+, Military, & First Responder
                Savings plans) ($100+/mo. plan after AutoPay discount and plus
                taxes & fees if applicable); or up to $900 for customers on an
                Experience Beyond or Go5G Next (with 55+, Military, & First
                Responder Savings) plan ($85+/mo. plan after AutoPay discount
                and plus taxes & fees if applicable); or up to $800 for
                customers on an Experience More or Go5G Plus plan (excluding all
                55+, Military, & First Responder Savings plans) ($85+/mo. plan
                after AutoPay discount and plus taxes & fees if applicable); or
                up to $600 for customers on an Experience More or Go5G Plus
                (with 55+, Military, & First Responder Savings) ($70+/mo. plan
                after AutoPay discount and plus taxes & fees if applicable). No
                trade-in required. Must be a T-Mobile customer adding a new line
                to an existing T-Mobile account.
              </p>
              <p className="mb-3">
                New Customers: Buy an iPhone 17, iPhone 17 Pro, iPhone 17 Pro
                Max, or iPhone Air and get up to $1100 in bill credits applied
                over 24 months for customers on an Experience Beyond plan
                (excluding all 55+, Military, & First Responder Savings
                plans)($100+/mo. plan after AutoPay discount and plus taxes &
                fees if applicable); or up to $800 for customers on an
                Experience More plan (excluding all 55+, Military, & First
                Responder Savings plans) ($85+/mo. plan after AutoPay discount
                and plus taxes & fees if applicable). No trade-in required. Must
                be a new T-Mobile customer.
              </p>
              <p className="mb-3">
                Verizon iPhone 17 and iPhone Air Special Deal: Monthly price (if
                shown) reflects net monthly payment, after application of
                Verizon trade-in credit applied over 36 months with purchase of
                an iPhone 17 Pro, iPhone 17 Pro Max, iPhone 17, or iPhone Air.
              </p>
              <p className="mb-3">
                Existing customers: Customers on an Unlimited Ultimate 1.0 plan
                (min. $90/mo w/Auto Pay (+taxes/fees) for 36 mos) receive: $830
                or $415 credit (based upon the model of your trade-in
                smartphone) with purchase of an iPhone 17 Pro or iPhone 17 Pro
                Max; $830 or $415 credit (based upon the model of your trade-in
                smartphone) with purchase of an iPhone Air; or $830 or $415
                credit (based upon the model of your trade-in smartphone) with
                purchase of an iPhone 17. Customers on an Unlimited Plus plan
                (min. $80/mo w/Auto Pay (+taxes/fees) for 36 mos) receive $830
                or $415 credit (based upon the model of your trade-in
                smartphone) with purchase of an iPhone 17 Pro, iPhone 17 Pro
                Max, iPhone Air, or iPhone 17. Customers on an Unlimited Welcome
                plan (min. $65/mo w/Auto Pay (+taxes/fees) for 36 mos) receive
                $360 or $180 credit (based upon the model of your trade-in
                smartphone) with purchase of an iPhone 17 Pro, iPhone 17 Pro
                Max, iPhone Air, or iPhone 17. Must be an existing Verizon
                mobile customer.
              </p>
              <p className="mb-3">
                New or Add-a-Line customers: Customers on an Unlimited Ultimate
                1.0 plan (min. $90/mo w/Auto Pay (+taxes/fees) for 36 mos)
                receive: $830 or $415 credit (based upon the model of your
                trade-in smartphone) with purchase of an iPhone 17 Pro or iPhone
                17 Pro Max; $830 or $415 credit (based upon the model of your
                trade-in smartphone) with purchase of an iPhone Air; or $830 or
                $550 credit if porting in a phone number or $830 or $415 if not
                porting in a phone number (based upon the model of your trade-in
                smartphone) with purchase of an iPhone 17. Customers on an
                Unlimited Plus plan (min. $80/mo w/Auto Pay (+taxes/fees) for 36
                mos) receive $830 or $415 credit (based upon the model of your
                trade-in smartphone) with purchase of an iPhone 17 Pro, iPhone
                17 Pro Max, iPhone Air, or iPhone 17. Customers on an Unlimited
                Welcome plan (min. $65/mo w/Auto Pay (+taxes/fees) for 36 mos)
                receive $830 or $415 credit if porting in a phone number or $360
                or $180 if not porting in a phone number (based upon the model
                of your trade-in smartphone) with purchase of an iPhone 17 Pro,
                iPhone 17 Pro Max, iPhone Air, or iPhone 17. Must be a new
                Verizon mobile customer or adding a new line to an existing
                Verizon mobile account.
              </p>
              <p className="mb-3">
                Max bill credit will not exceed the cost of the device. Credit
                comprised of (i) Apple instant trade-in credit at checkout and
                (ii) Verizon monthly bill credits applied over 36 months.
                Customer must remain in the Verizon Device Payment Program for
                36 months to receive the full benefit of the Verizon bill
                credits. Bill credits may take 1-2 bill cycles to appear. If it
                takes two cycles for bill credits to appear, you will see the
                credit for the first cycle on your second bill in addition to
                that month is credit. Requires purchase and activation of a new
                iPhone 17 Pro, iPhone 17 Pro Max, iPhone 17, or iPhone Air with
                the Verizon Device Payment Program at 0% APR for 36 months,
                subject to Verizon credit qualification, and iPhone availability
                and limits. Taxes and shipping not included in monthly price.
                Sales tax may be assessed on full value of new iPhone. Requires
                eligible unlimited Verizon mobile plan. Requires trade-in of
                eligible device. Must be at least 18 to trade-in. Apple or its
                trade-in partners reserve the right to refuse or limit any
                trade-in transaction for any reason. In-store trade-in requires
                presentation of a valid, government-issued photo ID (local law
                may require saving this information). In-store promotion
                availability subject to local law; speak to a Specialist to
                learn more. Limited-time offer; subject to change. Additional
                terms from Apple, Verizon, and Apple is trade-in partners may
                apply. Price for iPhone 17 includes $30 Verizon connectivity
                discount
              </p>
              <p className="mb-3">
                Verizon iPhone 17 and iPhone Air No Trade-in Required Deal:
                Monthly price (if shown) reflects net monthly payment, after
                application of Verizon bill credit applied over 36 months.
                Customers on an Unlimited Ultimate 1.0 plan (min. $90/mo w/Auto
                Pay (+taxes/fees) for 36 mos), Customers on an Unlimited Plus
                plan (min. $80/mo w/Auto Pay (+taxes/fees) for 36 mos) or
                Unlimited Welcome plan (min. $65/mo w/Auto Pay (+taxes/fees) for
                36 mos) receive $1,000, $830 or $0 (respective) credit with
                purchase of an iPhone 17 Pro Max; $1,000, $830, or $0
                (respectively) credit with purchase of an iPhone 17 Pro; $1,000,
                $830, or $0 (respectively) credit with purchase of an iPhone
                Air; or $830, $830, or $0 (respectively) credit with purchase of
                an iPhone 17. Must be a new Verizon customer or adding a new
                line to an existing Verizon account. If you are trading in a
                device with this deal, credits will be comprised of (i) Apple
                instant trade-in credit at checkout and (ii) Verizon monthly
                bill credits applied over 36 months. Max bill credits will not
                exceed the cost of the device. Credit comprised of Verizon
                monthly bill credits applied over 36 months. Customer must
                remain in the Verizon Device Payment Program for 36 months to
                receive the full benefit of the Verizon bill credits. Bill
                credits may take 1-2 bill cycles to appear. If it takes two
                cycles for bill credits to appear, you will see the credit for
                the first cycle on your second bill in addition to that mont is
                credit. Requires purchase and activation of a new iPhone 17 Pro,
                iPhone 17 Pro Max, iPhone Air, or iPhone 17 with the Verizon
                Device Payment Program at 0% APR for 36 months, subject to
                carrier credit qualification, and iPhone availability and
                limits. Taxes and shipping not included in monthly price. Sales
                tax may be assessed on full value of new iPhone. Requires
                eligible unlimited service plan. In-store promotion availability
                subject to local law; speak to a Specialist to learn more.
                Limited-time offer; subject to change. Additional terms from
                Apple and Verizon may apply. Price for iPhone 17 includes $30
                Verizon connectivity discount.
              </p>
              <p className="mb-3">
                AT&T iPhone 17e Special Deal: Monthly price (if shown) reflects
                net monthly payment, after application of AT&T bill credit
                applied over 36 months. Requires upgrade of an existing line or
                activation of a new line. Customers upgrading or activating a
                new line and buying an (i) iPhone 17e 256 GB will get $383.36 in
                bill credits or (ii) an iPhone 17e 512 GB and get $367.36 in
                bill credits. If you are trading in a device with this deal,
                credits will be comprised of (i) Apple instant trade-in credit
                at checkout and (ii) AT&T monthly bill credits applied over 36
                months. Requires purchase on qualifying 36-month 0% APR
                installment plan, subject to carrier credit qualification. $0
                down for well-qualified customers only, or down payment may be
                required and depends on a variety of factors. Tax on full retail
                price due at sale. Requires activation on eligible AT&T
                unlimited plan. AT&T may temporarily slow data speeds if the
                network is busy. If you cancel eligible wireless service,
                credits will stop and you will owe the remaining device balance.
                Activation/Upgrade Fee: $35. Bill credits are applied as a
                monthly credit over the 36-month installment plan. Credits start
                within 3 bills. Will receive catch-up credits once credits
                start. Wireless line must be on an installment agreement,
                active, and in good standing for 30 days to qualify. Installment
                agreement starts when device is shipped. To get all credits,
                device must remain on agreement for entire term and you must
                keep eligible service on device for entire installment term.
                Limited-time offer; subject to change. Limits: one credit per
                line. May not be combinable with other offers, discounts, or
                credits. Purchase, financing, other limits, and restrictions
                apply. Activation required.
              </p>

              <p className="mb-3">
                T-Mobile iPhone 17e Special Deal: Monthly price (if shown)
                reflects net monthly payment, after application of T-Mobile
                trade-in credit applied over 24 months with purchase of an
                iPhone 17e and trade-in of eligible smartphone. Any Condition
                trade-in offer requires Experience Beyond or Go5G Next plan. Max
                bill credits will not exceed the cost of the device. Credit
                comprised of (i) Apple instant trade-in credit at checkout and
                (ii) T-Mobile monthly bill credits applied over 24 months. Allow
                2 bill cycles from valid submission and validation of trade-in.
                Tax on pre-credit price due at sale. Limited-time; subject to
                change. Qualifying credit, data plan, and trade-in (e.g., iPhone
                16 Pro Max) in good condition required. $35 device connection
                charge due on next bill. May not be combinable with some offers,
                discounts, or promotions. Activation required. Contact T-Mobile
                before cancelling entire account to continue remaining bill
                credits, or credits stop & balance on required finance agreement
                is due. Bill credits end if you pay off early.
              </p>
              <p className="mb-3">
                Existing customers: Receive credit with purchase of an iPhone
                17e (based upon the model and condition of your trade-in
                smartphone) of $799 or $500 for customers on an Experience
                Beyond or Go5G Next plan (excluding all 55+, Military, & First
                Responder Savings plans) ($100+/mo. plan after AutoPay discount
                and plus taxes & fees if applicable) Max 4 promotions on any
                iPhone per account; $799, $600 or $300 for customers on an
                Experience Beyond or Go5G Next (with 55+, Military, & First
                Responder Savings) plan ($85+/mo. plan after AutoPay discount
                and plus taxes & fees if applicable) Max 4 promotions on any
                iPhone per account; $799 or $400 for customers on an Experience
                More or Go5G Plus plan (excluding all 55+, Military, & First
                Responder Savings plans) ($85+/mo. plan after AutoPay discount
                and plus taxes & fees if applicable) Max 4 promotions on any
                iPhone per account; $600 or $300 for customers on an Experience
                More or Go5G Plus (with 55+, Military, & First Responder
                Savings) plan ($70+/mo. plan after AutoPay discount and plus
                taxes & fees if applicable) Max 4 promotions on any iPhone per
                account; or $300 or $150 for customers on a Go5G, Magenta,
                Magenta MAX, or Essentials plan (including 55+, Military, &
                First Responder Savings plans) ($45+/mo. plan after AutoPay
                discount and plus taxes & fees if applicable) Max 4 promotions
                on any iPhone per account. Must be an existing T-Mobile
                customer.
              </p>
              <p className="mb-3">
                Add-a-Line customers: Receive credit with purchase of an iPhone
                17e (based upon the model and condition of your trade-in
                smartphone) of $799 or $500 for customers on an Experience
                Beyond or Go5G Next plan (excluding all 55+, Military, & First
                Responder Savings plans) ($100+/mo. plan after AutoPay discount
                and plus taxes & fees if applicable) Max 4 promotions on any
                iPhone per account; $799, $600 or $300 for customers on an
                Experience Beyond or Go5G Next (with 55+, Military, & First
                Responder Savings) plan ($85+/mo. plan after AutoPay discount
                and plus taxes & fees if applicable) Max 4 promotions on any
                iPhone per account; $799 or $400 for customers on an Experience
                More or Go5G Plus plan (excluding all 55+, Military, & First
                Responder Savings plans) ($85+/mo. plan after AutoPay discount
                and plus taxes & fees if applicable) Max 4 promotions on any
                iPhone per account; $600 or $300 for customers on an Experience
                More or Go5G Plus (with 55+, Military, & First Responder
                Savings) plan ($70+/mo. plan after AutoPay discount and plus
                taxes & fees if applicable) Max 4 promotions on any iPhone per
                account; $700 or $350 for customers on a Go5G, Magenta, Magenta
                MAX, or Essentials plan (excluding all 55+, Military, & First
                Responder Savings plans) ($60+/mo. plan after AutoPay discount
                and plus taxes & fees if applicable) Max 4 promotions on any
                iPhone per account; or $300 or $150 for customers on a Go5G,
                Magenta, Magenta MAX, or Essentials (with 55+, Military, & First
                Responder Savings) plan ($45+/mo. plan after AutoPay discount
                and plus taxes & fees if applicable) Max 4 promotions on any
                iPhone per account. Must be a T-Mobile customer adding a new
                line to an existing T-Mobile account.
              </p>
              <p className="mb-3">
                New customers: Receive credit with purchase of an iPhone 17e
                (based upon the model and condition of your trade-in smartphone)
                of $799 or $500 for customers on an Experience Beyond plan
                (excluding all 55, Military, First Responder plans) ($100+/mo.
                plan after AutoPay discount if applicable; plus taxes & fees)
                Max 4 promotions on any iPhone per account; $799 or $400 for
                customers on an Experience More plan (excluding all 55,
                Military, First Responder plans) ($85+/mo. plan after AutoPay
                discount if applicable; plus taxes & fees) Max 4 promotions on
                any iPhone per account; or $700 or $350 for customers on an
                Essentials plan (excluding all 55, Military, First Responder
                plans) ($60+/mo. plan after AutoPay discount if applicable; plus
                taxes & fees) Max 4 promotions on any iPhone per account. Must
                be a new T-Mobile customer.
              </p>
              <p className="mb-3">
                T-Mobile iPhone 17e No Trade-in Required Deal: T-Mobile port-in
                bill credit applied over 24 months with purchase of an iPhone
                17e. Max bill credits will not exceed the cost of the device.
                Line with promo must be active and in good standing to receive
                credits; allow 2 bill cycles. Tax on pre-credit price due at
                sale. Limited-time; subject to change. $35 device connection
                charge due on next bill. Qualifying credit, service, and port-in
                (excludes Google Voice, Tracfone, Simple Mobile, Safe Link,
                TelCel, Total Wireless, Net 10, Straight Talk, Walmart Family
                Mobile, Walmart-Safelink, TruConnect (T-Mobile), Working Assets
                (aka Credo Mobile), T-Mobile prepaid, Metro, Assurance Wireless
                for Metro, Cammio, LLC, TextNow, Phone.com, Republic Wireless,
                Ring Central, Ooma Home Phone Support, Vonage:197D-NSR/4,
                Bandwidth.com, Neutral Tandem, or TCI Telephony Svcs) required.
                Max 4 promotions on any iPhone per account. May not be
                combinable with some offers, discounts, or promotions.
                Activation required. Contact T-Mobile before cancelling entire
                account to continue remaining bill credits, or credits stop &
                balance on required finance agreement is due. Bill credits end
                if you pay off early.
              </p>
              <p className="mb-3">
                Add-a-line Customers: Buy an iPhone 17e and get up to $630 in
                bill credits applied over 24 months for customers on an
                Experience Beyond, Experience More, Essentials, Go5G Next, Go5G
                Plus, Go5G, Magenta, or Magenta MAX plan (including 55+,
                Military, & First Responder Savings plans) ($45+/mo. plan after
                AutoPay discount and plus taxes & fees if applicable). No
                trade-in required. Must be a T-Mobile customer adding a new line
                to an existing T-Mobile account.
              </p>
              <p className="mb-3">
                New Customers: Buy an iPhone 17e and get up to $630 in bill
                credits applied over 24 months for customers on an Experience
                Beyond, Experience More, or Essentials plan (excluding all 55+,
                Military, & First Responder Savings plans) ($60+/mo. plan after
                AutoPay discount if applicable; plus taxes & fees). No trade-in
                required. Must be a new T-Mobile customer.
              </p>
              <p className="mb-3">
                Verizon iPhone 17e Special Deal: Monthly price (if shown)
                reflects net monthly payment, after application of Verizon
                trade-in credit applied over 36 months with purchase of an
                iPhone 17e.
              </p>
              <p className="mb-3">
                Existing customers: Customers on an Unlimited Ultimate 1.0 plan
                (min. $90/mo w/Auto Pay (+taxes/fees) for 36 mos) receive $600
                or $415 credit (based upon the model of your trade-in
                smartphone) with purchase of an iPhone 17e. Customers on an
                Unlimited Plus plan (min. $80/mo w/Auto Pay (+taxes/fees) for 36
                mos) receive $600 or $415 credit (based upon the model of your
                trade-in smartphone) with purchase of an iPhone 17e. Customers
                on an Unlimited Welcome plan (min. $65/mo w/Auto Pay
                (+taxes/fees) for 36 mos) receive $360 or $180 credit (based
                upon the model of your trade-in smartphone) with purchase of an
                iPhone 17e. Must be an existing Verizon mobile customer.
              </p>
              <p className="mb-3">
                New or Add-a-Line customers: Customers on an Unlimited Ultimate
                1.0 plan (min. $90/mo w/Auto Pay (+taxes/fees) for 36 mos)
                receive $600 or $550 credit if porting in a phone number or $600
                or $415 if not porting in a phone number (based upon the model
                of your trade-in smartphone) with purchase of an iPhone 17e.
                Customers on an Unlimited Plus plan (min. $80/mo w/Auto Pay
                (+taxes/fees) for 36 mos) receive $600 or $415 credit (based
                upon the model of your trade-in smartphone) with purchase of an
                iPhone 17e. Customers on an Unlimited Welcome plan (min. $65/mo
                w/Auto Pay (+taxes/fees) for 36 mos) receive $600 or $300 credit
                if porting in a phone number or $360 or $180 if not porting in a
                phone number (based upon the model of your trade-in smartphone)
                with purchase of an iPhone 17e. Must be a new Verizon mobile
                customer or adding a new line to an existing Verizon mobile
                account.
              </p>
              <p className="mb-3">
                Max bill credits will not exceed the cost of the device. Credit
                comprised of (i) Apple instant trade-in credit at checkout and
                (ii) Verizon monthly bill credits applied over 36 months.
                Customer must remain in the Verizon Device Payment Program for
                36 months to receive the full benefit of the Verizon bill
                credits. Bill credits may take 1-2 bill cycles to appear. If it
                takes two cycles for bill credits to appear, you’ll see the
                credit for the first cycle on your second bill in addition to
                that month’s credit. Requires purchase and activation of a new
                iPhone 17e with the Verizon Device Payment Program at 0% APR for
                36 months, subject to Verizon credit qualification, and iPhone
                availability and limits. Taxes and shipping not included in
                monthly price. Sales tax may be assessed on full value of new
                iPhone. Requires eligible unlimited Verizon mobile plan.
                Requires trade-in of eligible device. Must be at least 18 to
                trade-in. Apple or its trade-in partners reserve the right to
                refuse or limit any trade-in transaction for any reason.
                In-store trade-in requires presentation of a valid,
                government-issued photo ID (local law may require saving this
                information). In-store promotion availability subject to local
                law; speak to a Specialist to learn more. Limited-time offer;
                subject to change. Additional terms from Apple, Verizon, and
                Apple’s trade-in partners may apply.
              </p>
              <p className="mb-3">
                AT&T iPhone 16 Special Deal: Monthly price (if shown) reflects
                net monthly payment, after application of AT&T bill credit
                applied over 36 months. Requires upgrade of an existing line or
                activation of a new line. Customers upgrading or activating a
                new line and buying an iPhone 16 128 GB will get $441.36 in bill
                credits. Requires purchase on qualifying 36-month 0% APR
                installment plan, subject to carrier credit qualification. If
                you are trading in a device with this deal, credits will be
                comprised of (i) Apple instant trade-in credit at checkout and
                (ii) AT&T monthly bill credits applied over 36 months. Requires
                purchase on qualifying 36-month 0% APR installment plan, subject
                to carrier credit qualification. $0 down for well-qualified
                customers only, or down payment may be required and depends on a
                variety of factors. Tax on full retail price due at sale.
                Requires activation on eligible AT&T unlimited plan. AT&T may
                temporarily slow data speeds if the network is busy. If you
                cancel eligible wireless service, credits will stop and you will
                owe the remaining device balance. Activation/Upgrade Fee: $35.
                Bill credits are applied as a monthly credit over the 36-month
                installment plan. Credits start within 3 bills. Will receive
                catch-up credits once credits start. Wireless line must be on an
                installment agreement, active, and in good standing for 30 days
                to qualify. Installment agreement starts when device is shipped.
                To get all credits, device must remain on agreement for entire
                term and you must keep eligible service on device for entire
                installment term. Limited-time offer; subject to change. Limits:
                one credit per line. May not be combinable with other offers,
                discounts, or credits. Purchase, financing, other limits, and
                restrictions apply. Activation required.
              </p>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Store;
