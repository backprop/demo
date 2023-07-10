import React from "react"
import "./appHome.css" 
import me from "../../assets/images/photos/me.jpg";

export default function AppHome(){
    return(
        <section id="home--main">

            <h4>
                This is my app where I add a bunch of different demos so that I have a quick reference to many different smaller pieces of React
            </h4>
            <p>
                Some concepts demonstrated:                   
            </p>
            <ul>
                <li><strong>(General)</strong>: General React components, Router, Context, lazy instantiation</li>
                <li><strong>Game</strong>: State, Plugins, Webpack </li>
                <li><strong>Notes</strong>: Firebase, react-split</li>
                <li><strong>Weather</strong>: API (<em>Note</em> - API keys would normally be proxied and hidden but not done in this demo)</li>
            </ul> 

            <div className="businesscard">
                <h2>My Contact Info</h2>
                <img src={me} alt="Chris" />
                <h3>Chris Polka</h3>
                <span className="link">
                    <a href="https://www.linkedin.com/in/chris-polka/">LinkedIn</a>
                </span>
            </div>
            
            
        </section>
    )
}