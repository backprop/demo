import React from "react"

export default function WeatherForm({doSearch}){
    return(
        <form className="weather--form" onSubmit={doSearch}>
            <input className="weather--form--input" name="searchlocation" id="searchlocation" placeholder="Postal/ZIP code"></input>
            <button className="weather--form--button">Get Weather</button>
        </form>
    )
}