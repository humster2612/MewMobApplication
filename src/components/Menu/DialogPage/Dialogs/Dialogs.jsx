import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
// import { FaCheck } from "react-icons/fa";



const Dialogs = (props) => {
    const diaPage = props.state.dialogsData.map(d => (
        <div className={s.dialogItem}>
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

    const messagesElements = props.state.messageData.map(m => <Message message={m.message} id={m.id} />);

        let NewMessage=React.createRef();



       let AddMessage =()=>{
        props.AddMessage();
        NewMessage.current.value ='';

       }


        const SendMessage = () =>{
            let text = NewMessage.current.value;
            props.updateNewMessageText(text); 
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
                      
                              
                              <input className={s.input} type="text" onChange={SendMessage} ref={NewMessage} value={props.newMessageAdd} placeholder="Enter your comment" />
            <button className={s.addButton} onClick={AddMessage}>Send Message</button>
                        </div>
     

         
        </div>
                </div>
            </div>
        </div>
    );
};




export default Dialogs;
