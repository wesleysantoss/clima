import React, { useState } from 'react';
import { SearchCities } from '../../../services/AccuWeather';
import { useDispatch } from 'react-redux';
import actionsDataWeather from '../../../actions/dataWeather';

export default function SearchCity () {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const onChangeCity = value => setCity(value);   

    const searchForCity = async () => {
        const response = await SearchCities(city);

        dispatch(actionsDataWeather.setWordSearch(city));
        dispatch(actionsDataWeather.setListCities(response));
    }

    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <input type="text" 
                    value={city} 
                    onChange={e => onChangeCity(e.target.value)} 
                    onKeyPress={e => e.key === 'Enter' && searchForCity()}
                    className="form-control shadow-none bg-light rounded"
                    placeholder="Insira o nome da cidade"
                />
                <button type="button" 
                    className="btn btn-success mt-1" 
                    onClick={searchForCity}
                >
                    Pesquisar
                </button>
            </div>
        </div>
    )
}