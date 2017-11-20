import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import firebase from 'firebase';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-weapon-store.cloudfunctions.net';

class SignInForm extends Component {
  state = { phone: '', code: '' };

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(ROOT_URL + '/verifyOneTimePW', {
        phone: this.state.phone,
        code: this.state.code,
      });

      firebase.auth().signInWithCustomToken(data.token);
    } catch (error) {
      console.log({ error });
    }
  };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Verify Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button onPress={this.handleSubmit} title="Verify" />
      </View>
    );
  }
}

export default SignInForm;
