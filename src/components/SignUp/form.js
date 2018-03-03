import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { signUp } from '../../actions/creators/auth';
import { CircularProgress } from 'material-ui/Progress';
import { Redirect } from 'react-router-dom';
import * as routes from '../../config/routes';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  formField: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  error: {
    textAlign: 'center',
    color: 'red'
  },
  success: {
    marginTop: theme.spacing.unit * 2
  }
});

class SignUpForm extends Component {
  state = {
    email: '',
    password: ''
  };
  handleSubmit = e => {
    const { email, password } = this.state;
    const { signUp } = this.props;

    if (email !== '' && password !== '') {
      signUp(email, password);
    }

    e.preventDefault();
  };
  handleInputChange = e => {
    let update = {};
    update[e.target.name] = e.target.value;

    this.setState(update);
  };
  render() {
    const { email, password } = this.state;
    const { classes, isLoading, error, hasSignedUp } = this.props;

    return (
      <Paper className={classes.root}>
        <Typography variant="title" gutterBottom>
          Sign Up
        </Typography>

        {!hasSignedUp && (
          <form onSubmit={this.handleSubmit} type="post" action="">
            <TextField
              fullWidth
              label="Email Address"
              id="email"
              type="email"
              name="email"
              value={email}
              required
              onChange={this.handleInputChange}
              className={classes.formField}
            />
            <TextField
              fullWidth
              label="Password"
              id="password"
              type="password"
              name="password"
              value={password}
              required
              onChange={this.handleInputChange}
              className={classes.formField}
            />

            {error && (
              <Typography gutterBottom className={classes.error}>
                {error}
              </Typography>
            )}
            {isLoading && <CircularProgress />}
            {!isLoading && (
              <Button
                className={classes.formField}
                variant="raised"
                color="primary"
                type="submit"
                fullWidth
              >
                Sign Up
              </Button>
            )}
          </form>
        )}
        {hasSignedUp && <Redirect to={routes.HOME} />}
      </Paper>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  ...state.signUp
});

export default compose(
  connect(mapStateToProps, { signUp }),
  withStyles(styles)
)(SignUpForm);
