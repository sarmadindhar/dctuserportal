import {
  ADD_FINE,
  GET_FINE,
  GET_FINES,
  GET_FINES_SUCCESS,
  GET_FINE_SUCCESS,
  UPDATE_FINE,
  DELETE_FINE,
  CALCULATE_FINE,
  SAVE_AS_DRAFT_FINE,
  SEND_TO_TIER_2_FINE,
  UPDATE_FINE_BY_TIER_1,
  UPDATE_FINE_STATUS,
  ISSUE_FINE_BY_TIER_2,
  UPDATE_LICENSE_STATUS
} from '../types';

export const getFines = (query: any) => {
  return {
    type: GET_FINES,
    payload: { query },
  };
};

export const getFinesSuccess = (data: any) => {
  return {
    type: GET_FINES_SUCCESS,
    payload: data,
  };
};

export const addFine = (data: any) => {
  return {
    type: ADD_FINE,
    payload: { data },
  };
};

export const getFine = (id: string) => {
  return {
    type: GET_FINE,
    payload: { id },
  };
};

export const getFineSuccess = (data: any) => {
  return {
    type: GET_FINE_SUCCESS,
    payload: data,
  };
};

export const updateFine = (id: string, data: any) => {
  return {
    type: UPDATE_FINE,
    payload: { id, data },
  };
};

export const deleteFine = (id: any) => {
  return {
    type: DELETE_FINE,
    payload: { id },
  };
};

export const calculateFine = (data: any, callback?: any) => {
  return {
    type: CALCULATE_FINE,
    payload: { data, callback },
  };
};

export const saveAsDraftFine = (data: any, callback?: any) => {
  return {
    type: SAVE_AS_DRAFT_FINE,
    payload: { data, callback },
  };
};

export const sendToTier2Fine = (data: any, callback?: any) => {
  return {
    type: SEND_TO_TIER_2_FINE,
    payload: { data, callback },
  };
};

export const updateFineByTier1 = (data: any, callback?: any) => {
  return {
    type: UPDATE_FINE_BY_TIER_1,
    payload: { data, callback },
  };
};

export const updateFineStatus = (data: any, callback?: any) => {
  return {
    type: UPDATE_FINE_STATUS,
    payload: { data, callback },
  };
};

export const issueFineByTierTwo = (data: any, callback?: any) => {
  return {
    type: ISSUE_FINE_BY_TIER_2,
    payload: { data, callback },
  };
};

export const updateLicenseStatus = (data: any, callback?: any) => {
  return {
    type: UPDATE_LICENSE_STATUS,
    payload: { data, callback },
  };
};
