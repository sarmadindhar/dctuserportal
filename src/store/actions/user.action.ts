import {
  ADD_USER,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USER,
  DELETE_USER,
  UPDATE_USER,
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
} from '../types';

export const getUsers = (query: any) => {
  return {
    type: GET_USERS,
    payload: { query },
  };
};

export const getUsersSuccess = (data: any) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: data,
  };
};

export const getAllUsers = (query: any) => {
  return {
    type: GET_ALL_USERS,
    payload: { query },
  };
};

export const getAllUsersSuccess = (data: any) => {
  return {
    type: GET_ALL_USERS_SUCCESS,
    payload: data,
  };
};

export const addUser = (data: any) => {
  return {
    type: ADD_USER,
    payload: { data },
  };
};

export const getUser = (id: string) => {
  return {
    type: GET_USER,
    payload: { id },
  };
};

export const updateUser = (id: string, data: any) => {
  return {
    type: UPDATE_USER,
    payload: { id, data },
  };
};

export const deleteUser = (id: any) => {
  return {
    type: DELETE_USER,
    payload: { id },
  };
};
