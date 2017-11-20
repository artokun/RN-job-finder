import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import styled from 'styled-components/native';

import AuthScreen from './JobsComponents/screens/AuthScreen';
import WelcomeScreen from './JobsComponents/screens/WelcomeScreen';
import MapScreen from './JobsComponents/screens/MapScreen';
import DeckScreen from './JobsComponents/screens/DeckScreen';
import SettingsScreen from './JobsComponents/screens/SettingsScreen';
import ReviewScreen from './JobsComponents/screens/ReviewScreen';

class Jobs extends Component {
  render() {
    const MainNavigator = TabNavigator(
      {
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        main: {
          screen: TabNavigator({
            map: { screen: MapScreen },
            deck: { screen: DeckScreen },
            review: {
              screen: StackNavigator({
                review: { screen: ReviewScreen },
                settings: { screen: SettingsScreen },
              }),
            },
          }),
        },
      },
      {
        navigationOptions: {
          tabBarVisible: false,
        },
        lazy: true,
      }
    );

    return (
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    );
  }
}

export default Jobs;
