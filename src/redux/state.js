let state = {
  


    profilePage:{
        posts:[
                {id:1,message:'Hi how are you'},
                {id:2,message:'YOOOOOOOO'}
        ]
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

let AddPost = (postMessage) => {
    let newPost = {
      id: 5,
      message: postMessage
    }
    state.profilePage.posts.push(newPost);
  }
  
  export { state, AddPost };