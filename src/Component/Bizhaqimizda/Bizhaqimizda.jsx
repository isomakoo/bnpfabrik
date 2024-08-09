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
          <div className="haqimizda-list" >
            <nav className="haqimisda-item" >
              <h3 className="haqimizda-title">Buxoro tabiiy mahsuloti</h3>
              <p className="haqimizda-text">
                Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko
                sumkalarFabrikamız ko'p yillar davomida butun dunyoda
                foydalanish uchun paxta matolarini ishlab chiqaradigan kompaniya
                bo'lib kelgan
              </p>
              <p className="haqimizda-text">
                Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko
                sumkalarUshbu kompaniya 17 yildan beri mijozlarga xizmat
                ko'rsatadi.
              </p>
              <p className="haqimizda-text">
                Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko
                sumkalarUshbu kompaniyaning asosiy maqsadi yuqori sifatli va
                tejamkor mahsulotlar ishlab chiqarishdir.
              </p>
              <p className="haqimizda-text">
                Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko
                sumkalarUshbu kompaniyaning ishlab chiqarish jarayoni butunlay
                ekologik toza.
              </p>
              <p className="haqimizda-text">
                Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko
                sumkalarKorxonada xaridorlarning talab va takliflari asosida har
                qanday turdagi paxta xomashyosi ishlab chiqarilishi mumkin.
              </p>
              <p className="haqimizda-text">
                Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko
                sumkalarKompaniya DongJia to‘quv mashinalarining O‘zbekistondagi
                rasmiy dileri hisoblanadi.
              </p>
              <p className="haqimizda-text">
                Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarAyni
                paytda 80 dan ortiq oila o‘z oilasini moddiy jihatdan ta’minlab,
                korxona nufuzi va muvaffaqiyatiga hissa qo‘shmoqda.
              </p>
              <p className="haqimizda-text">
                Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarBu
                talabni qondirish uchun 50 ta to‘quv dastgohi to‘xtovsiz yuqori
                tezlikda ishlamoqda.
              </p>
              <p className="haqimizda-text">
                Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko
                sumkalarOyiga 200-250 ming metr gazlama to‘qish quvvatiga egamiz
              </p>
              <p className="haqimizda-text">
                Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko
                sumkalarMijozlarimizning yuqori talabidan kelib chiqib,
                korxonada yuqori sifatli yuqori sifatli eko-sumkalar ishlab
                chiqarish yo‘lga qo‘yild
              </p>
              <p className="haqimizda-text">
                Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko
                sumkalar“Bukhara Natural Product” kompaniyasi oʻz sodiq
                mijozlariga istalgan vaqtda xizmat koʻrsatishdan mamnun.
              </p>
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
              <Link to="/">{t('aboutUs')}</Link> <br />
              <Link to="/">{t('collection')}</Link> <br />
              <Link to="/">{t('contact')}</Link>
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
