const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE ='SET_USERS_PROFILE';


let initialState = {
    posts: [
        { id: 1, message: 'Hi how are you' },
        { id: 2, message: 'YOOOOOOOO' }
    ],
    newPostText: 'YOYOPIKYOPIK',
    profile:null
};

const profileReducer = (state = initialState, action) => {
    console.log('profileReducer state:', state);
    console.log('profileReducer action:', action);
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: state.newPostText }],
                newPostText: ''
            };


        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
            case SET_USERS_PROFILE:
                return { ...state, profile: action.profile };  default:
                    return state;
        
              
    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const setUsersProfile =(profile)=>({type:SET_USERS_PROFILE,profile});


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export default profileReducer;