import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/Profile-reducer';
import MyPosts from './MyPosts'; // Импортируйте компонент MyPosts

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      const action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => { // Исправлено
      const action = addPostActionCreator();
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
