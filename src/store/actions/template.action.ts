import {
  ADD_TEMPLATE,
  GET_TEMPLATE,
  GET_TEMPLATES,
  GET_TEMPLATES_SUCCESS,
  GET_TEMPLATE_SUCCESS,
  UPDATE_TEMPLATE,
  DELETE_TEMPLATE,
} from '../types';

export const getTemplates = (query: any) => {
  return {
    type: GET_TEMPLATES,
    payload: { query },
  };
};

export const getTemplatesSuccess = (data: any) => {
  return {
    type: GET_TEMPLATES_SUCCESS,
    payload: data,
  };
};

export const addTemplate = (data: any) => {
  return {
    type: ADD_TEMPLATE,
    payload: { data },
  };
};

export const getTemplate = (id: string) => {
  return {
    type: GET_TEMPLATE,
    payload: { id },
  };
};

export const getTemplateSuccess = (data: any) => {
  return {
    type: GET_TEMPLATE_SUCCESS,
    payload: data,
  };
};

export const updateTemplate = (id: string, data: any) => {
  return {
    type: UPDATE_TEMPLATE,
    payload: { id, data },
  };
};

export const deleteTemplate = (id: any) => {
  return {
    type: DELETE_TEMPLATE,
    payload: { id },
  };
};
