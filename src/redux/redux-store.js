import { combineReducers, configureStore } from '@reduxjs/toolkit';
import HomePageReducer from './HomePage-reducer';
import Dialogsreducer from './Dialogs-reducer';
import UsersReducer from './Users-reducer';

const rootReducer = combineReducers({
    profilePage: HomePageReducer,
    diaPage: Dialogsreducer,
    usersPage:UsersReducer
});

const reduxstore = configureStore({ reducer: rootReducer });

export default reduxstore;

