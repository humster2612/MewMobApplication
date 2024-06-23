import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import HomePageReducer from './Profile-reducer.ts';
import DialogsReducer from './Dialogs-reducer.ts';
import UsersReducer from './Users-reducer.ts';
import authReducer from './auth-reducer.ts';

const rootReducer = combineReducers({
    profilePage: HomePageReducer,
    diaPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: authReducer, 
    form: formReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = configureStore({
    reducer: rootReducer,
});

export default store;
