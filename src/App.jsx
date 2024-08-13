import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'flag-icon-css/css/flag-icons.min.css';
import 'aos/dist/aos.css'; // AOS CSS faylini import qiling
import './App.css';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Home from './Component/Home/Home';
import Foother from './Component/Foother/Foother';
import TelegramButton from './Component/telegram/telegram';
import Main from './Component/Main/Main';
import Bizhaqimizda from './Component/Bizhaqimizda/Bizhaqimizda';
import Contakt from './Component/Contakt/Contakt';
import Tuplam from './Component/tuplam/tuplam';
import { useTranslation } from 'react-i18next';
import AOS from 'aos'; // AOS kutubxonasini import qiling

function App() {
  
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('title');
    AOS.init({
      duration: 500, // animatsiya davomiyligi
      offset: 120, // animatsiya boshlanishi uchun masofa
      once: true, // bir marta faqat bajarish
    });
  }, [t]);

  return (
    <> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/product/:season/:id" element={<Main />} />
        <Route path='/shop' element={<Tuplam />} />
        <Route path="/about-us" element={<Bizhaqimizda />} /> 
        <Route path='/contact-us' element={<Contakt />} />
      </Routes>
      <TelegramButton />
    </>
  );
}

export default App;
