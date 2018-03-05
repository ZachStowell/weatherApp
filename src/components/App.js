import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Reboot from 'material-ui/Reboot';
import { withStyles } from 'material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as routes from '../config/routes';
import Navigation from './Navigation';

import PrivateRoute from './PrivateRoute';

import LandingPage from './Landing/';
import SignUpPage from './SignUp/';
import SignInPage from './SignIn/';
import HomePage from './Home/';
import SignOutPage from './SignOut';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div>
          <Reboot />
          <Navigation />
          <div className={classes.root}>
            <Switch>
              <PrivateRoute exact path={routes.HOME} component={HomePage} />}
              <PrivateRoute
                exact
                path={routes.SIGN_OUT}
                component={SignOutPage}
              />
              <Route exact path={routes.LANDING} component={LandingPage} />
              <Route exact path={routes.SIGN_UP} component={SignUpPage} />
              <Route exact path={routes.SIGN_IN} component={SignInPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default compose(connect(mapStateToProps, {}), withStyles(styles))(App);
