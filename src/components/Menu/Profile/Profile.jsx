import React from 'react';
import PageContent from '../../PageContent/PageContent';
import Tabscontainer from '../../Navboxcomponent/Tabscontainer/Tabscontainer';
import SideBar from '../../Navboxcomponent/Tabscontainer/ContentTabs/SideBar/SideBar';
import s from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <div id={s.itemnav}>
        <div>
          <PageContent   profile={props.profile} />
        
          <Tabscontainer  />
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Profile;
