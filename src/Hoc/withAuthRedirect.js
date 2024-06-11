import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux'; // Import connect

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to='/login' />;
      return <Component {...this.props} />;
    }
  }

  // Connect the RedirectComponent with mapStateToPropsForRedirect
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent; // Return the connected component
};
