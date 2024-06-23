import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom'; // Используем Navigate вместо Redirect
import { addMessageActionCreator, updateNewMessageActionCreator, setActiveDialogActionCreator } from '../../../../redux/Dialogs-reducer.ts';
import s from './Dialogs.module.css';
import DialogItem from '../Dialogs/DialogItem/DialogItem.jsx';
import Message from '../Dialogs/Message/Message.jsx';
import { withAuthRedirect } from '../../../../Hoc/withAuthRedirect.js';
import { compose } from 'redux'; // Импортируем compose для композиции HOC

const Dialogs = ({ diaPage, updateNewMessage, addMessage, setActiveDialog, isAuth }) => {
    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    const { dialogsData, messageData, newMessageAdd, activeDialogId } = diaPage;

    const onDialogClick = (dialogId) => {
        setActiveDialog(dialogId);
    };

    const onSendMessageClick = () => {
        addMessage();
    };

    const onMessageChange = (e) => {
        updateNewMessage(e.target.value);
    };

    const activeMessages = messageData.filter(msg => msg.dialogId === activeDialogId);

    return (
        <div>
        <div className={s.textD}>
        Dialogs
   </div>
        <div className={s.dialogs}>
            
            <div className={s.dialogsItems}>
                {dialogsData.map(dialog => (
                    <div key={dialog.id} onClick={() => onDialogClick(dialog.id)}>
                        <DialogItem name={dialog.name} id={dialog.id} avatarUrl={dialog.avatarUrl} />
                    </div>
                ))}
            </div>
            <div className={s.messages}>
                {activeMessages.map(msg => (
                    <Message key={msg.id} message={msg.message} />
                ))}
                {activeDialogId && (
                    <div>
                        <div>
                            <textarea value={newMessageAdd} onChange={onMessageChange} />
                        </div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    diaPage: state.diaPage,
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = (dispatch) => ({
    updateNewMessage: (text) => {
        dispatch(updateNewMessageActionCreator(text));
    },
    addMessage: () => {
        dispatch(addMessageActionCreator());
    },
    setActiveDialog: (dialogId) => {
        dispatch(setActiveDialogActionCreator(dialogId));
    }
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
