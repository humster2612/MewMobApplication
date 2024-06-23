import Dialogsreducer from "./Dialogs-reducer.ts";
import ProfileReducer from "./Profile-reducer.ts";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state : {
    profilePage:{
        posts:[
                {id:1,message:'Hi how are you'},
                {id:2,message:'YOOOOOOOO'}
            ],
        newPostText:'YOYOPIKYOPIK'
    },
    diaPage:{
        dialogsData:[
                    {id: '1', name: 'Kubik', avatarUrl:'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg'},
                    {id: '2', name: 'Czubi', avatarUrl:'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/19/60af144800120-bpfull.jpg'},
                    {id: '3', name: 'Burulka',avatarUrl:'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/26/60af431b91a0a-bpfull.jpg'},
                    {id: '4', name: 'Bobik',avatarUrl:'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg'}
                ],
        messageData: [
                    {id: '1', message: 'HI'},
                    {id: '2', message: 'How are you'},
                    {id: '3', message: 'Yoooo'},
                    {id: '4', message: 'Yoooo'}
                ],
        newMessageAdd :'BUKIBUKIBUKI'
    }
  },

  getState () {
    return this._state;
  },

  _callSubscriber () {
    console.log ("State changed");
  },

  // AddMessage () {
  //   let newMessage = {
  //     id:6,
  //     message:this._state.diaPage.newMessageAdd
  //   };
  //   this._state.diaPage.messageData.push(newMessage);
  //   this._state.diaPage.newMessageAdd = '';
  //   this._callSubscriber(this._state);
  // },

  // AddPost ()  {
  //   let newPost = {
  //     id: 5,
  //     message:this._state.profilePage.newPostText
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText='';
  //   this._callSubscriber(this._state);
  // },

  // updateNewPostText (newText) {
  //   this._state.profilePage.newPostText=newText;
  //   this._callSubscriber(this._state);
  // },

  // updateNewMessageText (textmess) {
  //   this._state.diaPage.newMessageAdd=textmess;
  //   this._callSubscriber(this._state);
  // },

  subscribe(observer){
    this._callSubscriber=observer;
  },

  dispatch(action){

    this._state.profilePage=ProfileReducer(this._state.profilePage,action);
    this._state.diaPage=Dialogsreducer(this._state.diaPage,action);
    
    this._callSubscriber(this._state);

    // if(action.type ==='ADD-POST'){
    //   let newPost = {
    //     id: 5,
    //     message:this._state.profilePage.newPostText
    //   };
    //   this._state.profilePage.posts.push(newPost);
    //   this._state.profilePage.newPostText='';
    //   this._callSubscriber(this._state);
    // } else if(action.type ===UPDATE_NEW_POST_TEXT){
    //   this._state.profilePage.newPostText=action.newText;
    //   this._callSubscriber(this._state);
    // }else if(action.type ===UPDATE_NEW_MESSAGE_TEXT){
    //   this._state.diaPage.newMessageAdd=action.textmess;
    //   this._callSubscriber(this._state);
    // }else if (action.type ==='ADD-MESSAGE'){
    //   let newMessage = {
    //     id:6,
    //     message:this._state.diaPage.newMessageAdd
    //   };
    //   this._state.diaPage.messageData.push(newMessage);
    //   this._state.diaPage.newMessageAdd = '';
    //   this._callSubscriber(this._state);
    // }
  }


};

// export const addPostActionCreator =()=>({
//       type:ADD_POST
// });


// export const updateNewPostTextActionCreator =(text)=>({
//       type:UPDATE_NEW_POST_TEXT, newText: text
// });


// export const addMessageActionCreator =()=>({
//       type:ADD_MESSAGE
// });


// export const updateNewMessageActionCreator=(text)=>({
//       type:UPDATE_NEW_MESSAGE_TEXT, textmess:text
// });



export default store;