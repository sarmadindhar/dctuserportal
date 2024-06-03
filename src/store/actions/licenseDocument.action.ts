import {
    GET_LICENSE_DOCUMENTS,
    GET_LICENSE_DOCUMENTS_SUCCESS,
  } from '../types';
  
  export const getLicenseDocuments = (query: any) => {
    return {
      type: GET_LICENSE_DOCUMENTS,
      payload: { query },
    };
  };
  
  export const getLicenseDocumentsSuccess = (data: any) => {
    return {
      type: GET_LICENSE_DOCUMENTS_SUCCESS,
      payload: data,
    };
  };