import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import PageContent from '../../PageContent/PageContent';

const DialogPage = (props) => {
    return (
        <div>
            <PageContent />
            <h2>Dialog Page</h2>
            <Dialogs state={props.state} />
        </div>
    );
};


export default DialogPage;
