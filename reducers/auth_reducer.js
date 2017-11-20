import * as types from '../actions/types';

export default function(state = {}, { type, payload }) {
  switch (type) {
    case types.FACEBOOK_LOGIN_SUCCESS:
      return { token: payload };
    case types.FACEBOOK_LOGIN_FAIL:
      return { token: null };
    default:
      return state;
  }
}
