import React from 'react';
import s from './PageContent.module.css';
import BannerContent from './BannerContent/BannerContent';
import InfoBanner from './BannerContent/InfoBanner/InfoBanner';
import Infometa from './BannerContent/Infometa/Infometa';


const PageContent =()=>{
    return (
       <div className={s.addwrapper}>           
           
            <div className={s.bannerback}>
            
            <BannerContent/>
            <InfoBanner/> <Infometa/>
            
            </div>

       </div>

       
    )
};

export default PageContent;
