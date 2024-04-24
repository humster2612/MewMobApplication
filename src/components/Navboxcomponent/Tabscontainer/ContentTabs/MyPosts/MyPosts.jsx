import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {

    let profilePage = 
    props.posts ? props.posts.map(p => <Post message ={p.message}/>) : null;


  let newPostElement=React.createRef();
    

const AddPost =()=>{
    // let text = newPostElement.current.value;
   props.AddPost();
   newPostElement.current.value ='';


   
};


let onPostChange = ()=>{
    let text = newPostElement.current.value; 
  props.updateNewPostText(text);

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


