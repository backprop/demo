import React from "react"
import {Outlet,NavLink} from "react-router-dom"

export default function Layout(){    
    
    return(
        <div>
            <nav className="nav--menu">
                <NavLink
                    exact
                    to="/"
                    className="nav--menu-item"
                    activeClassName="active"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/game"
                    className="nav--menu-item"
                    activeClassName="active"
                >
                    Game
                </NavLink>
                <NavLink
                    to="/notes"
                    className="nav--menu-item"
                    activeClassName="active"
                >
                    Notes
                </NavLink>
            </nav>
            <main>
                <Outlet />
            </main>     
        </div>
    )
}