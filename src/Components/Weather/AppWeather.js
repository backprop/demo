import React from "react"
import "./weather.css"
import WeatherDisplay from "./WeatherDisplay"
import WeatherForm from "./WeatherForm"
import apiKey from "./apiKey"
import axios from "axios"

export default function Weather(){     
    // set weather to an empty struct
    const [weather,setWeather] = React.useState({})
    const [currSearch,setCurrSearch] = React.useState("");

    const fetchWeatherData=()=>{
        if(currSearch!=""){           
            axios            
                .get(
                    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${currSearch}&days=5&aqi=no`                
                )
                .then(response => {                                      
                    setWeather(response.data);                    
                }) 
                .catch(error => {                    
                    
                })
                .finally(() => {
                    
                });
        }
        else setWeather({})
    }

    React.useEffect(()=>{  // initial load and after first attempt
        fetchWeatherData(currSearch);        
    },[currSearch])

    function doSearch(event){    
        event.preventDefault();                    
        setCurrSearch(event.target.elements.searchlocation.value)
    }

    return(
        <section id="weather">
            <div className="weather--container">
                <WeatherForm doSearch={(event)=>doSearch(event)} />
                <WeatherDisplay weatherData={weather}/>
            </div>
        </section>
    )
}