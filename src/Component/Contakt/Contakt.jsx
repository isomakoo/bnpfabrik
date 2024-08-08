import "./Contakt.css";
import "../Hero/Hero.css";
import "../Foother/Foother.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import Select from "react-select";
import uz from "../../assets/uz.svg";
import ru from "../../assets/ru.svg";
import en from "../../assets/en.svg";
import tel from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import laction from "../../assets/location.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Foother/Foother.css";

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

function Contakt() {
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
                <Link to="/" className="hero-item-link">
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
          <div className="contact-list">
            <nav className="contact-item" >
              <h3 className="contact-title">Aloqa</h3>
              <form className="contact-input-container">
                <input
                  type="email"
                  required
                  className="contact-input"
                  placeholder="Sizning elektron manzilingiz"
                />{" "}
                <br />
                <input
                  type="tel"
                  className="contact-input"
                  placeholder="Telefon raqamingiz"
                />{" "}
                <br />
                <input
                  type="text"
                  required
                  className="contact-input-text"
                  placeholder="Sizning xabaringiz shu yerda"
                />{" "}
                <br />
                <button className="contact-btn">Submit</button>
              </form>
            </nav>
            <iframe
              title="Bukhara Natural Product Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484413.1768652228!2d64.5298351514944!3d39.77318183514678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3d8cf9ddfc54b1%3A0x1d72bdf7d151f24!2z0JrQvtC-0LLQvtCz0LDRjCDQkNHRt9C-0JLQvtC-0LLQ!5e0!3m2!1sen!2s!4v1631123456789"
               className="contact-kart"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <ul className="contact-navbar">
            <li className="contact-items">
              <img src={email} alt="rasm" className="contact-img" />
              <a href="email:bnpfabric@gmail.com" className="contact-link">
                <span className="span-title">Email:</span>
                Infobnpfabric@gmail.com
              </a>
            </li>
            <li className="contact-items">
              <img src={tel} alt="rasm" className="contact-img" />
              <a href="tel:+998933837585" className="contact-link">
                <span className="span-title">Tel:</span>+998 93 383 75 85
              </a>
            </li>
            <li className="contact-items">
              <img src={laction} alt="rasm" className="contact-img" />
              <a href="email:bnpfabric@gmail.com" className="contact-link">
                <span className="span-title">Manzil:</span>Buxoro, st alpomish
                80 uy
              </a>
            </li>
          </ul>
          <ul className="foother-navbar">
            <li
              className="foother-nav-item"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
            >
              <img src={logo} alt="Logo" className="foother-logo" />
              <p className="foother-nav-item-text">{t("about")}</p>
            </li>
            <li
              className="foother-nav-item"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
            >
              <h4 className="foother-nav-item-title">{t("menu")}</h4>
              <Link to="/">{t("home")}</Link> <br />
              <Link to="/shop">{t("aboutUs")}</Link> <br />
              <Link to="/about-us">{t("collection")}</Link> <br />
              <Link to="/contact-us">{t("contact")}</Link>
            </li>
            <li
              className="foother-nav-item"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
            >
              <h4 className="foother-nav-item-title">{t("contacts")}</h4>
              <p className="foother-item-nav-text">{t("address")}</p>
              <p className="foother-item-nav-text">{t("email1")}</p>
              <p className="foother-item-nav-text">{t("social1")}</p>
              <p className="foother-item-nav-text">{t("email2")}</p>
              <a href={`tel:${t("phone1")}`} className="foother-nav-link">
                {t("phone1")}
              </a>{" "}
              <br />
              <a href={`tel:${t("phone2")}`} className="foother-nav-link">
                {t("phone2")}
              </a>
            </li>
            <li
              className="foother-nav-item"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
            >
              <h4 className="foother-nav-item-title">{t("subscribe")}</h4>
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
          <p className="foother-foother-text">{t("copyright")}</p>
        </div>
      </div>
    </>
  );
}

export default Contakt;
