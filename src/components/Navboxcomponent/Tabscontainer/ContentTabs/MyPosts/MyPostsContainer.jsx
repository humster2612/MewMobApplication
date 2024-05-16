import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/HomePage-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../../../StoreContext';

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
        {
        (store)=>{

              const state = store.getState();
              const AddPost = () => {
                store.dispatch(addPostActionCreator());
              };
            
              const onPostChange = (text) => {
                const action = updateNewPostTextActionCreator(text);
                store.dispatch(action);
              };

       return  <MyPosts
      updateNewPostText={onPostChange}
      AddPost={AddPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    
    />
        }
              
  
}
      </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
