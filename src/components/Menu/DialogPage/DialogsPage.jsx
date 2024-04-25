import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import PageContent from '../../PageContent/PageContent';
import {state, updateNewMessageText,AddMessage} from '../../../redux/state';

const DialogPage = (props) => {
    return (
        <div>
            {/* <PageContent /> */}
            <h2>Dialog Page</h2>
            <Dialogs state={props.state} 
            updateNewMessageText={updateNewMessageText}
             newMessageAdd={state.diaPage.newMessageAdd}  
             AddMessage={AddMessage}
             />
        </div>
    );
};


export default DialogPage;
