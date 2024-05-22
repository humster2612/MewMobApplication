import React from 'react';
import DialogsContainer from './Dialogs/DialogsContainer';

const DialogsPage = (props) => {
    return (
        <div>
            <h2>Dialog Page</h2>
            <DialogsContainer 
            store={props.store}
                // dialogsData={props.diaPage.dialogsData} 
                // messageData={props.diaPage.messageData} 
                // newMessageAdd={props.diaPage.newMessageAdd}  
                // dispatch={props.dispatch}
            />
        </div>
    );
};

export default DialogsPage;