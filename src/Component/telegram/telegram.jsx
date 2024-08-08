import React from 'react';

// TelegramButton component
const TelegramButton = () => {
    const handleTelegramClick = () => {
        window.open('https://t.me/kurbonov_me', '_blank');
    };

    return (
        <div style={styles.container}>
            <button style={styles.button} onClick={handleTelegramClick}>
                Bizga yozing!
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                    alt="Telegram"
                    style={styles.icon}
                />
            </button>
        </div>
    );
};

// Inline styles
const styles = {
    container: {
        position: 'fixed', // Fixed positioning to stay at the bottom-right
        bottom: '20px',
        right: '20px',
        zIndex: 1000, // Ensure it appears on top of other content
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        fontSize: '18px',
        color: '#fff',
        backgroundColor: '#0088cc',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
    },
    icon: {
        width: '24px',
        height: '24px',
        marginLeft: '10px',
    },
};

export default TelegramButton;
