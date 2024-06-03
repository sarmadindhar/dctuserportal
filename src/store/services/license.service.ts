import NetworkUtil from '../../utils/NetworkUtil';

export const getLicensesService = (query: any) => {
  return NetworkUtil('GET', 'licenses', null, query);
};

export const addLicenseService = (request: any) => {
  return NetworkUtil('POST', 'licenses', request);
};

export const getLicenseService = (id: string) => {
  return NetworkUtil('GET', `licenses/${id}`);
};

export const updateLicenseService = (id: string, request: any) => {
  return NetworkUtil('PATCH', `licenses/${id}`, request);
};

export const deleteLicenseService = (id: any) => {
  return NetworkUtil('DELETE', `licenses/${id}`);
};
