import { createStore } from 'redux';
import reducer_data_weather from './reducers/dataWeather';

const store = createStore(reducer_data_weather);

export default store;