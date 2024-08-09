import React, { useEffect, useState } from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import productData from "../Product/product";
import logo from "../../assets/logo.png";
import '../Hero/Hero.css';
import Select from "react-select";
import uz from "../../assets/uz.svg";
import ru from "../../assets/ru.svg";
import en from "../../assets/en.svg";
import '../Foother/Foother.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Main.css'

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

function Main() {
  const { id, season } = useParams();
  const { t, i18n } = useTranslation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    AOS.init();

    if (season && id) {
      const categoryProducts = productData[season] || [];
      const foundProduct = categoryProducts.find(
        (item) => item.id === parseInt(id, 10)
      );
      setProduct(foundProduct);
    } else {
      console.error("Invalid season or id");
    }
  }, [id, season]);

  if (!product) {
    return <p>{t("product_not_found")}</p>;
  }

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
                  {t("contact")}
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
            />
          </div>
        </div>
      </div>
      <div className="product">
        <div className="container">
          <div className="product-detail">
            <div className="image-container">
              <Zoom>
                <img src={product.img} alt={product.alt} id="product-img" data-aos="zoom-out-right" />
              </Zoom>
            </div>
            <table className="product-table" data-aos="zoom-in-left">
              <tbody>
                <tr>
                  <th>{t("material")}</th>
                  <td>{product.material}</td>
                </tr>
                <tr>
                  <th>{t("size")}</th>
                  <td>{product.size}</td>
                </tr>
                <tr>
                  <th>{t("category")}</th>
                  <td>{product.category}</td>
                </tr>
                <tr>
                  <th>{t("manufacturer")}</th>
                  <td>{product.manufacturer}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="product-text" data-aos="fade-up" data-aos-duration="1000">{t("description")}: {product.description}</p>
        </div>
        <div className="container">
          <ul className="foother-navbar">
            <li className="foother-nav-item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
              <img src={logo} alt="Logo" className="foother-logo" />
              <p className="foother-nav-item-text">{t('about')}</p>
            </li>
            <li className="foother-nav-item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
              <h4 className="foother-nav-item-title">{t('menu')}</h4>
              <Link to="/">{t('home')}</Link> <br />
              <Link to="/">{t('aboutUs')}</Link> <br />
              <Link to="/">{t('collection')}</Link> <br />
              <Link to="/">{t('contact')}</Link>
            </li>
            <li className="foother-nav-item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
              <h4 className="foother-nav-item-title">{t('contacts')}</h4>
              <p className="foother-item-nav-text">{t('address')}</p>
              <p className="foother-item-nav-text">{t('email1')}</p>
              <p className="foother-item-nav-text">{t('social1')}</p>
              <p className="foother-item-nav-text">{t('email2')}</p>
              <a href={`tel:${t('phone1')}`} className="foother-nav-link">{t('phone1')}</a> <br />
              <a href={`tel:${t('phone2')}`} className="foother-nav-link">{t('phone2')}</a>
            </li>
            <li className="foother-nav-item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
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
    </>
  );
}

export default Main;
