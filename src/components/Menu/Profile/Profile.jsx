import React from 'react';
import PageContent from '../../PageContent/PageContent';
import Tabscontainer from '../../Navboxcomponent/Tabscontainer/Tabscontainer';
import SideBar from '../../Navboxcomponent/Tabscontainer/ContentTabs/SideBar/SideBar';
import s from './Profile.module.css';
import ProfileStatus from '../../PageContent/ProfileStatus';

const Profile = ({ profile, status, updateStatus }) => {
    return (
        <div>
            <div id={s.itemnav}>
                <div>
                    {/* <ProfileStatus status={status} updateStatus={updateStatus} /> */}
                    <PageContent profile={profile} status={status} updateStatus={updateStatus} />
                    <Tabscontainer />
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default Profile;
