import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/HomePage-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  const state = props.store.getState();

  const AddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      AddPost={AddPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
