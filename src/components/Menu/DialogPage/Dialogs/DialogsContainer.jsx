import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../../redux/Dialogs-reducer';
import { withAuthRedirect } from '../../../../Hoc/withAuthRedirect';


let mapStateToProps = (state) => {
  return {
    diaPage: state.diaPage,
    isAuth:state.auth.isAuth

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

let AuthRedirectComponent= withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
