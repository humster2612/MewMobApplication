import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const profilePage = props.posts ? props.posts.map(p => (
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
  )) : null;

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.AddPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postBlock}>
      <label className={s.label}>Add your comment</label>
      <input
        className={s.input}
        type="text"
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText}
        placeholder="Enter your comment"
      />
      <button className={s.addButton} onClick={onAddPost}>Add Post</button>
      <div className={s.posts}>{profilePage}</div>
    </div>
  );
};

export default MyPosts;
