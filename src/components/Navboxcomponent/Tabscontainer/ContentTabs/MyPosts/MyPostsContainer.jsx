import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/Profile-reducer.ts';
import MyPosts from './MyPosts';

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
addPost: (text) => {
const action = addPostActionCreator(text);
dispatch(action);
}
};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);