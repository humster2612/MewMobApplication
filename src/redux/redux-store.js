import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; 
import { reducer as formReducer } from 'redux-form'; 
import HomePageReducer from './Profile-reducer';
import Dialogsreducer from './Dialogs-reducer';
import UsersReducer from './Users-reducer';
import authReducer from './auth-reducer';


const rootReducer = combineReducers({
    profilePage: HomePageReducer,
    diaPage: Dialogsreducer,
    usersPage: UsersReducer,
    auth: authReducer,
    form: formReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk) // Исправленный thunk
});

export default store;
