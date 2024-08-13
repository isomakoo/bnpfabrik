import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./tuplam.css";
import productData from "../Product/product";
import logo from "../../assets/logo.png";
import Select from "react-select";
import uz from "../../assets/uz.svg";
import ru from "../../assets/ru.svg";
import en from "../../assets/en.svg";
import "../Foother/Foother.css";
import Group1 from "../../assets/group1.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";
import debounce from "lodash/debounce";

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

function Tuplam() {
  const { t, i18n } = useTranslation();
  
  const [selectedSeason, setSelectedSeason] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  // Initialize debounce function
  const debouncedSearch = useCallback(
    debounce((query) => setSearchQuery(query), 300),
    []
  );

  useEffect(() => {
    return () => {
      // Clean up debounce on component unmount
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

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

  const extendedProductData = {
    ...productData,
    Bahorgi: [], // Empty array for "Bahorgi" season
  };

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
  };

  const handleSearchChange = (event) => {
    debouncedSearch(event.target.value.toLowerCase());
  };

  const filteredProducts = useMemo(() => {
    const products = selectedSeason === "All"
      ? Object.keys(extendedProductData).flatMap((season) =>
          extendedProductData[season].map((product) => ({
            ...product,
            season,
          }))
        )
      : (extendedProductData[selectedSeason] || []).map((product) => ({
          ...product,
          season: selectedSeason,
        }));

    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
  }, [selectedSeason, searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
  };

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
                <Link to="/" className="hero-item-link">
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
              className="open-menu"
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
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
        </div>
      </div>
      <div className="tuplamjon">
        <div className="tuplam-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="tuplam-input"
          />
          {searchQuery && (
            <button className="clear-btn" onClick={clearSearch}>
              &times; {/* X belgisi */}
            </button>
          )}
        </div>
        <div className="contact">
          <div className="season-links">
            <h2>{selectedSeason}</h2>
            <button
              onClick={() => handleSeasonClick("All")}
              className={selectedSeason === "All" ? "active" : ""}
            >
              All
            </button>
            <br />
            <div>
              {Object.keys(extendedProductData).map((season) => (
                <button
                  key={`season-${season}`}
                  onClick={() => handleSeasonClick(season)}
                  className={selectedSeason === season ? "active" : ""}
                >
                  {season}
                </button>
              ))}
            </div>
            <br />
          </div>
          <div className="category-container">
            {filteredProducts.length > 0 ? (
              <ul className="tuplam-list">
                {filteredProducts.map((product) => (
                  <li key={`product-${product.id}-${product.season}`} className="product-item">
                    <Link to={`/product/${product.season}/${product.id}`}>
                      <img
                        src={product.img}
                        alt={product.alt}
                        className="product-image"
                      />
                      <p className="product-text">{product.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="product-nete">
                <p className="product-net">Mahsulotlar topilmadi</p>
              </div>
            )}
          </div>
        </div>
        <ul className="foother-navbar">
          {/* Footer items */}
        </ul>
        <ul className="foother-navbar">
          <li className="foother-nav-item" data-aos="fade-up">
            <img src={logo} alt="Logo" className="foother-logo" />
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
        <p className="foother-foother-text">{t("copyright")}</p>
      </div>
    </>
  );
}

export default Tuplam;
