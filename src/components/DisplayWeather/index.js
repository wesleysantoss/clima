import React, {useState, useEffect} from 'react';
import SearchCity from './SearchCity';
import ListCities from './ListCities';
import Temperature from './Temperature';
import { SearchCities, getTemperature } from '../../services/AccuWeather';

export default function DisplayWeather() {
    const [nameCity, setNameCity] = useState('');
    const [listCities, setListCities] = useState([]);
    const [keyCity, setKeyCity] = useState(0);
    const [dataForCity, setDataForCity] = useState({weatherText: '', temp: 0})

    useEffect(() => {
        const searchForCity = async () => {
            if(nameCity !== ''){
                const response = await SearchCities(nameCity);
                setListCities(response);
            }
        }
        
        searchForCity();
    }, [nameCity])

    useEffect(() => {
        const getCurrentTemperature = async () => {
            if(keyCity !== 0){
                const currentTemperature = await getTemperature(keyCity);
                const temp = currentTemperature[0].Temperature.Metric.Value;
                const weatherText = currentTemperature[0].WeatherText;
                
                setDataForCity({weatherText, temp});
            }
        }

        getCurrentTemperature();
    }, [keyCity])

    return (
        <div className="col-12">
            <SearchCity onHandleNameCity={setNameCity} />
            <ListCities listCities={listCities} onHandleKeyCity={setKeyCity} />
            <Temperature data={dataForCity} />
        </div>
    )
}