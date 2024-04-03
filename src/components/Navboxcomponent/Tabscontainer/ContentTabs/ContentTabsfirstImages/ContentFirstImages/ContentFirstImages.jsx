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
    </div>
  );
};

export default ContentFirstImages;
