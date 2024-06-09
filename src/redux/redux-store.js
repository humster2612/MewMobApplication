import { combineReducers, configureStore } from '@reduxjs/toolkit';
import HomePageReducer from './Profile-reducer';
import Dialogsreducer from './Dialogs-reducer';
import UsersReducer from './Users-reducer';
import authReducer from './auth-reducer';

const rootReducer = combineReducers({
    profilePage: HomePageReducer,
    diaPage: Dialogsreducer,
    usersPage:UsersReducer,
    auth:authReducer
});

const reduxstore = configureStore({ reducer: rootReducer });

export default reduxstore;

