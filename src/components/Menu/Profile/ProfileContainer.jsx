import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUsersProfile } from '../../../redux/Profile-reducer';
import Profile from '../Profile/Profile';
import axios from 'axios';
import { compose } from 'redux';

const ProfileContainer = ({ profile, setUsersProfile }) => {
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
          setUsersProfile(response.data);
        })
        .catch(error => {
          console.error("Error fetching profile data:", error);
        });
    }
  }, [userId, setUsersProfile]);

  return <Profile profile={profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { setUsersProfile }),
)(ProfileContainer);
