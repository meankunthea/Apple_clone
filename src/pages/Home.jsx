import MainLayout from "../layouts/MainLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  // for slide show
  // const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/home/slide1.jpg",
      title: "Slide 1",
      description: "Watch every club, every match, every goal.",
    },
    {
      image: "/images/home/slide2.jpg",
      title: "Slide 2",
      description: "Discover amazing new content.",
    },
    {
      image: "/images/home/slide3.jpg",
      title: "Slide 3",
      description: "Live and on demand.",
    },
    {
      image: "/images/home/slide4.jpg",
      title: "Slide 4",
      description: "Live and on demand.",
    },
    {
      image: "/images/home/slide5.jpg",
      title: "Slide 5",
      description: "Live and on demand.",
    },
    {
      image: "/images/home/slide6.jpg",
      title: "Slide 6",
      description: "Live and on demand.",
    },
    {
      image: "/images/home/slide7.jpg",
      title: "Slide 7",
      description: "Live and on demand.",
    },
  ];

  const smallSlides = [
    {
      image: "/images/home/small_slide1.jpg",
      title: "Hello Kitty island Advanture",
      subtitle: "Play Now",
    },

    {
      image: "/images/home/small_slide2.jpg",
      title: "",
      subtitle: "Listen Now",
    },
    {
      image: "/images/home/small_slide3.jpg",
      title: "",
      subtitle: "Watch Now",
    },
    {
      image: "/images/home/small_slide4.jpg",
      title: "Music",
      subtitle: "Listen Now",
    },
    {
      image: "/images/home/small_slide5.jpg",
      title: "Programs",
      subtitle: "WatchNow",
    },
    {
      image: "/images/home/small_slide6.jpg",
      title: "Get Your Glutes in Great Shape",
      subtitle: "WatchNow",
    },
    {
      image: "/images/home/small_slide7.jpg",
      title: "Get Your Glutes in Great Shape",
      subtitle: "WatchNow",
    },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen ">
        <style>{`
          .small-swiper-pagination {
            display: flex;
            justify-content: center;
            width: 100%;
          }
          .small-swiper-pagination .swiper-pagination-bullet {
            background: #D1D5DB;
            opacity: 1;
            width: 8px;
            height: 8px;
            border-radius: 9999px;
            transition: width 200ms ease, background 200ms ease;
            margin: 0 6px;
          }
          .small-swiper-pagination .swiper-pagination-bullet-active {
            background: #6B7280;
            width: 28px; /* expanded width when active */
            height: 8px;
            border-radius: 9999px;
          }
          .small-swiper-pagination .swiper-pagination-bullet:hover {
            background: #9CA3AF;
          }
          `}</style>
        {/* First Section */}

        {/* Hero */}
        <div className="relative h-[692px]  mx-auto">
          {/* Background image */}
          <img
            src="/images/home/hero_iphone_17__ekga3xh1n5aq_mediumtall_2x.jpg"
            alt="iPhone"
            className="w-full h-full object-cover"
          />

          {/* Text on image */}
          <div className="absolute inset-0 flex flex-col items-center  text-center pt-20 ">
            <h1 className="text-5xl font-semibold">iPhone 17</h1>
            <h4 className="text-2xl pt-2">Magichromatic.</h4>
            <div className="">
              <button className="mt-4 bg-[#0066CC] text-white px-6 py-2 rounded-3xl">
                Shop
              </button>
            </div>
          </div>
        </div>

        {/* Second section */}
        <div className="mt-3 relative w-full h-[600px] overflow-hidden">
          <img
            src="/images/home/hero_iphone_17_pro__dbaaq3mt8u2q_mediumtall_2x.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            alt="iphone 17"
          />

          <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center text-black">
            <h1 className="text-5xl text-white font-semibold">iPhone 17 Pro</h1>
            <h4 className="text-2xl text-white mt-2">All out Pro.</h4>
            <div className="space-x-4">
              <button className="mt-6 bg-[#0066CC] text-white px-6 py-2 rounded-3xl">
                Learn more
              </button>
              <button className="mt-6  text-[#0066CC] border border-blue-500 px-6 py-2 rounded-3xl transition-colors duration-200 hover:bg-[#0066CC] hover:text-white">
                Buy
              </button>
            </div>
          </div>
        </div>
        {/* Third section */}
        <div className="mt-3 relative w-full h-[600px] overflow-hidden">
          <img
            src="/images/home/hero_macbook_air_m5__eb1idggd120y_mediumtall_2x.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            alt="mac book"
          />
          <div className="absolute pt-6 left-1/2 -translate-x-1/2 text-center text-black">
            <h1 className="text-5xl font-semibold">MacBook</h1>
            <h4 className="text-2xl mt-2">Meet the latest iPhone lineup.</h4>
            <div className="space-x-4">
              <button className="mt-6 bg-[#0066CC] text-white px-6 py-2 rounded-3xl">
                Learn more
              </button>
              <button className="mt-6 text-[#0066CC] border border-blue-500 px-6 py-2 rounded-3xl transition-colors duration-200 hover:bg-[#0066CC] hover:text-white">
                Buy
              </button>
            </div>
          </div>
        </div>

        {/* Fourth section */}
        <div className="mt-3 w-full h-[1764px] grid grid-cols-2 grid-rows-3 gap-3 p-3">
          {/* BOX 1 */}
          <div className="relative w-full h-full gap-2">
            <img
              src="/images/home/promo_ipad_air_m4__bgcv7t286k8y_large_2x.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-center gap-2">
              <img
                src="/images/home/promo_logo_ipad_air__dqdj4ni03quu_small_2x.png"
                alt="Logo"
                className="w-28 "
              />

              <h4 className="text-xl text-[17px]">Now supercharged by M4.</h4>

              <div className="flex gap-4 pt-2">
                <button className="bg-[#0066CC] text-white text-[14px] px-6 py-2 rounded-3xl">
                  Learn more
                </button>
                <button className="text-[#0066CC] border border-blue-500 text-[14px] px-6 py-2 rounded-3xl transition-colors duration-200 hover:bg-[#0066CC] hover:text-white">
                  Buy
                </button>
              </div>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="relative w-full h-full gap-2">
            <img
              src="/images/home/promo_airpods_pro_3_wc__dtqp7mcsx0a6_small_2x.jpg"
              alt="Background"
              className="w-full h-full object-cover "
            />

            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center text-center gap-2">
              <h1 className="text-4xl text-white">AirPods Pro 3</h1>
              <h4 className="text-2xl text-[17px] text-white">
                The world&apos;s best in-ear <br /> Active Noise Cancellation.
              </h4>

              <div className="flex gap-4 pt-2">
                <button className="bg-white text-[14px] px-6 py-2 rounded-3xl">
                  Learn more
                </button>
                <button className="text-white text-[14px] border border-white px-6 py-2 rounded-3xl transition-colors duration-200 hover:bg-white hover:text-black">
                  Buy
                </button>
              </div>
            </div>
          </div>

          {/* BOX 3 */}
          <div className="relative w-full h-full gap-2">
            <img
              src="/images/home/promo_macbook_pro__c9td9w1mc8ia_large_2x.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-center gap-2">
              <h1 className="text-5xl text-white">MacBook pro</h1>
              <h4 className="text-xl text-[17px] text-white">
                Now with M5, M5 Pro, and M5 Max.
              </h4>

              <div className="flex gap-4 pt-2">
                <button className="bg-[#0066CC] text-[14px] text-white px-6 py-2 rounded-3xl">
                  Learn more
                </button>
                <button className="text-[#0066CC] text-[14px] border border-blue-500 px-6 py-2 rounded-3xl transition-colors duration-200 hover:bg-[#0066CC] hover:text-white">
                  Buy
                </button>
              </div>
            </div>
          </div>

          {/* BOX 4 */}
          <div className="relative w-full h-full gap-2">
            <img
              src="/images/home/promo_apple_watch_series_11__gnlwqxe1jlu2_large_2x.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-center gap-2">
              <img
                src="/images/home/promo_logo_apple_watch_series_11__5r9c4l119tuy_large_2x.png"
                alt="Logo"
                className="w-76 "
              />

              <h4 className="text-xl text-[17px]">Now supercharged by M4.</h4>

              <div className="flex gap-4 pt-4">
                <button className="bg-[#0066CC] text-[14px] text-white px-6 py-2 rounded-3xl">
                  Learn more
                </button>
                <button className="text-[#0066CC] text-[14px] border border-blue-500 px-6 py-2 rounded-3xl transition-colors duration-200 hover:bg-[#0066CC] hover:text-white">
                  Buy
                </button>
              </div>
            </div>
          </div>

          {/* BOX 5 */}
          <div className="relative w-full h-full gap-2">
            <img
              src="/images/home/promo_iphone_tradein__e4hrjxmgmf0i_large_2x.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-center gap-2">
              <img
                src="/images/home/promo_logo_iphone_tradein__bb7assu7ubo2_large_2x.png"
                alt="Logo"
                className="w-46 "
              />

              <h4 className="text-xl text-[17px]">
                Get up to 195$-695$ in <br />
                credit when you trade in <br />
                iPhone 13 or higher.
              </h4>

              <div className="flex gap-4 pt-2">
                <button className="bg-[#0066CC] text-white text-[14px] px-6 py-2 rounded-3xl">
                  Estimate
                </button>
              </div>
            </div>
          </div>

          {/* BOX 6 */}
          <div className="relative w-full h-full gap-2">
            <img
              src="/images/home/promo_apple_watch_series_11__gnlwqxe1jlu2_large_2x.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-center gap-2">
              <img
                src="/images/home/promo_logo_apple_watch_series_11__5r9c4l119tuy_large_2x.png"
                alt="Logo"
                className="w-76 "
              />

              <h4 className="text-xl text-[17px]">Now supercharged by M4.</h4>

              <div className="flex gap-4 pt-4">
                <button className="bg-[#0066CC] text-[14px] text-white px-6 py-2 rounded-3xl">
                  Learn more
                </button>
                <button className="text-[#0066CC] text-[14px] border border-blue-500 px-6 py-2 rounded-3xl transition-colors duration-200 hover:bg-[#0066CC] hover:text-white">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth section */}
        <div className="mt-3 w-full h-[957px] overflow-hidden">
          <h1 className="text-6xl text-center pt-10">Endless entertainment.</h1>
          {/* Big slide section */}
          <div className="mt-8 px-5">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-[930px] h-[523px] overflow-hidden ">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-8 left-6 right-6 flex items-center gap-6 ">
                      <button className="w-[159px] h-[44px] bg-[#f5f5f7] rounded-full text-[17px]">
                        Stream Now
                      </button>

                      <span className="text-[#f5f5f7] text-[21px]">
                        {slide.description}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Small slides section */}
          <div className="mt-4 px-5">
            <div className="relative">
              <Swiper
                modules={[Pagination, Navigation]}
                slidesPerView="auto"
                spaceBetween={8}
                loop={true}
                pagination={{ clickable: true, el: ".small-swiper-pagination" }}
                navigation={{
                  nextEl: ".small-swiper-next",
                  prevEl: ".small-swiper-prev",
                }}
                className="pb-6"
              >
                {smallSlides.map((slide, index) => (
                  <SwiperSlide key={index} className="!w-[417px]">
                    <div className="relative w-full h-[234px] overflow-hidden shadow-lg">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-white/70 text-[14px]">
                            {slide.label}
                          </p>
                          <h3 className="text-[14px]">{slide.title}</h3>
                        </div>
                        <button className="rounded-full border border-black/70 bg-[#f5f5f7] px-4 py-2 text-[14px] text-black hover:bg-[#fafafa]">
                          {slide.subtitle}
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation buttons */}
              <button className="small-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 ml-2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-black">
                ‹
              </button>
              <button className="small-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 mr-2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-black">
                ›
              </button>

              {/* Pagination container (centered) */}
              <div className="flex justify-center mt-4">
                <div className="small-swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
