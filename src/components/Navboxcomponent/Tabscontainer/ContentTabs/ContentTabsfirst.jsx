import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "./ContentTabsfirst.css";
import Examples from "./Examples";
import ContentFirstImages from "./ContentTabsfirstImages/ContentFirstImages/ContentFirstImages";





const ContentTabsfirst =({toggleState}) =>{
    return (

      <div className="content-tabs">
      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
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
                <FaCheck className="check-icon" /> 
                <a href="https://www.radiustheme.com/demo/wordpress/themes/cirkle/members/admin/">Rebeca Powel</a>
                <span>
                  <span className="bp-verified-badge"></span>
                </span>
                <span> posted an update</span>
              </div>
              <div className="activity-time">3 years ago</div>
            </div>
            
          </div>
          
        </div>

        <div className="post-body">
        <div className="activity-inner">
        <p class="widget-box-status-text">
          Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium
           der doloremque laudantium Sed ut perspicia tisery. 
           I’ll be uploading new content every day, improving the quality.</p>
         
        </div>


        <section id="examples"> 
       
        <menu>
              <Examples>Components</Examples>
              <Examples>Likes</Examples>
              <Examples>Coments</Examples>
        </menu>
        </section>

      </div>
            
          <ContentFirstImages/>
      

      </div>
      </div>







    )
};

export default ContentTabsfirst;
