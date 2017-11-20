import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <View style={{ marginTop: 15 }}>
          <Button
            title="Onwards!"
            raised
            buttonStyle={{ backgroundColor: '#0288D1' }}
            onPress={this.props.onComplete}
          />
        </View>
      );
    }
  }
  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <SlideContainer key={slide.text} color={slide.color}>
          <SlideText>{slide.text}</SlideText>
          {this.renderLastSlide(index)}
        </SlideContainer>
      );
    });
  }

  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const SlideContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 30px;
  align-items: center;
  width: ${SCREEN_WIDTH};
  background-color: ${({ color }) => color};
`;
const SlideText = styled.Text`
  font-size: 30px;
  color: white;
  text-align: center;
`;

export default Slides;
