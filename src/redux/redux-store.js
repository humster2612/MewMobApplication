import { combineReducers, configureStore } from '@reduxjs/toolkit';
import HomePageReducer from './HomePage-reducer';
import Dialogsreducer from './Dialogs-reducer';

const rootReducer = combineReducers({
    profilePage: HomePageReducer,
    diaPage: Dialogsreducer
});

const store = configureStore({ reducer: rootReducer });

export default store;

