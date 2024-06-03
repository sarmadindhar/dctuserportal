import {
  ADD_ROLE,
  GET_ROLE,
  GET_ROLES,
  GET_ROLES_SUCCESS,
  GET_ROLE_SUCCESS,
  UPDATE_ROLE,
  DELETE_ROLE,
  GET_ROLES_NAVIGATION,
  GET_ROLES_NAVIGATION_SUCCESS,
} from '../types';

export const getRolesNavigation = (data: any) => {
  return {
    type: GET_ROLES_NAVIGATION,
    payload: data,
  };
};

export const getRolesNavigationSuccess = (data: any) => {
  return {
    type: GET_ROLES_NAVIGATION_SUCCESS,
    payload: data,
  };
};


export const getRoles = (query: any) => {
  return {
    type: GET_ROLES,
    payload: { query },
  };
};

export const getRolesSuccess = (data: any) => {
  return {
    type: GET_ROLES_SUCCESS,
    payload: data,
  };
};

export const addRole = (data: any) => {
  return {
    type: ADD_ROLE,
    payload: { data },
  };
};

export const getRole = (id: string) => {
  return {
    type: GET_ROLE,
    payload: { id },
  };
};

export const getRoleSuccess = (data: any) => {
  return {
    type: GET_ROLE_SUCCESS,
    payload: data,
  };
};

export const updateRole = (id: string, data: any) => {
  return {
    type: UPDATE_ROLE,
    payload: { id, data },
  };
};

export const deleteRole = (id: any) => {
  return {
    type: DELETE_ROLE,
    payload: { id },
  };
};
