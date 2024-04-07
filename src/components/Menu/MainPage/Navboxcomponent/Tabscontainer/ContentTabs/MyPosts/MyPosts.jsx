import React from 'react';
import s from "./MyPosts.module.css";


const MyPosts =()=>{
    return(
        <div className={s.postBlock}>
        <h3>Add a comment</h3>
        <div>
            <div>
            <textarea></textarea>
            </div>
          
        </div>

        {/* <div className = {s.posts}>
            <Post message='Hi,how are you?' likesCount='0' />
            <Post message="It's my firs project" likesCount ='25'/>
        </div> */}

    </div>

    )

};
export default MyPosts;
