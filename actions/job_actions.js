import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import * as types from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch';
const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript',
};

export const fetchJobs = region => async dispatch => {
  try {
    const zip = await reverseGeocode(region);
    let { data } = await axios.get(JOB_ROOT_URL, {
      params: { ...JOB_QUERY_PARAMS, l: zip },
    });
    dispatch({ type: types.FETCH_JOBS, payload: data });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
