const apiKey = 'nlmVenouKJWH6CDMuNH5RbJBgxs3v2RY';
const language = 'pt-BR';
const url = 'http://dataservice.accuweather.com';

export async function SearchCities(city) {
    try {
        const uri = `${url}/locations/v1/cities/search?apikey=${apiKey}&q=${city}&language=${language}`;
        const response = await fetch(uri);
        const responseJson = response.json();
        
        return responseJson;
    } catch(error) {
        console.log('error: ', error);
        return error;
    }
}

export async function getTemperature(keyCity) {
    try {
        const uri = `${url}/currentconditions/v1/${keyCity}?apikey=${apiKey}&language=${language}`;
        const response = await fetch(uri);
        const responseJson = response.json();
        
        return responseJson;
    } catch(error) {
        console.log('error: ', error);
        return error;
    }
}