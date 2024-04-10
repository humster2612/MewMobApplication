import React from 'react';
import s from "./MyPosts.module.css";
import Examples from '../Examples';

const MyPosts = () => {
    const handleSelect = () => {
    
    };

  let newPostElement=React.createRef();
    

const AddPost =()=>{
    let text = newPostElement.current.value;
    alert (text);



};


    return (
        <div className={s.postBlock}>
        
        <label className={s.label}>Add your comment</label>
                {/* <input type="text" /> */}
                <input className={s.input} type="text" ref={newPostElement} placeholder="Enter your comment" />
            <button className={s.addButton} onClick={AddPost}>Add Post</button>
            

         
        </div>
    );
};

export default MyPosts;
