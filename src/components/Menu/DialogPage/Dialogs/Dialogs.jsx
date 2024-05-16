// In Dialogs.js
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

        let state = props.diaPage;


    const diaPage = state.dialogsData.map(d => (
        <div className={s.dialogItem} key={d.id}>
            <div className={s.avatarAndName}>
                <img
                    alt=""
                    className={s.avatar}
                    src={d.avatarUrl} 
                />
                <DialogItem name={d.name} id={d.id} />
            </div>
        </div>
    ));

    const messagesElements = state.messageData.map(m => <Message message={m.message} id={m.id} key={m.id} />);

    let NewMessage = React.createRef();

    let AddMessage = () => {
        // props.dispatch();
        // NewMessage.current.value = '';
        // let action=({type:'ADD-MESSAGE'});
        // props.dispatch(action);

    //     let action = { type: 'ADD-MESSAGE' };
    // props.dispatch(action);

    props.AddMessage();


    }

    const SendMessage = () => {
        let text = NewMessage.current.value;
        props.updateNewMessage(text);

       
    }

    return (
        <div className={s.containerthree}> 
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {diaPage}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.postBlock}>
                        <div className={s.fieldformesssage}>
                            <input className={s.input} type="text" onChange={SendMessage} ref={NewMessage} value={state.newMessageAdd} placeholder="Enter your comment" />
                            <button className={s.addButton} onClick={AddMessage}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
