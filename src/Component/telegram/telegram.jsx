import React from 'react';
import './telegram.css';

const TelegramButton = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/kurbonov_me', '_blank');
  };

  return (
    <div className="telegram-container">
      <button className="telegram-button" onClick={handleTelegramClick}>
        Bizga yozing!
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
          alt="Telegram"
          className="telegram-icon"
        />
      </button>
    </div>
  );
};

export default TelegramButton;