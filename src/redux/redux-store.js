import { combineReducers,configureStore } from 'redux';
import HomePageReducer from './HomePageReducer'; // Adjust the import path accordingly
import Dialogsreducer from './Dialogsreducer'; // Adjust the import path accordingly


let reducers=combineReducers({
    HomePageReducer:HomePageReducer,
Dialogsreducer:Dialogsreducer

});



const store = configureStore ({reducer:reducers});


export default store;

// combineReducers делаем также
//  let reducers = combineReducers({...}), 
// потом вместо createStore пишем:
//  let store = configureStore({reducer: reducers})т.к.
//  он подразумевает на вход один уже 
// объединенный reducer как я понял.