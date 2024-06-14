import React from 'react';
import s from './BannerContent.module.css';

const BannerContent = () => {
  console.log('Rendering BannerContent');
  return (
    <div className={s.imageface}>
      <img className={s.avatar} src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg" alt="Profile picture of Rebeca Powel" />
    </div>
  );
};

export default BannerContent;
