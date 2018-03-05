import React, { Component } from 'react';
import { withStyles } from 'material-ui';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2
  }
});

class NotFoundPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="title" gutterBottom>
          404: Page Not Found
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(NotFoundPage);
