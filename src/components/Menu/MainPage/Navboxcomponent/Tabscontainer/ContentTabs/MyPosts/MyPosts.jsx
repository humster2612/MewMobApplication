import React from 'react';
import s from "./MyPosts.module.css";
import Examples from '../Examples';

const MyPosts = () => {
    const handleSelect = () => {
    
    };

    return (
        <div className={s.postBlock}>
        
        <label className={s.label}>Add your comment</label>
                {/* <input type="text" /> */}
                <input className={s.input} type="text" placeholder="Enter your comment" />
            <button className={s.addButton}>Add Post</button>
            

         
        </div>
    );
};

export default MyPosts;
