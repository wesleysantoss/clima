import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionsDataWeather from '../../../actions/dataWeather';
 
export default function ListCities () {
    const dispatch = useDispatch();
    const list_cities = useSelector(state => state.list_cities);

    const onClickCity = keyCity => dispatch(actionsDataWeather.setKeyCity(keyCity))
    
    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <ul className="mt-3">
                    {list_cities.map(city => {
                        const keyCity = city.Key;
                        const state = city.AdministrativeArea.LocalizedName;
                        const uf = city.AdministrativeArea.ID;
                        
                        return (
                            <li key={keyCity} 
                                data-key={keyCity}
                                onClick={e => onClickCity(e.target.dataset.key)}
                            >
                                {city.LocalizedName} - {state} ({uf})
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}