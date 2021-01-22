import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTemperature } from '../../../services/AccuWeather';

export default function Temperature () {
    const [temperature, setTemperature] = useState(0);
    const [weatherText, setWeatherText] = useState('');
    const keyCity = useSelector(state => state.key_city);

    useEffect(() => {
        const getCurrentTemperature = async () => {
            if(keyCity !== 0){
                const currentTemperature = await getTemperature(keyCity);
                const temp = currentTemperature[0].Temperature.Metric.Value;
                const weatherText = currentTemperature[0].WeatherText;
                
                setTemperature(temp);
                setWeatherText(weatherText);
            }
        }

        getCurrentTemperature();
    }, [keyCity])

    return (
        <div className="row justify-content-center">
            <div className="col-6">
                {temperature !== 0 && <p>{temperature}° - {weatherText}</p>}
            </div>
        </div>
    )
}