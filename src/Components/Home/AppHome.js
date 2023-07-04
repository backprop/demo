import React from "react"
import "./appHome.css"
import me from "../../assets/images/photos/me.jpg";

export default function AppHome(){
    return(
        <section id="home--main">

            <p>
                This is my app where I add a bunch of different demos so that I have a quick reference to many different smaller pieces of React
            </p>
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