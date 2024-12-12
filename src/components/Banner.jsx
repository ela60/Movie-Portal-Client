import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-full h-auto bg-gray-900">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-80 md:h-[450px] w-full bg-cover bg-center flex items-center justify-center relative"
            style={{
              backgroundImage: `url('https://i.ibb.co/YfhgBnx/download.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative text-center text-white p-6 rounded">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                🎬 Movie Magic
              </h2>
              <p className="text-lg md:text-xl">
                Explore the world of cinema with our curated movie collections!
              </p>
              <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold shadow-md transition">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-80 md:h-[450px] w-full bg-cover bg-center flex items-center justify-center relative"
            style={{
              backgroundImage: `url('https://i.ibb.co/fp1VJ37/600-Bill-Ted.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative text-center text-white p-6 rounded">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                🌟 Discover New Releases
              </h2>
              <p className="text-lg md:text-xl">
                Stay updated with the latest blockbuster movies!
              </p>
              <button className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 rounded text-white font-semibold shadow-md transition">
                View New Releases
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-80 md:h-[450px] w-full bg-cover bg-center flex items-center justify-center relative"
            style={{
              backgroundImage: `url('https://i.ibb.co/XpVFkbM/bf170ef52dc4a71e48b0f17b16b04b80.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative text-center text-white p-6 rounded">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                ❤️ Your Favorites
              </h2>
              <p className="text-lg md:text-xl">
                Save and enjoy your favorite movies anytime, anywhere.
              </p>
              <button className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 rounded text-white font-semibold shadow-md transition">
                View Favorites
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
