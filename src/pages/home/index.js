import React from 'react';
import DisplayWeather from '../../components/DisplayWeather';

export default function Home() {
    return (
        <div className="container">
            <div className="row">
                <DisplayWeather />
            </div>
        </div>
    )
}