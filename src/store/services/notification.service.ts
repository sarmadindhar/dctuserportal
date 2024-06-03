import NetworkUtil from '../../utils/NetworkUtil';

export const getNotificationsService = (query: any) => {
  return NetworkUtil('GET', 'notification', null, query);
};

export const addNotificationService = (request: any) => {
  return NetworkUtil('POST', 'notification', request);
};

export const getNotificationService = (id: string) => {
  return NetworkUtil('GET', `notification/${id}`);
};

export const updateNotificationService = ({ id, ...request }: any) => {
  return NetworkUtil('PUT', `notification/${id}`, request);
};

export const deleteNotificationService = (id: any) => {
  return NetworkUtil('DELETE', `notification/${id}`);
};
