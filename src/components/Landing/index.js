import React, { Component } from 'react';
import { withStyles } from 'material-ui';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  }
});

class LandingPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="title" gutterBottom>
          LandingPage
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
