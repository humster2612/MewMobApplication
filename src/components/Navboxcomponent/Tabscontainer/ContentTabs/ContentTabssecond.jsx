import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './ContentTabssecond.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const ContentTabssecond = (props) => {
  const { toggleState, store } = props;

  return (
    <div className="content-tabs">
      <div className={toggleState === 1 ? 'content active-content' : 'content'}>
        <div className="post-header">
          <div className="media">
            <div className="activity-avatar">
              <img
                alt=""
                className="avatar"
                src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg"
              />
            </div>
            <div className="status-info">
              <div className="activity-title">
                <div className="user-info-container">
                  <FaCheck className="check-icon" />
                  <a href="https://www.radiustheme.com/demo/wordpress/themes/cirkle/members/admin/" className="user-link">Rebeca Powel</a>
                </div>
                <span className="second-user-container">posted an update</span>
                <div className="activity-time">3 years ago</div>
              </div>
            </div>
          </div>
        </div>

        <MyPostsContainer  />
        <div className="textik">
          I have great news to share with you all! I've been officially made a game streaming verified partner by Streamy of the http://radiustheme.com/ What does this mean? I'll be uploading new content 
          every day, improving the quality and I'm gonna have access to games a month before the official release.
        </div>
      </div>
    </div>
  );
};

export default ContentTabssecond;