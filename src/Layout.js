import React, {useContext} from "react"
import {Outlet,NavLink,useLocation} from "react-router-dom"
import Footer from "./Footer.js"
import {ThemeContext} from './Context.js';

export default function Layout(){    

    const location=useLocation();
    const {theme}=useContext(ThemeContext);

    return(
        <div id="page" className={theme}>
            <nav className="nav--menu">
                <NavLink
                    exact="true"
                    to={{pathname:"/",state:{app:"Home"}}}
                    className="nav--menu-item"
                    activeclassname="active"                    
                >
                    Home
                </NavLink>
                <NavLink
                    to="/game"
                    className="nav--menu-item"
                    activeclassname="active"                   
                >
                    Game
                </NavLink>
                <NavLink
                    to="/notes"
                    className="nav--menu-item"
                    activeclassname="active"                    
                >
                    Notes
                </NavLink>
                <NavLink
                    to="/weather"
                    className="nav--menu-item"
                    activeclassname="active"                    
                >
                    Weather
                </NavLink>
            </nav>
            <main>                
                <Outlet/>                
            </main> 
            <Footer currentPage={location.pathname} />            
        </div>
    )
}