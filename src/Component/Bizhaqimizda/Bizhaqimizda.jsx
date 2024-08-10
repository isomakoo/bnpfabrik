import "./Bizhaqimizda.css";
import "../Hero/Hero.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import Select from "react-select";
import uz from "../../assets/uz.svg";
import ru from "../../assets/ru.svg";
import en from "../../assets/en.svg";
import '../Foother/Foother.css'
import Group1  from "../../assets/group1.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from "../modal/modal";
import { useState } from "react";
const languageOptions = [
  { value: "en", label: "English", icon: en },
  { value: "ru", label: "Русский", icon: ru },
  { value: "uz", label: "O`zbek", icon: uz },
];

const customStyles = {
  control: (base) => ({
    ...base,
    minHeight: "auto",
    height: "30px",
    border: "none",
    boxShadow: "none",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 8px",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    height: "30px",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: "4px",
  }),
  clearIndicator: (base) => ({
    ...base,
    padding: "4px",
  }),
  option: (base) => ({
    ...base,
    display: "flex",
    alignItems: "center",
    padding: "8px",
  }),
  singleValue: (base) => ({
    ...base,
    display: "flex",
    alignItems: "center",
  }),
};

function Bizhaqimizda() {
  const { t, i18n } = useTranslation();

  const handleChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  const customSingleValue = ({ data }) => (
    <div className="custom-single-value">
      <img
        src={data.icon}
        alt={data.label}
        style={{ width: 20, marginRight: 10 }}
      />
      {data.label}
    </div>
  );

  const customOption = (props) => {
    const { innerRef, innerProps, data } = props;
    return (
      <div ref={innerRef} {...innerProps} className="custom-option">
        <img
          src={data.icon}
          alt={data.label}
          style={{ width: 20, marginRight: 10 }}
        />
        {data.label}
      </div>
    );
  };
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
      setModalOpen(true);
  };

  const closeModal = () => {
      setModalOpen(false);
  };


  return (
    <>
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
                <Link to="/" className="hero-item-link">
                  {t("home")}
                </Link>
              </li>
              <li className="hero-item">
                <Link to="/shop" className="hero-item-link">
                  {t("collection")}
                </Link>
              </li>
              <li className="hero-item">
                <Link to="/about-us" className="hero-item-link">
                  {t("about_us")}
                </Link>
              </li>
              <li className="hero-item">
                <Link to="/contact-us" className="hero-item-link">
                  {t("contacts")}
                </Link>
              </li>
            </ul>
            <Select
              defaultValue={languageOptions[0]}
              options={languageOptions}
              onChange={handleChange}
              components={{
                SingleValue: customSingleValue,
                Option: customOption,
              }}
              isSearchable={false}
              styles={customStyles}
              id="hero-select"
            />
            <svg
          onClick={openModal}
           className="hero-btn"
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="open-menu"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z"
              fill="currentColor"
            ></path>
            <path
              d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z"
              fill="currentColor"
            ></path>
            <path
              d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z"
              fill="currentColor"
            ></path>
          </svg>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div>
          <div className="haqimizda-list">
      <nav className="haqimisda-item">
        <h3 className="haqimizda-title">{t('company_name')}</h3>
        <p className="haqimizda-text">{t('description.para1')}</p>
        <p className="haqimizda-text">{t('description.para2')}</p>
        <p className="haqimizda-text">{t('description.para3')}</p>
        <p className="haqimizda-text">{t('description.para4')}</p>
        <p className="haqimizda-text">{t('description.para5')}</p>
        <p className="haqimizda-text">{t('description.para6')}</p>
        <p className="haqimizda-text">{t('description.para7')}</p>
        <p className="haqimizda-text">{t('description.para8')}</p>
        <p className="haqimizda-text">{t('description.para9')}</p>
        <p className="haqimizda-text">{t('description.para10')}</p>
        <p className="haqimizda-text">{t('description.para11')}</p>
      </nav>
      <img src={Group1} alt="rasm" className="haqimizda-img" />
    </div>
          <ul className="foother-navbar">
            <li className="foother-nav-item" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
              <img src={logo} alt="Logo" className="foother-logo" />
              <p className="foother-nav-item-text">
                {t('about')}
              </p>
            </li>
            <li className="foother-nav-item" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
              <h4 className="foother-nav-item-title">{t('menu')}</h4>
              <Link to="/">{t('home')}</Link> <br />
              <Link to="/shop">{t('aboutUs')}</Link> <br />
              <Link to="/about-us">{t('collection')}</Link> <br />
              <Link to="/contact-us">{t('contacts')}</Link>
            </li>
            <li className="foother-nav-item" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
              <h4 className="foother-nav-item-title">{t('contacts')}</h4>
              <p className="foother-item-nav-text">{t('address')}</p>
              <p className="foother-item-nav-text">{t('email1')}</p>
              <p className="foother-item-nav-text">{t('social1')}</p>
              <p className="foother-item-nav-text">{t('email2')}</p>
              <a href={`tel:${t('phone1')}`} className="foother-nav-link">{t('phone1')}</a> <br />
              <a href={`tel:${t('phone2')}`} className="foother-nav-link">{t('phone2')}</a>
            </li>
            <li className="foother-nav-item" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">
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
              <p className="foother-item-nav-text"></p>
            </li>
          </ul>
        </div>
        <div className="foother-foother">
          <p className="foother-foother-text">
            {t('copyright')}
          </p>
        </div>
      </div>
    </>
  );
}

export default Bizhaqimizda;
