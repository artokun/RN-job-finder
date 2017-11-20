import React, { Component } from 'react';
import _ from 'lodash';
import { AppLoading } from 'expo';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';
import styled from 'styled-components/native';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03a9f4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location, then swipe away...', color: '#03a9f4' },
];

class WelcomeScreen extends Component {
  state = {
    token: null,
  };

  async componentDidMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.setState({ token });
      this.props.navigation.navigate('map');
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  };

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    return (
      <WelcomeContainer>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
      </WelcomeContainer>
    );
  }
}

const WelcomeContainer = styled.View`flex: 1;`;

export default WelcomeScreen;
