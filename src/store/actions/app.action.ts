import {
  LOADING,
  UPLOAD_FILE,
  UPLOAD_FILE_SUCCESS,
  CLEAR_FILE, SET_LOCALE, GET_REGIONS, GET_REGIONS_SUCCESS
} from '../types';

export const setLoading = (isLoading: boolean) => {
  return {
    type: LOADING,
    payload: isLoading,
  };
};


export const setLocale = (locale: string) => {
  return {
    type: SET_LOCALE,
    payload: locale,
  };
};

export const uploadFile = (formData: any) => {
  return {
    type: UPLOAD_FILE,
    payload: formData,
  };
};

export const setFile = (file: any) => ({
  type: UPLOAD_FILE_SUCCESS,
  payload: file,
});

export const clearFile = () => ({
  type: CLEAR_FILE,
});

export const getRegions = (query: any) => {
  return {
    type: GET_REGIONS,
    payload: { query },
  };
};

export const getRegionsSuccess = (data: any) => {
  return {
    type: GET_REGIONS_SUCCESS,
    payload: data,
  };
};