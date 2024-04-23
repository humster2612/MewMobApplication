import React from 'react';
import s from "./MyPosts.module.css";
import Examples from '../Examples';
import Post from './Post/Post';

const MyPosts = (props) => {

    let profilePage = 
    props.posts ? props.posts.map(p => <Post message ={p.message}/>) : null;


  let newPostElement=React.createRef();
    

const AddPost =()=>{
    let text = newPostElement.current.value;
   props.AddPost(text);
};

    return (
        <div className={s.postBlock}>
        
    <label className={s.label}>Add your comment</label>
          {/* <input type="text" /> */}
          <input className={s.input} type="text" ref={newPostElement} placeholder="Enter your comment" />
    <button className={s.addButton} onClick={AddPost}>Add Post</button>
            

        <div className={s.posts}>
            
           {profilePage}
           
        </div>
        </div>

    );
};

export default MyPosts;


