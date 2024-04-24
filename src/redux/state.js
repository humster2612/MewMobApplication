import { rerenderEntireTree } from "../render";

let state = {
  

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
                ]

}
          
         
};


window.state=state;




let AddPost = () => {
    let newPost = {
      id: 5,
      message: state.profilePage.newPostText
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);

  }



// let AddPost = (postMessage) => {
//     let newPost = {
//       id: 5,
//       message: postMessage
//     };
//     state.profilePage.posts.push(newPost);
//     rerenderEntireTree(state);

//   }


let updateNewPostText = (newText) =>{
   
      state.profilePage.newPostText=newText;
      rerenderEntireTree(state);
  
}

  
  export { state, AddPost, updateNewPostText};