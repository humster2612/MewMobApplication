import { profileAPI } from "../assets/images/api/api";
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from './redux-store';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_POST_ID = 'SET_POST_ID'; // Добавляем новый action type для установки postId

type PostType = {
    id: number;
    message: string;
};

type ProfileType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: ContactsType;
    photos: PhotosType;
};

type PhotosType = {
    small: string | null;
    large: string | null;
};

type ContactsType = {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
};

let initialState = {
    posts: [
        { id: 1, message: 'Hi how are you' },
        { id: 2, message: 'YOOOOOOOO' }
    ] as Array<PostType>,
    newPostText: '',
    profile: null as ProfileType | null,
    status: '',
    postId: 0  // Ensure postId is properly initialized
};


export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ProfileActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: state.posts.length + 1, message: action.newPostText }],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SET_USERS_PROFILE:
            return { ...state, profile: action.profile };

        case SET_POST_ID: // Новый case для установки postId
            return { ...state, postId: action.postId };

        default:
            return state;
    }
};

// Action Creators
export const addPostActionCreator = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText });
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUsersProfile = (profile: ProfileType): SetUsersProfileActionType => ({ type: SET_USERS_PROFILE, profile });
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });
export const setPostId = (postId: number): SetPostIdActionType => ({ type: SET_POST_ID, postId }); // Action Creator для установки postId

// Thunk Creators
export const getStatus = (userId: number): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
};

export const updateStatus = (status: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
};

export default profileReducer;
