import React from "react";
import "./ContentFirstImages.css";

const ContentFirstImages = () => {
  return (
    <div className="thumbs-wrap">
      <div className="thumbs-wrap-row medium">
        <div className="thumbs-wrap-item">
          <div className="photo-preview-wrap">
            <div className="photo-preview">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/mediapress/members/1/185/Status-Photo-1.jpg"
                alt="Preview"
                className="photo-preview-image"
              />
            </div>
            <div className="photo-preview-info"></div>
          </div>
        </div>
     
        <div className="thumbs-wrap-item">
          <div className="photo-preview-wrap">
            <div className="photo-preview">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/mediapress/members/1/185/Status-Photo-2.jpg"
                alt="Preview"
                className="photo-preview-image"
              />
            </div>
            <div className="photo-preview-info"></div>
          </div>
        </div>
      </div>

      <div className="thumbs-wrap-row">
        <div className="thumbs-wrap-item">
          <div className="photo-preview-wrap">
            <div className="photo-preview">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/mediapress/members/1/185/Status-Photo-3.jpg"
                alt="Preview"
                className="photo-preview-image"
              />
            </div>
            <div className="photo-preview-info"></div>
          </div>
        </div>
      
        <div className="thumbs-wrap-item">
          <div className="photo-preview-wrap">
            <div className="photo-preview">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/mediapress/members/1/185/Status-Photo-4.jpg"
                alt="Preview"
                className="photo-preview-image"
              />
            </div>
            <div className="photo-preview-info"></div>
          </div>
        </div>

        <div className="thumbs-wrap-item">
          <a className="thumbs-wrap-item-overlay" href="https://www.radiustheme.com/demo/wordpress/themes/cirkle/members/admin/photos">
            <p className="thumbs-wrap-item-overlay-text">+3</p>
          </a>
          <div className="photo-preview-wrap">
            <div className="photo-preview">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/mediapress/members/1/185/Status-Photo-5.jpg"
                alt="Preview"
                className="photo-preview-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFirstImages;
