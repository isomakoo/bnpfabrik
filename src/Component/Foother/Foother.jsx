import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./Foother.css";
import Apple from "../../assets/apple.png";
import Notbook from "../../assets/notbook.png";
import Soat from "../../assets/soat.png";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Foother() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (millisekundlarda)
      once: true, // Faqat bir marta animatsiya qilinsin
      offset: 50, // Animatsiyani boshlash uchun ekrandan qancha uzoq bo'lishi kerak
      delay: 100, // Animatsiyaga qachon start beriladi (millisekundlarda)
    });
  }, []);

  return (
    <div className="foother">
      <div className="container">
        <h3 className="foother-title">{t('news')}</h3>
        <p className="foother-text">{t('product')}</p>
        <ul className="foother-list">
          <li className="foother-item" data-aos="fade-up">
            <img src={Soat} alt="" className="foother-item-img" />
            <p className="foother-item-text">{t('date')}</p>
            <h3 className="foother-item-title">{t('title')}</h3>
            <p className="foother-list-text">{t('description1')}</p>
          </li>
          <li className="foother-item" data-aos="fade-up">
            <img src={Notbook} alt="" className="foother-item-img" />
            <p className="foother-item-text">{t('date')}</p>
            <h3 className="foother-item-title">{t('title')}</h3>
            <p className="foother-list-text">{t('description2')}</p>
          </li>
          <li className="foother-item" data-aos="fade-up">
            <img src={Apple} alt="" className="foother-item-img" />
            <p className="foother-item-text">{t('date')}</p>
            <h3 className="foother-item-title">{t('title')}</h3>
            <p className="foother-list-text">{t('description3')}</p>
          </li>
        </ul>
        <ul className="foother-navbar">
          <li className="foother-nav-item" data-aos="fade-up">
            <img src={Logo} alt="Logo" className="foother-logo" />
            <p className="foother-nav-item-text">
              {t('about')}
            </p>
          </li>
          <li className="foother-nav-item" data-aos="fade-up">
            <h4 className="foother-nav-item-title">{t('menu')}</h4>
            <Link to="/" className='foother-linkes'>{t('home')}</Link> <br />
            <Link to="/about-us" className='foother-linkes'>{t('aboutUs')} </Link> <br />
            <Link to="/shop" className='foother-linkes'>{t('collection')}</Link> <br />
            <Link to="/contact-us" className='foother-linkes'>{t('contact')}</Link>
          </li>
          <li className="foother-nav-item" data-aos="fade-up">
            <h4 className="foother-nav-item-title">{t('contacts')}</h4>
            <p className="foother-item-nav-text">{t('address')}</p>
            <p className="foother-item-nav-text">{t('email1')}</p>
            <p className="foother-item-nav-text">{t('social1')}</p>
            <p className="foother-item-nav-text">{t('email2')}</p>
            <a href={`tel:${t('phone1')}`} className="foother-nav-link">{t('phone1')}</a> <br />
            <a href={`tel:${t('phone2')}`} className="foother-nav-link">{t('phone2')}</a>
          </li>
          <li className="foother-nav-item" data-aos="fade-up">
            <h4 className="foother-nav-item-title">{t('subscribe')}</h4>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Elektron pochtangizni kiriting"
                className="email-input"
              />
              <button type="submit" className="subscribe-button">
                Obuna Bo‘ling
              </button>
            </form>
          </li>
        </ul>
      </div>
      <div className="foother-foother">
        <p className="foother-foother-text">
          {t('copyright')}
        </p>
      </div>
    </div>
  );
}

export default Foother;
