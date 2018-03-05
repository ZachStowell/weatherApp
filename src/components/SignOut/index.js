import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signOut } from '../../actions/creators/auth';

import * as routes from '../../config/routes';

class SignOutPage extends Component {
  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return <Redirect to={routes.LANDING} />;
  }
}
const mapStateToProps = (state, ownProps) => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps, { signOut })(SignOutPage);
