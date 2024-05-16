// In Dialogs.js
import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../../redux/Dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

        let state = props.store.getState().diaPage;

    let AddMessage = () => {
    props.store.dispatch(addMessageActionCreator());


    }

    const SendMessage = (text) => {
        let action=updateNewMessageActionCreator(text);
        props.store.dispatch(action); 
       
    }

    return (
        <Dialogs updateNewMessage={SendMessage} 
        AddMessage={AddMessage}
        diaPage={state} />
    );
};

export default DialogsContainer;
