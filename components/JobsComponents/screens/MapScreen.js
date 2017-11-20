import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
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

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  render() {
    return (
      <MapScreenStyles>
        <MapViewStyles
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
      </MapScreenStyles>
    );
  }
}

const MapScreenStyles = styled.View`flex: 1;`;
const MapViewStyles = styled(MapView)`flex: 1;`;

export default MapScreen;
