import React, { useEffect, useState } from "react";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Select from "react-select";
import logo from "../../assets/logo.png";
import mebel1 from "../../assets/mebel1.png";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import logo5 from "../../assets/logo5.svg";
import uz from "../../assets/uz.svg";
import ru from "../../assets/ru.svg";
import en from "../../assets/en.svg";
import TelegramButton from "../telegram/telegram";
import Modal from "../modal/modal";

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

function Hero() {
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="open-menu"
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
        <div className="hero-box" data-aos="fade-up">
          <img src={mebel1} alt="Spalni" className="hero-mebel1" />
          <nav className="hero-box-nav">
            <h1 className="hero-box-title">{t("bukhara")}</h1>
            <p className="hero-box-text">{t("natural")}</p>
            <p className="hero-text">{t("products")}</p>
          </nav>
        </div>
        <ul className="hero-box-list">
          <li className="hero-box-item" data-aos="fade-up" data-aos-delay="100">
            <img src={logo2} alt="logo2" className="hero-logo2" />
            <nav className="hero-box-navbar">
              <p className="hero-box-navbar-title">{t("free_shipping")}</p>
              <p className="hero-box-navbar-text">{t("free_shipping_text")}</p>
            </nav>
          </li>
          <li className="hero-box-item" data-aos="fade-up" data-aos-delay="200">
            <img src={logo3} alt="logo3" className="hero-logo2" />
            <nav className="hero-box-navbar">
              <p className="hero-box-navbar-title">{t("return_policy")}</p>
              <p className="hero-box-navbar-text">{t("return_policy_text")}</p>
            </nav>
          </li>
          <li className="hero-box-item" data-aos="fade-up" data-aos-delay="300">
            <img src={logo4} alt="logo4" className="hero-logo2" />
            <nav className="hero-box-navbar">
              <p className="hero-box-navbar-title">{t("support_247")}</p>
              <p className="hero-box-navbar-text">{t("support_247_text")}</p>
            </nav>
          </li>
          <li className="hero-box-item" data-aos="fade-up" data-aos-delay="400">
            <img src={logo5} alt="logo5" className="hero-logo2" />
            <nav className="hero-box-navbar">
              <p className="hero-box-navbar-title">{t("secure_payment")}</p>
              <p className="hero-box-navbar-text">{t("secure_payment_text")}</p>
            </nav>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
