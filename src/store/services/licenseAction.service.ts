import NetworkUtil from '../../utils/NetworkUtil';

export const getLicenseActionsService = (query: any) => {
  return NetworkUtil('GET', 'general/licenseActions', null, query);
};
