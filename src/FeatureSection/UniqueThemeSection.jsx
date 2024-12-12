import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import uniqueThemeImage from "../assets/image_750x_6662edfacf1cb.jpg"; 


const UniqueThemeSection = () => {
 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div>
      <section className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${uniqueThemeImage})` }}
        ></div>

       
        <div className="relative z-10 flex flex-col items-center justify-center py-16 px-4 md:py-20 md:px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-yellow-400 drop-shadow-lg">
            Explore the World of Movie Portal
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl">
            Immerse yourself in the magic of movies with the latest blockbusters,
            timeless classics, and hidden gems. Curated for movie lovers like you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="/allmovies"
              className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full hover:bg-yellow-600 shadow-lg transition duration-300"
            >
              Browse All Movies
            </a>
            <a
              href="/latest"
              className="px-6 py-3 bg-gray-800 border border-yellow-500 font-semibold rounded-full text-yellow-400 hover:bg-gray-700 shadow-lg transition duration-300"
            >
              Latest Releases
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-500 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 sm:w-48 sm:h-48 bg-yellow-500 opacity-20 rounded-full animate-pulse"></div>

        {/* Featured Movie Posters */}
        <div className="relative z-10 mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:gap-6 md:px-6 max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://i.ibb.co/jz4C9t1/Feature-Image.jpg"
              alt="Movie Poster"
              className="w-full h-44 md:h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-yellow-400">Tum Keya Mile</h3>
              <p className="text-sm text-gray-300">Genre | Year | Duration</p>
              <p className="text-sm text-gray-300 mt-2">⭐ Rating: 9.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <Slider {...sliderSettings}>
            {/* Slide 1 */}
            <div className="p-6 text-center bg-gray-900 text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow-400">Why Choose Us?</h3>
              <p className="text-sm text-gray-300 mt-2">
                We offer an unmatched movie experience with the latest releases and
                carefully curated collections.
              </p>
            </div>
            {/* Slide 2 */}
            <div className="p-6 text-center bg-gray-900 text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow-400">Our Vision</h3>
              <p className="text-sm text-gray-300 mt-2">
                To create the ultimate platform for movie lovers worldwide.
              </p>
            </div>
            {/* Slide 3 */}
            <div className="p-6 text-center bg-gray-900 text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow-400">Join the Community</h3>
              <p className="text-sm text-gray-300 mt-2">
                Connect with fellow movie buffs and explore cinema like never before.
              </p>
            </div>
          </Slider>
        </div>
      </div>

     
    </div>
  );
};

export default UniqueThemeSection;
