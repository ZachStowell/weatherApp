import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import { fetchWeather } from '../actions/creators/weather';
import { Typography } from 'material-ui/styles';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  button: {
    marginLeft: theme.spacing.unit * 2
  },
  divider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  progress: {
    marginTop: theme.spacing.unit * 4,
    textAlign: 'center'
  },
  error: {
    textAlign: 'center',
    color: 'red'
  }
});

class SearchForm extends Component {
  state = {
    address: ''
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { address } = this.state;
    const { fetchWeather } = this.props;

    fetchWeather(address);
  };
  handleInputChange = e => {
    let update = {};
    update[e.target.name] = e.target.value;

    this.setState(update);
  };
  render() {
    const { classes, isLoading, error } = this.props;
    const { address } = this.state;
    let canSubmit = !isLoading && address.length > 0;

    return (
      <form onSubmit={this.handleSubmit} className={classes.root}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={7} sm={9}>
            <TextField
              label="Address"
              type="text"
              name="address"
              onChange={this.handleInputChange}
              value={address}
              fullWidth
            />
          </Grid>
          <Grid item xs={4} sm={3}>
            {canSubmit && (
              <Button
                type="submit"
                variant="raised"
                color="primary"
                className={classes.button}
                fullWidth
              >
                Get Weather
              </Button>
            )}
            {!canSubmit && (
              <Button
                type="submit"
                variant="raised"
                color="primary"
                className={classes.button}
                fullWidth
                disabled
              >
                Get Weather
              </Button>
            )}
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        {isLoading && (
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.progress}
          >
            <Grid item xs={6}>
              <CircularProgress />
            </Grid>
          </Grid>
        )}
        {error && <Typography className={classes.error}>{error}</Typography>}
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.weather.isLoading,
  error: state.weather.error
});

export default compose(
  connect(mapStateToProps, { fetchWeather }),
  withStyles(styles)
)(SearchForm);
