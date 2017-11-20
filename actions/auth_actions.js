import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import * as types from './types';

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if (token) {
    dispatch({ type: types.FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  let {
    type,
    token,
  } = await Facebook.logInWithReadPermissionsAsync('168304850423009', {
    permissions: ['public_profile'],
    // behavior: 'native',
  });

  if (type === 'cancel') {
    return dispatchEvent({ type: types.FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: types.FACEBOOK_LOGIN_SUCCESS, payload: token });
};
