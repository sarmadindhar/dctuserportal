import {
  ADD_LICENSE,
  GET_LICENSE,
  GET_LICENSES,
  GET_LICENSES_SUCCESS,
  GET_LICENSE_SUCCESS,
  UPDATE_LICENSE,
  DELETE_LICENSE,
} from '../types';

export const getLicenses = (query: any) => {
  return {
    type: GET_LICENSES,
    payload: { query },
  };
};

export const getLicensesSuccess = (data: any) => {
  return {
    type: GET_LICENSES_SUCCESS,
    payload: data,
  };
};

export const addLicense = (data: any) => {
  return {
    type: ADD_LICENSE,
    payload: { data },
  };
};

export const getLicense = (id: string) => {
  return {
    type: GET_LICENSE,
    payload: { id },
  };
};

export const getLicenseSuccess = (data: any) => {
  return {
    type: GET_LICENSE_SUCCESS,
    payload: data,
  };
};

export const updateLicense = (id: string, data: any) => {
  return {
    type: UPDATE_LICENSE,
    payload: { id, data },
  };
};

export const deleteLicense = (id: any) => {
  return {
    type: DELETE_LICENSE,
    payload: { id },
  };
};
