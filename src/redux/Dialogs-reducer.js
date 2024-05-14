const ADD_MESSAGE='ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT='UPDATE-NEW-MESSAGE-TEXT';

const Dialogsreducer = (state,action)=>{


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
