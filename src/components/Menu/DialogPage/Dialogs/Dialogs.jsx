import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />) 
    const messagesElements = props.state.messageData.map(m => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.containerthree}>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

        </div>
    );
};


export default Dialogs;
