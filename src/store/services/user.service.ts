import NetworkUtil from '../../utils/NetworkUtil';

export const getUsersService = (query: any) => {
  return NetworkUtil('GET', 'user', null, query);
};

export const getAllUsersService = (query: any) => {
  return NetworkUtil('GET', 'user/allUsers', null, query);
};

export const addUserService = (request: any) => {
  return NetworkUtil('POST', 'user', request);
};

export const getUserService = (id: string) => {
  return NetworkUtil('GET', `user/${id}`);
};

export const updateUserService = (id: string, request: any) => {
  return NetworkUtil('PATCH', `user/${id}`, request);
};

export const deleteUserService = (id: string) => {
  return NetworkUtil('DELETE', `user/${id}`);
};
