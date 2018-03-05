import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import * as routes from '../config/routes';

const styles = theme => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  button: {
    marginLeft: theme.spacing.unit
  }
});

class Navigation extends Component {
  render() {
    const { classes, isSignedIn } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Weather
            </Typography>

            <div>
              {!isSignedIn && (
                <Button
                  className={classes.button}
                  color="inherit"
                  component={NavLink}
                  to={routes.SIGN_IN}
                >
                  Sign In
                </Button>
              )}
              {!isSignedIn && (
                <Button
                  className={classes.button}
                  color="secondary"
                  variant="raised"
                  component={NavLink}
                  to={routes.SIGN_UP}
                >
                  Sign Up
                </Button>
              )}

              {isSignedIn && (
                <Button
                  className={classes.button}
                  color="inherit"
                  component={NavLink}
                  to={routes.HOME}
                >
                  Home
                </Button>
              )}
              {isSignedIn && (
                <Button
                  className={classes.button}
                  color="inherit"
                  component={NavLink}
                  to={routes.SIGN_OUT}
                >
                  Sign Out
                </Button>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isSignedIn: state.auth.isSignedIn
});

export default compose(withStyles(styles), connect(mapStateToProps, {}))(
  Navigation
);
