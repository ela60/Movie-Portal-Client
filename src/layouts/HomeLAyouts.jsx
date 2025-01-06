import React, { useEffect, useState } from 'react';

import LatestNews from '../components/LatestNews';

import Banner from '../components/Banner';
import TrendingMovies from '../components/TrendingMovies';
import UpcomingMovies from '../components/UpcomingMovies';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import FeaterSection from '../FeatureSection/FeaterSection';
import UniqueThemeSection from '../FeatureSection/UniqueThemeSection';
import Navbar from '../components/Navbar';
import SubscriptionPlans from '../components/SubscriptionPlans';

const HomeLayouts = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

 
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  

  return (
    <div className={`font-poppins ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Navbar/>

      <section>
        <UniqueThemeSection/>
      </section>
       

      
        
     
      <section>

        <FeaterSection/>
      </section>
      <section className="mx-auto">
        <LatestNews />
      </section>

      <main>
        <Outlet />
      </main>

      <section className='py-6'>
         <SubscriptionPlans />
      </section>

      <section>
        <TrendingMovies />
      </section>
      <section>
        <UpcomingMovies />
      </section>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayouts;
