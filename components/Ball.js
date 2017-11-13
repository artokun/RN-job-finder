import React, { Component } from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'

class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0)
    Animated.spring(this.position, {
      toValue: { x: 500, y: 200 }
    }).start()
  }
  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <BallStyles />
      </Animated.View>
    )
  }
}

const BallStyles = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 50;
  background-color: black;
`

export default Ball
