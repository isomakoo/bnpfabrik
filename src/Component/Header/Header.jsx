import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
import mebel2 from "../../assets/mebel2.png";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import productData from "../Product/product";
import spalni2 from "../../assets/spalni2.png";
import spalni3 from "../../assets/saplni3.png";

function Header() {
  const { t } = useTranslation();
  const fallProducts = productData.Kuz || [];
  const winterProducts = productData.Qish || [];
  const summerProducts = productData.Yozgi || [];

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animatsiya davomiyligi
      offset: 120, // Animatsiya boshlanishi uchun masofa
      once: true, // Bir marta faqat bajarish
    });
    AOS.refresh(); // AOS'ni yangilash
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate("/shop");
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-list" data-aos="fade-up">
          <h2 className="header-list-titles">
            <span className="titles-span">100%</span> <br />
            {t("header_material_quality")}
          </h2>
          <img
            src={mebel2}
            alt="Mebel2"
            className="header-mebel2"
            data-aos="fade-down"
          />
          <nav className="header-list-nav">
            <h2 className="header-list-title">"Buxoro Tabiiy Mahsuloti"</h2>
            <p className="header-list-text">{t("header_company_desc")}</p>
            <button className="header-list-btn" onClick={handleClick}>
              {t("header_collection")}
            </button>
          </nav>
        </div>
        <h2 className="header-title" data-aos="fade-in">
          {t("header_winter_collection")}
        </h2>
        <p className="header-text">Buxoro tabiiy mahsuloti</p>
        <ul className="header-navbar">
          {winterProducts.map((item) => (
            <li
              className="header-item"
              key={`Qish-${item.id}`}
              data-aos="fade-in"
            >
              <Link to={`/product/Qish/${item.id}`}>
                <img src={item.img} alt={item.alt} className="header-logo" />
                <p className="header-navbar-text">{t(item.name)}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="header-list-kuz" data-aos="fade-up">
          <h2 className="header-list-titles">
            <span className="titles-span">100%</span> <br />
            {t("header_material_quality")}
          </h2>
          <img
            src={spalni3}
            alt="Mebel2"
            className="header-mebel2"
            data-aos="fade-down"
          />
          <nav className="header-list-nav">
            <h2 className="header-list-title">"Buxoro Tabiiy Mahsuloti"</h2>
            <p className="header-list-text">{t("header_company_desc")}</p>
            <button className="header-list-btn" onClick={handleClick}>
              {t("header_collection")}
            </button>
          </nav>
        </div>
        <h2 className="header-title" data-aos="fade-in">
          {t("header_autumn_collection")}
        </h2>
        <p className="header-text">Buxoro tabiiy mahsuloti</p>
        <ul className="header-navbar">
          {fallProducts.map((item) => (
            <li
              className="header-item"
              key={`Kuz-${item.id}`}
              data-aos="fade-in"
            >
              <Link to={`/product/Kuz/${item.id}`}>
                <img src={item.img} alt={item.alt} className="header-logo" />
                <p className="header-navbar-text">{t(item.name)}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="header-list-yozgi" data-aos="fade-up">
          <h2 className="header-list-titles">
            <span className="titles-span">100%</span> <br />
            {t("header_material_quality")}
          </h2>
          <img
            src={spalni2}
            alt="Mebel2"
            className="header-mebel2"
            data-aos="fade-down"
          />
          <nav className="header-list-nav">
            <h2 className="header-list-title">"Buxoro Tabiiy Mahsuloti"</h2>
            <p className="header-list-text">{t("header_company_desc")}</p>
            <button className="header-list-btn" onClick={handleClick}>
              {t("header_collection")}
            </button>
          </nav>
        </div>
        <h2 className="header-title" data-aos="fade-in">
          {t("header_summer_collection")}
        </h2>
        <p className="header-text">Buxoro tabiiy mahsuloti</p>
        <ul className="header-navbar">
          {summerProducts.map((item) => (
            <li
              className="header-item"
              key={`Yozgi-${item.id}`}
              data-aos="fade-in"
            >
              <Link to={`/product/Yozgi/${item.id}`}>
                <img src={item.img} alt={item.alt} className="header-logo" />
                <p className="header-navbar-text">{t(item.name)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
