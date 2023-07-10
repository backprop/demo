import React, { useContext } from 'react';
import {ThemeContext} from './Context.js';

const Footer = () => {
    
    const {theme,setTheme} = useContext(ThemeContext);

    function toggleTheme(){        
        setTheme(theme==="dark"?"light":"dark");
        console.log(theme)
    }

    return (
        <footer className={theme}>
            <div className="switch-field">                
                <input type="radio" id="radio-one" name="theme" value="light" onChange={toggleTheme} defaultChecked={theme==="light"}/>
                <label htmlFor="radio-one">Light</label>
                <input type="radio" id="radio-two" name="theme" value="dark" onChange={toggleTheme} defaultChecked={theme==="dark"} />
                <label htmlFor="radio-two">Dark</label>
            </div>
        </footer>
    );
};

export default Footer;