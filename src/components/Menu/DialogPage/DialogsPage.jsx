import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import PageContent from '../../PageContent/PageContent';
// import Header from '../../Header/Header';
// import Footer from '../../Footer/Footer';


const DialogPage =(props)=>{
    return(
        <div>
            <PageContent/>
            <h2>Dialog Page</h2>
            <Dialogs/>
       
            

        </div>
    )
};

export default DialogPage;
