import React, { useRef } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    const state = props.diaPage;

    const dialogsElements = state.dialogsData.map(d => (
        <div className={s.dialogItem} key={d.id}>
            <div className={s.avatarAndName}>
                <img
                    alt=""
                    className={s.avatar}
                    src={d.avatarUrl}
                />
                <DialogItem name={d.name} key={d.id} id={d.id} />
            </div>
        </div>
    ));

    const messagesElements = state.messageData.map(m => (
        <Message message={m.message} key={m.id} id={m.id} />
    ));

    let newMessageAdd = useRef();

    const addMessage = () => {
        props.addMessage();
    };

    const sendMessage = (e) => {
        const text = e.target.value;
        props.updateNewMessage(text);
    };

    return (
        <div className={s.containerthree}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.postBlock}>
                        <div className={s.fieldformesssage}>
                            <input
                                className={s.input}
                                type="text"
                                onChange={sendMessage}
                                ref={newMessageAdd}
                                value={state.newMessageAdd}
                                placeholder="Enter your comment"
                            />
                            <button className={s.addButton} onClick={addMessage}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
