import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../../redux/Dialogs-reducer.ts'; // исправленный импорт
import { withAuthRedirect } from '../../../../Hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    diaPage: state.diaPage,
    isAuth: state.auth.isAuth
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessage: (text) => {
      dispatch(updateNewMessageActionCreator(text));
    },
    addMessage: () => {  
      dispatch(addMessageActionCreator());
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
