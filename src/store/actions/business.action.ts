import {
  ADD_BUSINESS,
  GET_BUSINESS,
  GET_BUSINESSES,
  GET_BUSINESSES_SUCCESS,
  GET_BUSINESS_SUCCESS,
  UPDATE_BUSINESS,
  DELETE_BUSINESS,
  GET_REPORT,
  GET_REPORT_SUCCESS
} from '../types';

export const getBusinesses = (query: any) => {
  return {
    type: GET_BUSINESSES,
    payload: { query },
  };
};

export const getBusinessesSuccess = (data: any) => {
  return {
    type: GET_BUSINESSES_SUCCESS,
    payload: data,
  };
};

export const addBusiness = (data: any) => {
  return {
    type: ADD_BUSINESS,
    payload: { data },
  };
};

export const getBusiness = (id: string) => {
  return {
    type: GET_BUSINESS,
    payload: { id },
  };
};

export const getBusinessSuccess = (data: any) => {
  return {
    type: GET_BUSINESS_SUCCESS,
    payload: data,
  };
};

export const updateBusiness = (id: string, data: any) => {
  return {
    type: UPDATE_BUSINESS,
    payload: { id, data },
  };
};

export const deleteBusiness = (id: any) => {
  return {
    type: DELETE_BUSINESS,
    payload: { id },
  };
};

export const getReport = (query: any) => {
  return {
    type: GET_REPORT,
    payload: { query },
  };
};

export const getReportSuccess = (data: any) => {
  return {
    type: GET_REPORT_SUCCESS,
    payload: data,
  };
};
