import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as routes from '../config/routes';

const PrivateRoute = ({ component: Component, isSignedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isSignedIn) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: routes.SIGN_IN, state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps, {})(PrivateRoute);
