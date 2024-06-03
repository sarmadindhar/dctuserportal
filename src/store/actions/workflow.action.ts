import {
  ADD_WORKFLOW,
  GET_WORKFLOW,
  GET_WORKFLOWS,
  GET_WORKFLOWS_SUCCESS,
  GET_WORKFLOW_SUCCESS,
  UPDATE_WORKFLOW,
  DELETE_WORKFLOW,
} from '../types';

export const getWorkflows = (query: any) => {
  return {
    type: GET_WORKFLOWS,
    payload: { query },
  };
};

export const getWorkflowsSuccess = (data: any) => {
  return {
    type: GET_WORKFLOWS_SUCCESS,
    payload: data,
  };
};

export const addWorkflow = (data: any) => {
  return {
    type: ADD_WORKFLOW,
    payload: { data },
  };
};

export const getWorkflow = (id: string) => {
  return {
    type: GET_WORKFLOW,
    payload: { id },
  };
};

export const getWorkflowSuccess = (data: any) => {
  return {
    type: GET_WORKFLOW_SUCCESS,
    payload: data,
  };
};

export const updateWorkflow = (id: string, data: any) => {
  return {
    type: UPDATE_WORKFLOW,
    payload: { id, data },
  };
};

export const deleteWorkflow = (id: any) => {
  return {
    type: DELETE_WORKFLOW,
    payload: { id },
  };
};
