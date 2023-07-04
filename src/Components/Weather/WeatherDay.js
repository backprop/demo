import React from "react"

export default function WeatherDay(elDay){
    
    const currDay=elDay.elDay.day;
    
    return(
        <div className="weather--day">             
            <span className="weather--day--date">{new Date(elDay.elDay.date).toLocaleDateString('en-US', { weekday: 'long' })}</span>          
            <img className="weather--day--icon" src={currDay.condition.icon} />                
            <span className="weather--day--max">High: {currDay.maxtemp_f}°F ({currDay.maxtemp_c}°C)</span>
            <span className="weather--day--min">Low: {currDay.mintemp_f}°F ({currDay.mintemp_c}°C)</span>     
        </div>
    )
}