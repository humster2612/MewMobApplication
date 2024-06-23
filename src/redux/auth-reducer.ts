import { authAPI } from "../assets/images/api/api";
const SET_USER_DATA = 'SET_USER_DATA';

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    error: string | null
};

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    error: null
};

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                error: null
            };
        default:
            return state;
    }
};

type SetAuthUsersDataActionPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
};

type SetAuthUsersDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUsersDataActionPayloadType
};

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUsersDataActionType => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
});

export const login = (email: string, password: string) => async (dispatch: any) => {
    try {
        let response = await authAPI.login(email, password);
        if (response.data) {
            const { userId } = response.data;
            dispatch(setAuthUserData(userId, email, email, true));
        }
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error.response.data.message });
    }
};

export const register = (username: string, email: string, password: string) => async (dispatch: any) => {
    try {
        let response = await authAPI.register(username, email, password);
        if (response.data) {
            const { userId } = response.data;
            dispatch(setAuthUserData(userId, email, email, true));
        }
    } catch (error) {
        dispatch({ type: 'REGISTER_ERROR', error: error.response.data.message });
    }
};

export default authReducer;