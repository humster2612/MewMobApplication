import React from 'react';
import s from './PageContent.module.css';
import BannerContent from './BannerContent/BannerContent';
import InfoBanner from './BannerContent/InfoBanner/InfoBanner';
import Infometa from './BannerContent/Infometa/Infometa';
import Preloader from '../Coomon/Preloader/Preloader';
// import ProfileStatus from './ProfileStatus';

const PageContent = ({ profile, updateStatus }) => {
  // if (!profile || !profile.photos || !profile.photos.large) {
  //   return <Preloader />;
  // }
  return (
    <div className={s.addwrapper}>
      <div className={s.bannerback}>
        <BannerContent />
        <InfoBanner />
        <Infometa />
      </div>
      {/* <img src={profile.photos.large} alt="Profile" />
      <ProfileStatus status={status} updateStatus={updateStatus} /> */}
    </div>
  );
};

export default PageContent;
