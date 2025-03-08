import './WeatherForcast.css';

import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx'
import WeatherData from '../WeatherData/WeatherData.jsx'

const WeatherForecast = ({WeatherForecasts}) => {
    return (
        <div className="weather">
            {/* <h2>{props.day}</h2>
            <img src={props.img} alt={props.imgALT} />
            <p><span>Conditions: </span>{props.conditions}</p>
            <p><span>Time:</span>{props.time}</p> */}
            <section>
                {WeatherForecasts.map((weatherForecast, index) => (
                    <div className="card">
                        <WeatherIcon key={index} img={weatherForecast.img} alt={weatherForecast.imgALT}/>

                        <WeatherData key={index} day={weatherForecast.day} conditions={weatherForecast.conditions} time={weatherForecast.time}/>
                    </div>
                ))}
            </section>
            
        </div>
    )
}
export default WeatherForecast;