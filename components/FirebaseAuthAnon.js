import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import SignUpForm from './FirebaseAuthAnonComponents/SignUpForm';
import SignInForm from './FirebaseAuthAnonComponents/SignInForm';

class FirebaseAuthAnon extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA_PkVhxAiE6aoNiIuwy27sRc2ZydM6u1Q',
      authDomain: 'weapon-store.firebaseapp.com',
      databaseURL: 'https://weapon-store.firebaseio.com',
      projectId: 'weapon-store',
      storageBucket: 'weapon-store.appspot.com',
      messagingSenderId: '716806251127',
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

export default FirebaseAuthAnon;
