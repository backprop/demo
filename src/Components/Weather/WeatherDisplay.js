import React from "react"
import WeatherDay from "./WeatherDay"

export default function WeatherDisplay({weatherData}){    
    
    const {forecast,location}=weatherData;    

    return(
        <>
            {forecast && (
                <>
                    <h2>Forecast for {location.name}</h2>
                    <div className="weather--forecast">
                    {forecast.forecastday.map((elDay) => (
                        <WeatherDay key={elDay.date_epoch} elDay={elDay} />
                    ))}
                    </div>
                </>
            )}

            {
                !forecast && <span></span>
            }
        </>
    )
}