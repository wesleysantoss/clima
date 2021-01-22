import React, { memo } from 'react';

const ListCities = ({listCities, onHandleKeyCity}) => {
    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <ul className="mt-3">
                    {listCities.map(city => {
                        const keyCity = city.Key;
                        const state = city.AdministrativeArea.LocalizedName;
                        const uf = city.AdministrativeArea.ID;
                        
                        return (
                            <li key={keyCity} 
                                data-key={keyCity}
                                onClick={e => onHandleKeyCity(e.target.dataset.key)}
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

export default memo(ListCities)