import React from "react"
import {Outlet,NavLink} from "react-router-dom"

export default function Layout(){    
    
    return(
        <div>
            <nav className="nav--menu">
                <NavLink
                    exact="true"
                    to="/"
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
                <Outlet />
            </main>     
        </div>
    )
}