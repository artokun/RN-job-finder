import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { View, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { MapView } from 'expo';
import styled from 'styled-components/native';

class MapScreen extends Component {
  state = {
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09,
    },
    mapLoaded: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ mapLoaded: true }), 300);
  }

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region);
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <MapScreenStyles>
        <MapViewStyles
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <ButtonContainerStyles>
          <Button
            large
            title="Search This Area"
            backgroundColor="#009688"
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
        </ButtonContainerStyles>
      </MapScreenStyles>
    );
  }
}

const MapScreenStyles = styled.View`flex: 1;`;
const MapViewStyles = styled(MapView)`flex: 1;`;
const ButtonContainerStyles = styled.View`
  position: absolute;
  bottom: 20;
  left: 0;
  right: 0;
`;

export default connect(null, actions)(MapScreen);
