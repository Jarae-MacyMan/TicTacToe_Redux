import { createStore } from 'redux';
//import counterReducer from '../features/counter/counterSlice';
import reducer from './reducer';
//contains the state 
//pass in reducer statement

const store = createStore(reducer);

export default store