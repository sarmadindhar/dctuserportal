import {
  GET_CMS_CONTENT, GET_CMS_CONTENT_SUCCESS, LOADING
} from '../types';


export const getCmsContent = () => {
  console.log('site action get content');
  return {
    type: GET_CMS_CONTENT,
  };
};


export const getCmsContentSuccess = (data: any) => {
  return {
    type: GET_CMS_CONTENT_SUCCESS,
    payload: data,
  };
};