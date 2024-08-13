import React, { useEffect, useState } from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import productData from "../Product/product";
import Logo from "../../assets/logo.png";
import '../Hero/Hero.css';
import Select from "react-select";
import uz from "../../assets/uz.svg";
import ru from "../../assets/ru.svg";
import en from "../../assets/en.svg";
import '../Foother/Foother.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Main.css';
import Modal from "../modal/modal";

// Select uchun custom componentlar
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

const customOption = (props) => (
    <div
        ref={props.innerRef}
        {...props.innerProps}
        className="custom-option"
    >
        <img
            src={props.data.icon}
            alt={props.data.label}
            style={{ width: 20, marginRight: 10 }}
        />
        {props.data.label}
    </div>
);

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
    const [isModalOpen, setModalOpen] = useState(false);
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {
        AOS.init();

        if (season && id) {
            const categoryProducts = productData[season] || [];
            const foundProduct = categoryProducts.find(
                (item) => item.id === parseInt(id, 10)
            );
            setProduct(foundProduct);

            // Find similar products
            const filteredProducts = categoryProducts
                .filter((item) => item.id !== parseInt(id, 10));
            
            // Function to get random products
            const getRandomProducts = (products, count) => {
                const shuffled = products.sort(() => 0.5 - Math.random());
                return shuffled.slice(0, count);
            };
            
            const randomProducts = getRandomProducts(filteredProducts, 4);
            setSimilarProducts(randomProducts);
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
                                    <img src={Logo} alt="logo" className="hero-logo" />
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
                </div>
            </div>
            <div className="product">
                <div className="container">
                    <div className="product-detail">
                        <div className="image-container">
                            <Zoom>
                                <img
                                    src={product.img}
                                    alt={product.alt}
                                    id="product-img"
                                />
                            </Zoom>
                        </div>
                        <table className="product-table">
                        <h1 className="product-names">
                                {product.name}
                            </h1>
                            <tbody id="product-tbody">
                                <tr>
                                    <th id="product-title">{t("material")}</th>
                                    <td>{product.material}</td>
                                </tr>
                                <tr>
                                    <th id="product-title">{t("size")}</th>
                                    <td>{product.size}</td>
                                </tr>
                                <tr>
                                    <th id="product-title">{t("category")}</th>
                                    <td>{product.category}</td>
                                </tr>
                                <tr>
                                    <th id="product-title">{t("manufacturer")}</th>
                                    <td>{product.manufacturer}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="product-text" data-aos="fade-up" data-aos-duration="1000">
                         <span className="spane-title">{product.name} Choyshablar tuplami </span> <br />
                        {product.description}
                    </p>
                    <h3 className="main-title">Shunga uxshagan Mahsulotlar</h3>
                    <div className="product-grid">
                        {similarProducts.slice(0, 4).map((item) => (
                            <div key={item.id} className="product-card">
                                <Link to={`/product/${season}/${item.id}`}>
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        id="products-image"
                                    />
                                    <p className="product-text">{item.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <ul className="foother-navbar">
                    <li className="foother-nav-item" data-aos="fade-up">
                        <img src={Logo} alt="Logo" className="foother-logo" />
                        <p className="foother-nav-item-text">
                            {t('about')}
                        </p>
                    </li>
                    <li className="foother-nav-item" data-aos="fade-up">
                        <h4 className="foother-nav-item-title">{t('menu')}</h4>
                        <Link to="/" className='foother-linkes'>{t('home')}</Link> <br />
                        <Link to="/about-us" className='foother-linkes'>{t('aboutUs')} </Link> <br />
                        <Link to="/shop" className='foother-linkes'>{t('collection')}</Link> <br />
                        <Link to="/contact-us" className='foother-linkes'>{t('contacts')}</Link>
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
        </>
    );
}

export default Main;
