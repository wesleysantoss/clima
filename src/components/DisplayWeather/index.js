import React from 'react';
import SearchCity from './SearchCity';
import ListCities from './ListCities';
import Temperature from './Temperature';

export default function DisplayWeather() {
    return (
        <div className="col-12">
            <SearchCity />
            <ListCities />
            <Temperature />
        </div>
    )
}