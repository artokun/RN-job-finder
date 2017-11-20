import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import store from './store';
import Jobs from './components/Jobs';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer>
          <Jobs />
        </MainContainer>
      </Provider>
    );
  }
}

const MainContainer = styled.View`flex: 1;`;

export default App;
