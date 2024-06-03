import { GET_PROFILE, GET_PROFILE_SUCCESS, UPDATE_PROFILE } from '../types';

export const getProfile = (query: any) => {
  return {
    type: GET_PROFILE,
    payload: { query },
  };
};

export const getProfileSuccess = (data: any) => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: data,
  };
};

export const updateProfile = (data: any) => {
  return {
    type: UPDATE_PROFILE,
    payload: { data },
  };
};
