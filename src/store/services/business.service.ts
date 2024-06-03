import NetworkUtil from '../../utils/NetworkUtil';

export const getBusinessesService = (query: any) => {
  return NetworkUtil('GET', 'business', null, query);
};

export const addBusinessService = (request: any) => {
  return NetworkUtil('POST', 'businesses', request);
};

export const getBusinessService = (id: string) => {
  return NetworkUtil('GET', `businesses/${id}`);
};

export const updateBusinessService = (id: string, request: any) => {
  return NetworkUtil('PATCH', `businesses/${id}`, request);
};

export const deleteBusinessService = (id: any) => {
  return NetworkUtil('DELETE', `businesses/${id}`);
};

export const getReportService = (query: any) => {
  return NetworkUtil('POST', `report`, query);
};
