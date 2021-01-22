import React, { useState, memo } from 'react';

const SearchCity = ({ onHandleNameCity }) => {
    const [city, setCity] = useState('');

    const onChangeCity = value => setCity(value);   
    const setNameCity = () => onHandleNameCity(city);

    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <input type="text" 
                    value={city} 
                    onChange={e => onChangeCity(e.target.value)} 
                    onKeyPress={e => e.key === 'Enter' && setNameCity()}
                    className="form-control shadow-none bg-light rounded"
                    placeholder="Insira o nome da cidade"
                />
                <button type="button" 
                    className="btn btn-success mt-1" 
                    onClick={setNameCity}
                >
                    Pesquisar
                </button>
            </div>
        </div>
    )
}

export default memo(SearchCity)