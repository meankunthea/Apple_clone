import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar/>
      {/* First Section */}

      {/* Hero */}
      <div className="relative w-full h-screen">
  
        {/* Background image */}
        <img
          src="/images/background_homepage.jpg"
          alt="father day"
          className="w-full h-full object-cover"
        />

        {/* Text on image */}
        <div className="absolute inset-0 flex flex-col items-center  text-center pt-20 ">
          <h1 className="text-6xl font-semibold">Father's Day</h1>
          <h4 className="text-2xl pt-2">It's not too late to find the perfect gift.</h4>
          <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-3xl">
            Shop
          </button>
        </div>

      </div>

      {/* Second section */}
    <div className="mt-3 relative w-full h-[600px] overflow-hidden">
      <img
        src="https://www.apple.com/v/home/images/college-students-2026/a/hero_college_students_2026__dzrtx52rt9aq_large_2x.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="college students"
      />

      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center text-black">
        <h1 className="text-6xl font-semibold">Apple College.</h1>
        <h4 className="text-2xl mt-2">Mac and iPad. Major in any field.</h4>

        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-3xl">
          Learn more
        </button>
      </div>
    </div>
      {/* Third section */}
    <div className="mt-3 relative w-full h-[600px] overflow-hidden">
     <img
        src="https://www.apple.com/v/home/images/iphone-family/a/hero_iphone_family__be5jkzxszb1e_large_2x.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="iphone family"
      />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center text-black">
        <h1 className="text-6xl font-semibold">iPhone</h1>
        <h4 className="text-2xl mt-2">Meet the latest iPhone lineup.</h4>

        <div className="space-x-4">
           <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-3xl">
              Learn more
            </button>
            <button className="mt-6 bg-white text-blue-500 border border-blue-500 px-6 py-2 rounded-3xl transition-colors duration-200 hover:bg-blue-500 hover:text-white">
              Shop iPhone
            </button>
        </div>
      </div>
    </div>

     {/* Fourth section */}
    <div className="mt-3 w-full h-[600px] flex">
      <div className="bg-pink-200">
        fghj
      </div>
      <div className="bg-blue-400">
        vbnm
      </div>
    </div>

    </div>
  );
}