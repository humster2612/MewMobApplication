const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';


// let sum =(a=-1,b=0)=>{
//     return a+b;

// }

// sum();



let initialState={
    posts:[
        {id:1,message:'Hi how are you'},
        {id:2,message:'YOOOOOOOO'}
    ],
newPostText:'YOYOPIKYOPIK'
}


const HomePageReducer = (state = initialState, action)=>{

        
    switch(action.type){
        case 'ADD-POST' :
            let newPost = {
                id: 5,
                message:state.newPostText
              };
              state.posts.push(newPost);
              state.newPostText='';
              return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText=action.newText;
            return state;
            default:
                return state;
    }
           
}

export const addPostActionCreator =()=>({
    type:ADD_POST
});

export const updateNewPostTextActionCreator =(text)=>({
    type:UPDATE_NEW_POST_TEXT, newText: text
});

export default HomePageReducer;
