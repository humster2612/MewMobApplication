import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Remove withRouter
import { connect } from 'react-redux';
import { setUsersProfile } from '../../../redux/Profile-reducer';
import Profile from '../Profile/Profile';
import axios from 'axios';
import { withAuthRedirect } from '../../../Hoc/withAuthRedirect';

const ProfileContainer = (props) => {
  const { userId } = useParams(); // Use useParams hook to get route parameters

  useEffect(() => {
    console.log("Fetching profile for userId:", userId);
    props.setUsersProfile(null);
    if (userId) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
          console.log("Profile data fetched:", response.data);
          props.setUsersProfile(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the profile data!", error);
        });
    }
  }, [userId, props]);

  return (
    <Profile {...props} profile={props.profile} />
  );
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
 
});

export default connect(mapStateToProps, { setUsersProfile })(AuthRedirectComponent);
