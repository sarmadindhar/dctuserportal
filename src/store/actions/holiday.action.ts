import {
  ADD_HOLIDAY,
  GET_HOLIDAY,
  GET_HOLIDAYS,
  GET_HOLIDAYS_SUCCESS,
  GET_HOLIDAY_SUCCESS,
  UPDATE_HOLIDAY,
  DELETE_HOLIDAY,
} from '../types';

export const getHolidays = (query: any) => {
  return {
    type: GET_HOLIDAYS,
    payload: { query },
  };
};

export const getHolidaysSuccess = (data: any) => {
  return {
    type: GET_HOLIDAYS_SUCCESS,
    payload: data,
  };
};

export const addHoliday = (data: any) => {
  return {
    type: ADD_HOLIDAY,
    payload: { data },
  };
};

export const getHoliday = (id: string) => {
  return {
    type: GET_HOLIDAY,
    payload: { id },
  };
};

export const getHolidaySuccess = (data: any) => {
  return {
    type: GET_HOLIDAY_SUCCESS,
    payload: data,
  };
};

export const updateHoliday = (id: string, data: any) => {
  return {
    type: UPDATE_HOLIDAY,
    payload: { id, data },
  };
};

export const deleteHoliday = (id: any) => {
  return {
    type: DELETE_HOLIDAY,
    payload: { id },
  };
};
