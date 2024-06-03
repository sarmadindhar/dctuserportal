import {
    GET_LICENSE_ACTIONS,
    GET_LICENSE_ACTIONS_SUCCESS,
  } from '../types';
  
  export const getLicenseActions = (query: any) => {
    return {
      type: GET_LICENSE_ACTIONS,
      payload: { query },
    };
  };
  
  export const getLicenseActionsSuccess = (data: any) => {
    return {
      type: GET_LICENSE_ACTIONS_SUCCESS,
      payload: data,
    };
  };