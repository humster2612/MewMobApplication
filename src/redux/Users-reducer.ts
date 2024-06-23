import { followAPI } from "../assets/images/api/api";
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from './redux-store';
import { oldInstance } from "../assets/images/api/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

type UserType = {
  id: number;
  name: string;
  status: string;
  followed: boolean;
  photos: {
    small: string | null;
    large: string | null;
  };
  location?: {
    country: string;
    city: string;
  };
};

const initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action: UsersActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
            };
        case SET_USERS:
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

// Action Types
type FollowActionType = {
    type: typeof FOLLOW;
    userId: number;
};

type UnfollowActionType = {
    type: typeof UNFOLLOW;
    userId: number;
};

type SetUsersActionType = {
    type: typeof SET_USERS;
    users: UserType[];
};

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE;
    currentPage: number;
};

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT;
    totalUsersCount: number;
};

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING;
    isFetching: boolean;
};

type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
    isFetching: boolean;
    userId: number;
};

type UsersActionTypes = FollowActionType | UnfollowActionType | SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType | ToggleFollowingProgressActionType;

// Action Creators
export const followSuccess = (userId: number): FollowActionType => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId: number): UnfollowActionType => ({ type: UNFOLLOW, userId });
export const setUsers = (users: UserType[]): SetUsersActionType => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT, totalUsersCount
});
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
});

// Thunk Creators
export const getUsers = (pageNumber: number, pageSize: number): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
        const response = await oldInstance.get(`users?page=${pageNumber}&count=${pageSize}`);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setUsersTotalCount(response.data.totalCount));
    } catch (error) {
        dispatch(toggleIsFetching(false));
        console.error("There was an error fetching the users data!", error);
    }
};

export const follow = (userId: number): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    try {
        const response = await oldInstance.post(`follow/${userId}`);
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    } catch (error) {
        dispatch(toggleFollowingProgress(false, userId));
        console.error("There was an error following the user!", error);
    }
};
export const unfollow = (userId: number): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    try {
        const response = await oldInstance.delete(`follow/${userId}`);
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    } catch (error) {
        dispatch(toggleFollowingProgress(false, userId));
        console.error("There was an error unfollowing the user!", error);
    }
};

export default usersReducer;
