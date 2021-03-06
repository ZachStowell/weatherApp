import React, { Component } from 'react';
import SignUpForm from './form';
import { compose } from 'redux';
import { withStyles } from 'material-ui';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2
  }
});

class SignUpPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={9} md={4}>
          <SignUpForm />
        </Grid>
      </Grid>
    );
  }
}

export default compose(withStyles(styles))(SignUpPage);
