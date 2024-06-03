import {
  ADD_NOTIFICATION,
  GET_NOTIFICATION,
  GET_NOTIFICATIONS,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATION_SUCCESS,
  UPDATE_NOTIFICATION,
  DELETE_NOTIFICATION,
} from '../types';

export const getNotifications = (query: any) => {
  return {
    type: GET_NOTIFICATIONS,
    payload: { query },
  };
};

export const getNotificationsSuccess = (data: any) => {
  return {
    type: GET_NOTIFICATIONS_SUCCESS,
    payload: data,
  };
};

export const addNotification = (data: any) => {
  return {
    type: ADD_NOTIFICATION,
    payload: { data },
  };
};

export const getNotification = (id: string) => {
  return {
    type: GET_NOTIFICATION,
    payload: { id },
  };
};

export const getNotificationSuccess = (data: any) => {
  return {
    type: GET_NOTIFICATION_SUCCESS,
    payload: data,
  };
};

export const updateNotification = (data: any, callback?: any) => {
  return {
    type: UPDATE_NOTIFICATION,
    payload: { data, callback },
  };
};

export const deleteNotification = (id: any) => {
  return {
    type: DELETE_NOTIFICATION,
    payload: { id },
  };
};
