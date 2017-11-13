import React, { Component } from 'react'
import { Text } from 'react-native'
import Swipe from './components/Swipe'
import styled from 'styled-components/native'

class App extends Component {
  render() {
    return (
      <MainContainer>
        <Text>Weapon Shop</Text>
      </MainContainer>
    )
  }
}

const MainContainer = styled.View`
  flex: 1;
  background-color: #fff;
`

export default App
