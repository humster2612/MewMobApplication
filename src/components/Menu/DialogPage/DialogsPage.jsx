import React from 'react';
import Dialogs from './Dialogs/Dialogs';

const DialogPage = (props) => {
    return (
        <div>
            <h2>Dialog Page</h2>
            <Dialogs 
                dialogsData={props.diaPage.dialogsData} 
                messageData={props.diaPage.messageData} 
                newMessageAdd={props.diaPage.newMessageAdd}  
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default DialogPage;
