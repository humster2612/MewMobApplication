import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../../redux/Dialogs-reducer';

let mapStateToProps = (state) => {
  return {
    diaPage: state.diaPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessage: (text) => {
      dispatch(updateNewMessageActionCreator(text));
    },
    addMessage: () => {  // Изменено с AddMessage на addMessage
      dispatch(addMessageActionCreator());
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
