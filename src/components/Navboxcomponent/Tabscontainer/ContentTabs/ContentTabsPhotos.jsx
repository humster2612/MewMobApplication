import React from "react";
import s from './ContentTabsPhotos.module.css';

const ContentTabsPhotos = ({ toggleState }) => {
  return (
    <div className={s.contentTabs}>
      <div className={toggleState === 4 ? `${s.content} ${s.activeContent}` : s.content}>
        <div className={s.mfpImg}>
          <img
            alt="Status Photo 8"
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/mediapress/members/1/185/Status-Photo-8.jpg"
          />
          <img
            alt="Status Photo 7"
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/mediapress/members/1/185/Status-Photo-7.jpg"
          />
          <img
            alt="Status Photo 5"
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/mediapress/members/1/185/Status-Photo-5.jpg"
          />
          <img
            alt="Status Photo 4"
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/mediapress/members/1/185/Status-Photo-4.jpg"
          />
          <img
            alt="Status Photo 3"
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/mediapress/members/1/185/Status-Photo-3.jpg"
          />
          <img
            alt="Status Photo 2"
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/mediapress/members/1/185/Status-Photo-2.jpg"
          />
          <img
            alt="Status Photo 6"
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/mediapress/members/1/185/Status-Photo-6.jpg"
          />
          <img
            alt="Status Photo 8"
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/mediapress/members/1/185/Status-Photo-8.jpg"
          />
          <img
            alt="Widget Gallery 1"
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/06/Widget-Gallery-1.jpg"
          />
          <img
            alt="Widget Gallery 2"
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/06/Widget-Gallery-2.jpg"
          />
          <img
            alt="Widget Gallery 3"
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/06/Widget-Gallery-3.jpg"
          />
          <img
            alt="Widget Gallery 4"
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/06/Widget-Gallery-4.jpg"
          />
          <img
            alt="Widget Gallery 6"
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/06/Widget-Gallery-6.jpg"
          />
          <img
            alt="Widget Gallery 7"
            src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/06/Widget-Gallery-7.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentTabsPhotos;
