// In Dialogs.js
import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../../redux/Dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../../../StoreContext';
import store from '../../../../redux/store';

const DialogsContainer = () => {

    

    return <StoreContext.Consumer>
        {
        (store) =>{

            let state = store.getState().diaPage;

    let AddMessage = () => {
    store.dispatch(addMessageActionCreator());

    }

    const SendMessage = (text) => {
        let action=updateNewMessageActionCreator(text);
        
    store.dispatch(action); 
       
    }

             return <Dialogs updateNewMessage={SendMessage} 
        AddMessage={AddMessage}
        diaPage={state} />

        }
        
    }
        </StoreContext.Consumer>

   
};

export default DialogsContainer;
