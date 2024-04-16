import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import PageContent from '../../PageContent/PageContent';

const DialogPage = (props) => {
    return (
        <div>
            <PageContent />
            <h2>Dialog Page</h2>
            <Dialogs dialogsData={props.dialogsData} messageData={props.messageData} />
        </div>
    );
};

export default DialogPage;
