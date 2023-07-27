import { createStore } from 'redux';
import weatherReducer from './redux/reducers';

const store = createStore(weatherReducer);

export default store;
