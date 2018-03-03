import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui';
import { compose } from 'redux';
import Divider from 'material-ui/Divider';

import Fog from '../assets/icons/Cloud-Fog.svg';
import PartlyCloudyNight from '../assets/icons/Cloud-Moon.svg';
import Rain from '../assets/icons/Cloud-Rain.svg';
import Sleet from '../assets/icons/Cloud-Snow.svg';
import PartlyCloudyDay from '../assets/icons/Cloud-Sun.svg';
import Cloudy from '../assets/icons/Cloud.svg';
import ClearNight from '../assets/icons/Moon.svg';
import Snow from '../assets/icons/Snowflake.svg';
import ClearDay from '../assets/icons/Sun.svg';
import Wind from '../assets/icons/Wind.svg';

const renderIcon = icon => {
  switch (icon) {
    case 'clear-day':
      return ClearDay;
    case 'clear-night':
      return ClearNight;
    case 'rain':
      return Rain;
    case 'snow':
      return Snow;
    case 'sleet':
      return Sleet;
    case 'wind':
      return Wind;
    case 'fog':
      return Fog;
    case 'cloudy':
      return Cloudy;
    case 'partly-cloudy-day':
      return PartlyCloudyDay;
    case 'partly-cloudy-night':
      return PartlyCloudyNight;
    default:
      return ClearDay;
  }
};

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  divider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  location: {
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    flex: 2,
    textAlign: 'center'
  },
  summary: {
    flex: 3
  }
});

class WeatherCard extends Component {
  render() {
    const { data, classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Typography variant="title" className={classes.location}>
          {data.location.address}
        </Typography>
        <Divider className={classes.divider} />
        <div className={classes.container}>
          <div className={classes.icon}>
            <img src={renderIcon(data.icon)} alt={data.icon} />
          </div>
          <div className={classes.summary}>
            <Typography variant="title">
              {data.temperature}
              &deg;F
            </Typography>
            <Typography variant="subheading">{data.summary}</Typography>
            <Typography variant="caption">
              Humidity: {data.humidity}%
            </Typography>
            <Typography variant="caption">UV Index: {data.uvIndex}</Typography>
          </div>
        </div>
      </Paper>
    );
  }
}

export default compose(withStyles(styles))(WeatherCard);
