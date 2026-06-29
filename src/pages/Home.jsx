import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
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
            <button className="mt-6 bg-[#0066CC] text-white px-6 py-2 rounded-3xl">
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

            <div className="flex gap-4 pt-4">
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
            <h4 className="text-2xl text-[17px] text-white">The world's best in-ear <br /> Active Noise Cancellation.</h4>

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

            <h4 className="text-xl text-[17px]">Get up to 195$-695$ in <br />credit when you trade in <br />iPhone 13 or higher.</h4>

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
       <div className="mt-3 relative w-full h-[957px] overflow-hidden">
        <h1 className="text-6xl pl-3 pt-10 text-center">Endless entertainments.</h1>
        {/* <img
          src="/images/home/hero_macbook_air_m5__eb1idggd120y_mediumtall_2x.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="mac book"
        /> */}
        <div className="h-[523px] bg-gray-300 mt-8">
          <div className="w-[530px] h-full bg-pink-300 flex"></div>
        </div>
      </div>

    </div>
  );
}
