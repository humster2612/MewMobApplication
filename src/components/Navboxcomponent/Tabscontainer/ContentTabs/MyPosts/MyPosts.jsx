import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../../Utils/validators';

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.postForm}>
            <div>
                <Field
                    name="newPostText"
                    component="textarea"
                    placeholder="Post message"
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button type="submit" className={s.addButton}>Add Post</button>
            </div>
        </form>
    );
};

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = (props) => {
    const postsElements = props.posts.map(p => (
        <div className={s.commentWrapper} key={p.id}>
            <img
                alt=""
                className={s.userIcon}
                src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/24/60951ab24ec80-bpfull.jpg"
            />
            <div className={s.commentContent}>
                <div className={s.nameUser}>Olha Kotik, 2024</div>
                <Post message={p.message} />
            </div>
        </div>
    ));

    const addNewPost = (values) => {
        if (values.newPostText.length <= 10) {
            props.addPost(values.newPostText);
        }
    };

    return (
        <div className={s.postBlock}>
            <label className={s.label}>Add your comment</label>
            <AddNewPostForm onSubmit={addNewPost} />
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
