import React, { useState, useEffect, useCallback } from "react";
import "./tuplam.css";
import productData from "../Product/product";
import logo from "../../assets/logo.png";
import Select from "react-select";
import uz from "../../assets/uz.svg";
import ru from "../../assets/ru.svg";
import en from "../../assets/en.svg";
import "../Foother/Foother.css";
import Group1 from "../../assets/group1.png";
import AOS from "aos";
import "aos/dist/aos.css";
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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

  // Debounce function for search input
  const debouncedSearch = useCallback(
    debounce((query) => setSearchQuery(query), 300),
    []
  );

  const handleSearchChange = (event) => {
    debouncedSearch(event.target.value.toLowerCase());
  };

  const getProducts = () => {
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

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().startsWith(searchQuery)
    );

    return filteredProducts;
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="hero" data-aos="fade-down">
        <div className="container">
          <div className="hero-list">
            <ul className="hero-navbar">
              <li className="hero-item" data-aos="fade-right">
                <a href="/" className="hero-item-link">
                  <img src={logo} alt="logo" className="hero-logo" />
                </a>
              </li>
              <li className="hero-item" data-aos="fade-right" data-aos-delay="100">
                <Link to="/" className="hero-item-link">
                  {t("home")}
                </Link>
              </li>
              <li className="hero-item" data-aos="fade-right" data-aos-delay="200">
                <Link to="/shop" className="hero-item-link">
                  {t("collection")}
                </Link>
              </li>
              <li className="hero-item" data-aos="fade-right" data-aos-delay="300">
                <Link to="/about-us" className="hero-item-link">
                  {t("about_us")}
                </Link>
              </li>
              <li className="hero-item" data-aos="fade-right" data-aos-delay="400">
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
              data-aos="fade-left"
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
              data-aos="fade-left"
              data-aos-delay="100"
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
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="tuplam-input"
          data-aos="fade-up"
        />
        <div className="contact" data-aos="fade-up" data-aos-delay="100">
          <div className="season-links">
            <h2>{selectedSeason}</h2>
            <button
              onClick={() => handleSeasonClick("All")}
              className={selectedSeason === "All" ? "active" : ""}
              data-aos="fade-up"
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
                  data-aos="fade-up"
                  data-aos-delay={100 + Object.keys(extendedProductData).indexOf(season) * 100}
                >
                  {season}
                </button>
              ))}
            </div>
            <br />
          </div>
          <div className="category-container" data-aos="fade-up" data-aos-delay="200">
            {getProducts().length > 0 ? (
              <ul className="tuplam-list">
                {getProducts().map((product) => (
                  <li key={`product-${product.id}-${product.season}`} className="product-item" data-aos="fade-up" data-aos-delay="300">
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
              <div className="product-nete" data-aos="fade-up" data-aos-delay="300">
                <p className="product-net">Mahsulotlar topilmadi</p>
              </div>
            )}
          </div>
        </div>
        <ul className="foother-navbar">
          {/* Footer items */}
        </ul>
      </div>
      <div className="foother-foother" data-aos="fade-up">
        <p className="foother-foother-text">{t("copyright")}</p>
      </div>
    </>
  );
}

export default Tuplam;
