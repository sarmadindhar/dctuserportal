import { GET_NOTIFICATIONS_SUCCESS, GET_NOTIFICATION_SUCCESS } from '../types';

const INITIAL_STATE = {
  notifications: { results: [] },
  notification: null,
  totalUnreadNotifications:0
};

const notificationReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_NOTIFICATIONS_SUCCESS:
      return { ...state, notifications: action.payload.notifications, totalUnreadNotifications: action.payload.totalUnreadNotifications };
    case GET_NOTIFICATION_SUCCESS:
      return { ...state, notification: action.payload };
    default:
      return state;
  }
};

export { notificationReducer };
