import React, { useEffect, useState } from 'react';
// @ts-ignore
import moonbtn_white from "../../../images/header/moon_white.png";
// @ts-ignore
import sunbtn_white from "../../../images/header/sun_white.png";

export default function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(() => {

        const storedMode = localStorage.getItem('darkMode');

        return storedMode ? JSON.parse(storedMode) : true;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));

        if (isDarkMode) {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button 
            className={`dark-mode-toggle ${isDarkMode ? 'dark-mode-moon' : 'dark-mode-sun'}`}
            onClick={toggleDarkMode}
            aria-label={`Mudar para modo ${isDarkMode ? 'light' : 'dark'}`}
        >
            <img src={isDarkMode ? sunbtn_white : moonbtn_white} alt={isDarkMode ? "sun" : "moon"} />
        </button>
    );
};