import React, { useEffect } from 'react';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import logo from "../../assets/logo.png";
import mebel1 from "../../assets/mebel1.png";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import logo5 from "../../assets/logo5.svg";
import uz from '../../assets/uz.svg';
import ru from '../../assets/ru.svg';
import en from '../../assets/en.svg';
import TelegramButton from '../telegram/telegram';

const languageOptions = [
  { value: 'en', label: 'English', icon: en },
  { value: 'ru', label: 'Русский', icon: ru },
  { value: 'uz', label: 'O`zbek', icon: uz }
];

const customStyles = {
  control: (base) => ({
    ...base,
    minHeight: 'auto',
    height: '30px',
    border: 'none',
    boxShadow: 'none'
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0 8px'
  }),
  indicatorsContainer: (base) => ({
    ...base,
    height: '30px'
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: '4px'
  }),
  clearIndicator: (base) => ({
    ...base,
    padding: '4px'
  }),
  option: (base) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    padding: '8px'
  }),
  singleValue: (base) => ({
    ...base,
    display: 'flex',
    alignItems: 'center'
  }),
};

function Hero() {
  const { t, i18n } = useTranslation();

  const handleChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  const customSingleValue = ({ data }) => (
    <div className="custom-single-value">
      <img src={data.icon} alt={data.label} style={{ width: 20, marginRight: 10 }} />
      {data.label}
    </div>
  );

  const customOption = (props) => {
    const { innerRef, innerProps, data } = props;
    return (
      <div ref={innerRef} {...innerProps} className="custom-option">
        <img src={data.icon} alt={data.label} style={{ width: 20, marginRight: 10 }} />
        {data.label}
      </div>
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="hero">
      <div className="container">
        <div className="hero-list">
          <ul className="hero-navbar">
            <li className="hero-item">
              <a href="/" className="hero-item-link">
                <img src={logo} alt="logo" className="hero-logo" />
              </a>
            </li>
            <li className="hero-item">
              <Link to="/" className="hero-item-link">{t('home')}</Link>
            </li>
            <li className="hero-item">
              <Link to="/shop" className="hero-item-link">{t('collection')}</Link>
            </li>
            <li className="hero-item">
              <Link to="/about-us" className="hero-item-link">{t('about_us')}</Link>
            </li>
            <li className="hero-item">
              <Link to="/contact-us" className="hero-item-link">{t('contact')}</Link>
            </li>
          </ul>
          <Select
            defaultValue={languageOptions[0]}
            options={languageOptions}
            onChange={handleChange}
            components={{ SingleValue: customSingleValue, Option: customOption }}
            isSearchable={false}
            styles={customStyles}
          />
        </div>
        <div className="hero-box" data-aos="zoom-out">
          <img src={mebel1} alt="Spalni" className="hero-mebel1" />
          <nav className="hero-box-nav"data-aos="zoom-out">
            <h1 className="hero-box-title">{t('bukhara')}</h1>
            <p className="hero-box-text">{t('natural')}</p>
            <p className="hero-text">{t('products')}</p>
          </nav>
        </div>
        <ul className="hero-box-list">
          <li className="hero-box-item" data-aos="zoom-out-left">
            <img src={logo2} alt="logo2" className='hero-logo2'/>
            <nav className="hero-box-navbar">
              <p className="hero-box-navbar-title">{t('free_shipping')}</p>
              <p className="hero-box-navbar-text">{t('free_shipping_text')}</p>
            </nav>
          </li>
          <li className="hero-box-item" data-aos="zoom-out-left">
            <img src={logo3} alt="logo3" className='hero-logo2'/>
            <nav className="hero-box-navbar">
              <p className="hero-box-navbar-title">{t('return_policy')}</p>
              <p className="hero-box-navbar-text">{t('return_policy_text')}</p>
            </nav>
          </li>
          <li className="hero-box-item" data-aos="zoom-out-left">
            <img src={logo4} alt="logo4" className='hero-logo2'/>
            <nav className="hero-box-navbar">
              <p className="hero-box-navbar-title">{t('support_247')}</p>
              <p className="hero-box-navbar-text">{t('support_247_text')}</p>
            </nav>
          </li>
          <li className="hero-box-item" data-aos="zoom-out-left">
            <img src={logo5} alt="logo5" className='hero-logo2' />
            <nav className="hero-box-navbar">
              <p className="hero-box-navbar-title">{t('secure_payment')}</p>
              <p className="hero-box-navbar-text">{t('secure_payment_text')}</p>
            </nav>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
