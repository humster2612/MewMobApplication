import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    
    const dialogsData = [
        {id: '1', name: 'Kubik'},
        {id: '2', name: 'Czubi'},
        {id: '3', name: 'Burulka'},
        {id: '4', name: 'Bobik'}
    ];
    
    const messageData = [
        {id: '1', message: 'HI'},
        {id: '2', message: 'How are you'},
        {id: '3', message: 'Yoooo'},
        {id: '4', message: 'Yoooo'}
    ];


    let dialogsElements = [
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
    ]

    return (
       
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
            </div>
        </div>
       
    )
};

export default Dialogs;
