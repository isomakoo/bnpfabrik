import React, { useState } from "react";
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

const languageOptions = [
  { value: "en", label: "English", icon: en },
  { value: "ru", label: "Русский", icon: ru },
  { value: "uz", label: "O`zbekcha", icon: uz },
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

  const [selectedSeason, setSelectedSeason] = useState("All");
  const extendedProductData = {
    ...productData,
    Bahorgi: [], // Empty array for "Bahorgi" season
  };

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
  };

  const getProducts = () => {
    if (selectedSeason === "All") {
      return Object.keys(extendedProductData).flatMap((season) =>
        extendedProductData[season].map((product) => ({
          ...product,
          season,
        }))
      );
    } else {
      return (extendedProductData[selectedSeason] || []).map((product) => ({
        ...product,
        season: selectedSeason,
      }));
    }
  };

  return (
    <div>
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
                key={season}
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
          {getProducts().length > 0 ? (
            <ul className="tuplam-list">
              {getProducts().map((product) => (
                <li key={product.id} className="product-item">
                  <Link to={`/product/${product.season}/${product.id}`}>
                    <img
                      src={product.img}
                      alt={product.alt}
                      className="product-image"
                    />
                    <p>{product.name}</p>
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
        <ul className="foother-navbar">
          {/* Your footer items here */}
        </ul>
      </div>
      <div className="foother-foother">
        <p className="foother-foother-text">{t("copyright")}</p>
      </div>
    </div>
  );
}

export default Tuplam;
