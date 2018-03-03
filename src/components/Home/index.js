import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import { clearWeatherData } from '../../actions/creators/weather';

import SearchForm from '../SearchForm';
import WeatherCard from '../WeatherCard';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2
  },
  caption: {
    marginTop: theme.spacing.unit * 6
  }
});

class HomePage extends Component {
  render() {
    const { classes, weatherData } = this.props;

    return (
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={6}>
          <SearchForm />
        </Grid>
        <Grid container justify="center">
          {weatherData && (
            <Grid item xs={12} md={6} lg={3}>
              <WeatherCard data={weatherData} />
            </Grid>
          )}
        </Grid>
        <a
          href="https://darksky.net/poweredby/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.caption}
        >
          <Typography variant="caption">Powered By Dark Sky</Typography>
        </a>
      </Grid>
    );
  }
  componentWillUnmount() {
    const { clearWeatherData } = this.props;
    clearWeatherData();
  }
}

const mapStateToProps = (state, ownProps) => ({
  weatherData: state.weather.data
});

const mapDispatchToProps = {
  clearWeatherData
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(HomePage);
