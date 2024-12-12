import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutUs = () => {
 
  const administrators = [
    {
      id: 1,
      name: "shraddha kapoor",
      role: "CEO",
      image: "https://i.ibb.co.com/5KjPv12/8ya-Sr-PVGp07q-UK4ks-Khlxpm-Ok7-T.jpg", 
      email: "shraddha@gmail.com",
      bio: "Leading our team to redefine the movie-watching experience.",
    },
    {
      id: 2,
      name: "Ambia Ela",
      role: "Administrator",
      image: "https://i.ibb.co.com/BLC2VYw/Whats-App-Image-2024-10-11-at-9-45-47-PM.jpg", 
      email: "ela60@gmail.com",
      bio: "Ensuring seamless platform operations and user satisfaction.",
    },
    {
      id: 3,
      name: "Alia Bhatt",
      role: "CTO",
      image: "https://i.ibb.co.com/kH1TtBh/1900x1900-000000-80-0-0.jpg", 
      email: "alia.johnson@example.com",
      bio: "Driving technology innovation to enhance user engagement.",
    },
  ];

  return (
    <div>
      <Navbar />
     
      <div className="relative bg-gradient-to-br from-indigo-700 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-opacity-10">
          <svg
            className="absolute -top-16 left-0 w-64 h-64 opacity-30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="100" fill="url(#gradient)" />
            <defs>
              <linearGradient
                id="gradient"
                x1="100"
                y1="0"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFF" stopOpacity="0.2" />
                <stop offset="1" stopColor="#FFF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg">
            About Us
          </h1>
          <p className="mt-4 text-lg font-light max-w-3xl text-center text-gray-200">
            Discover a world of cinema, crafted for movie enthusiasts.
            Experience the latest blockbusters and timeless classics in one place.
          </p>
        </div>
      </div>

     

       
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {administrators.map((admin) => (
              <div
                key={admin.id}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <img
                  src={admin.image}
                  alt={admin.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  {admin.name}
                </h3>
                <p className="text-blue-600">{admin.role}</p>
                <p className="text-gray-600 text-sm mt-2 mb-4">{admin.bio}</p>
                <a
                  href={`mailto:${admin.email}`}
                  className="text-blue-500 underline"
                >
                  {admin.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* About Us Content */}
       <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-16 px-8 bg-gray-100">
       
        <div className="flex-shrink-0">
          <img
            src="https://i.ibb.co/dKfd87R/images-2.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Right Section - Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Who We Are</h2>
          <p className="text-lg text-purple-800 mb-6">
            Welcome to Movie Portal! We are a team of passionate movie buffs
            committed to bringing you a one-stop destination for all things
            cinema. From the latest releases to hidden gems, we have it all.
          </p>
          <p className="text-lg text-blue-800">
            Our mission is to inspire and connect movie enthusiasts through a
            user-friendly platform. Stay tuned for updates, and let’s celebrate
            the magic of movies together.
          </p>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-16 bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Vision & Mission</h2>
          <p className="text-lg mb-6">
            Our vision is to become the ultimate destination for movie lovers
            worldwide, fostering a vibrant community around the joy of cinema.
          </p>
          <p className="text-lg">
            We strive to deliver a seamless and enriching movie experience by
            offering curated content, personalized recommendations, and an
            ever-growing collection of films for every taste.
          </p>
        </div>
      </div>

     

      <Footer />
    </div>
  );
};

export default AboutUs;
