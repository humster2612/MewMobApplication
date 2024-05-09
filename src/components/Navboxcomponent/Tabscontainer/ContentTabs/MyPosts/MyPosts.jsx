import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/state';





const MyPosts = (props) => {
    let profilePage = 
        props.posts ? props.posts.map(p => (
            <div className={s.commentWrapper}>
                <img
                    alt=""
                    className={s.userIcon}
                    src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/24/60951ab24ec80-bpfull.jpg"
                />

                <div className={s.commentContent}>
                  <div className={s.nameUser}>
                Olha Kotik, 2024
                </div>
                <Post message={p.message}/>
                </div>
            </div>
        )) : null;


  let newPostElement=React.createRef();
    

const AddPost =()=>{
//     props.dispatch();
//     // let text = newPostElement.current.value;
//     let action=({type:'ADD-POST'});
//    newPostElement.current.value ='';
//         props.dispatch(action);

// let action = { type: 'ADD-POST' };
// props.dispatch(action);
props.dispatch(addPostActionCreator());

   
};


let onPostChange = ()=>{
    let text = newPostElement.current.value; 
//   let action={type:'UPDATE-NEW-POST-TEXT', newText: text};
  let action= updateNewPostTextActionCreator (text);
  props.dispatch(action);

}

    return (
        <div className={s.postBlock}>
        
    <label className={s.label}>Add your comment</label>
          {/* <input type="text" /> */}
          <input className={s.input} type="text" onChange={onPostChange} ref={newPostElement} value ={props.newPostText} placeholder="Enter your comment" />
    <button className={s.addButton} onClick={AddPost}>Add Post</button>
        
        <div className={s.posts}>
           {profilePage}

        </div>
        </div>

    );
};

export default MyPosts;


