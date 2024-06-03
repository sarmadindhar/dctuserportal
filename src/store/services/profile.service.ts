import NetworkUtil from '../../utils/NetworkUtil';

export const getProfileService = () => {
  return NetworkUtil('GET', 'profile');
};

export const updateProfileService = (request: any) => {
  return NetworkUtil('POST', `profile`, request);
};
