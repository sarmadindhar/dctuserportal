import {
  ADD_LICENSE_TYPE,
  GET_LICENSE_TYPE,
  GET_LICENSE_TYPES,
  GET_LICENSE_TYPES_SUCCESS,
  GET_LICENSE_TYPE_SUCCESS,
  UPDATE_LICENSE_TYPE,
  DELETE_LICENSE_TYPE, GET_LICENSE_TYPES_BY_ACTION_SUCCESS
} from '../types';

export const getLicenseTypes = (query: any) => {
  return {
    type: GET_LICENSE_TYPES,
    payload: { query },
  };
};

export const getLicenseTypesSuccess = (data: any) => {
  return {
    type: GET_LICENSE_TYPES_SUCCESS,
    payload: data,
  };
};

export const addLicenseType = (data: any) => {
  return {
    type: ADD_LICENSE_TYPE,
    payload: { data },
  };
};

export const getLicenseType = (id: string) => {
  return {
    type: GET_LICENSE_TYPE,
    payload: { id },
  };
};

export const getLicenseTypeSuccess = (data: any) => {
  return {
    type: GET_LICENSE_TYPE_SUCCESS,
    payload: data,
  };
};

export const updateLicenseType = (id: string, data: any) => {
  return {
    type: UPDATE_LICENSE_TYPE,
    payload: { id, data },
  };
};

export const deleteLicenseType = (id: any) => {
  return {
    type: DELETE_LICENSE_TYPE,
    payload: { id },
  };
};



export const getLicenseTypesByActionSuccess = (data: any) => {
  return {
    type: GET_LICENSE_TYPES_BY_ACTION_SUCCESS,
    payload: data,
  };
};

