import React from 'react';
import PageContent from '../../PageContent/PageContent';
import Tabscontainer from '../../Navboxcomponent/Tabscontainer/Tabscontainer';
import SideBar from '../../Navboxcomponent/Tabscontainer/ContentTabs/SideBar/SideBar';
import s from './Profile.module.css';

const Profile = ({ profile }) => {
  return (
    <div>
      <div id={s.itemnav}>
        <div>
          <PageContent profile={profile} />
          <Tabscontainer />
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Profile;
