import React from 'react';
import s from './PageContent.module.css';
import BannerContent from './BannerContent/BannerContent';
import InfoBanner from './BannerContent/InfoBanner/InfoBanner';
import Infometa from './BannerContent/Infometa/Infometa';
import Preloader from '../Coomon/Preloader/Preloader';

const PageContent = (props) => {
  console.log('PageContent props:', props);

  if (!props.profile || !props.profile.photos || !props.profile.photos.large) {
    return <Preloader />;
  }

  return (
    <div className={s.addwrapper}>
      <div className={s.bannerback}>
        <BannerContent />
        <InfoBanner />
        <Infometa />
      </div>
      <img src={props.profile.photos.large} alt="Profile" />
    </div>
  );
};

export default PageContent;
