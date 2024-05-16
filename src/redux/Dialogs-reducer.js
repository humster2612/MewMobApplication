const ADD_MESSAGE='ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT='UPDATE-NEW-MESSAGE-TEXT';

let initialState={
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



const Dialogsreducer = (state=initialState, action)=>{


        switch(action.type){

            case 'ADD-MESSAGE':
                let newMessage = {
                    id:6,
                    message:state.newMessageAdd
                  };
                  state.messageData.push(newMessage);
                  state.newMessageAdd = '';
                return state;


            case UPDATE_NEW_MESSAGE_TEXT:
                state.newMessageAdd=action.textmess;
                return state;
                  default:
                    return state;

        }

}

export const addMessageActionCreator =()=>({
    type:ADD_MESSAGE
});


export const updateNewMessageActionCreator=(text)=>({
    type:UPDATE_NEW_MESSAGE_TEXT, textmess:text
});

export default Dialogsreducer;


