import React, { memo } from 'react';

const Temperature = ({data}) => {
    return (
        <div className="row justify-content-center">
            <div className="col-6">
                {data.temp !== 0 && <p>{data.temp}° - {data.weatherText}</p>}
            </div>
        </div>
    )
}

export default memo(Temperature)