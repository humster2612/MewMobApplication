import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUsersProfile, getStatus, updateStatus } from '../../../redux/Profile-reducer.ts';
import Profile from '../Profile/Profile';
import { compose } from 'redux';
import { profileAPI } from '../../../assets/images/api/api';

const ProfileContainer = ({ profile, setUsersProfile, status, getStatus, updateStatus }) => {
    const { userId } = useParams();

    useEffect(() => {
        if (userId) {
            profileAPI.getProfile(userId)
                .then(response => {
                    setUsersProfile(response.data);
                })
                .catch(error => {
                    console.error("Error fetching profile data:", error);
                });

            getStatus(userId);
        }
    }, [userId, setUsersProfile, getStatus]);

    return <Profile profile={profile} status={status} updateStatus={updateStatus} />;
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, { setUsersProfile, getStatus, updateStatus }),
)(ProfileContainer);
