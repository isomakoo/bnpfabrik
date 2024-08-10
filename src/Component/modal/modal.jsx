import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import './modal.css';
import uz from '../../assets/uz.svg';
import ru from '../../assets/ru.svg';
import en from '../../assets/en.svg';
import { useTranslation } from 'react-i18next';

// Select uchun custom componentlar
const customSingleValue = ({ data }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={data.icon} alt="" style={{ width: 20, height: 20, marginRight: 10 }} />
        {data.label}
    </div>
);

const customOption = (props) => (
    <div {...props.innerProps} style={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
        <img src={props.data.icon} alt="" style={{ width: 20, height: 20, marginRight: 10 }} />
        {props.data.label}
    </div>
);

// Select uchun options va custom styles
const languageOptions = [
  { value: 'en', label: 'English', icon: en },
  { value: 'ru', label: 'Русский', icon: ru },
  { value: 'uz', label: 'O`zbek', icon: uz }
];

const customStyles = {
  control: (base) => ({
    ...base,
    minHeight: 'auto',
    height: '30px',
    border: 'none',
    boxShadow: 'none' 
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0 8px',
    marginTop: '-20px',
  }),
  indicatorsContainer: (base) => ({
    ...base,
    height: '30px'
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: '4px'
  }),
  clearIndicator: (base) => ({
    ...base,
    padding: '4px'
  }),
  option: (base) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    padding: '8px'
  }),
  singleValue: (base) => ({
    ...base,
    display: 'flex',
    alignItems: 'center'
  }),
};

const Modal = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation(); // i18n import qilingdi

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleLinkClick = () => {
        onClose();
    };

    const handleChange = (selectedOption) => {
        i18n.changeLanguage(selectedOption.value); // Tilni o'zgartirish
        onClose(); // Modali yopish
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <a href="#" className="close-btn" onClick={onClose} aria-label="Close modal">×</a>
                <Link to="/" onClick={handleLinkClick}>{t('home')}</Link>
                <Link to="/shop" onClick={handleLinkClick}>{t('collection')}</Link>
                <Link to="/about-us" onClick={handleLinkClick}>{t('about_us')}</Link>
                <Link to="/contact-us" onClick={handleLinkClick}>{t('contacts')}</Link>
                <Select
                    defaultValue={languageOptions[0]}
                    options={languageOptions}
                    onChange={handleChange}
                    components={{ SingleValue: customSingleValue, Option: customOption }}
                    isSearchable={false}
                    styles={customStyles}
                    id='modal-select'
                />
            </div>
        </div>
    );
};

export default Modal;
