import NetworkUtil from '../../utils/NetworkUtil';

export const getFinesService = (query: any) => {
  console.log('from service');
  return NetworkUtil('GET', 'fine', null, query);
};

export const addFineService = (request: any) => {
  return NetworkUtil('POST', 'fine', request);
};

export const getFineService = (id: string) => {
  return NetworkUtil('GET', `fine/${id}`);
};

export const updateFineService = (id: string, request: any) => {
  return NetworkUtil('PUT', `fine/${id}`, request);
};

export const deleteFineService = (id: any) => {
  return NetworkUtil('DELETE', `fine/${id}`);
};

export const calculateFineService = ({ id, ...request }: any) => {
  return NetworkUtil('POST', `business/calculateFine/${id}`, request);
};

export const saveAsDraftFineService = ({ id, ...request }: any) => {
  request = { ...request};
  return NetworkUtil('POST', `business/issueFineByTierOne/${id}`, request);
};

export const sendToTier2FineService = ({ id, ...request }: any) => {
  request = { ...request};
  return NetworkUtil('POST', `business/issueFineByTierOne/${id}`, request);
};

export const updateFineByTier1FineService = ({ id, ...request }: any) => {
  request = { ...request};
  return NetworkUtil('POST', `business/updateFine/${id}`, request);
};

export const updateFineStatusFineService = ({ id, ...request }: any) => {
  request = { ...request};
  return NetworkUtil('POST', `business/updateFineStatus/${id}`, request);
};

export const issueFineByTierTwoSagaFineService = ({ id, ...request }: any) => {
  request = { ...request};
  return NetworkUtil('POST', `business/issueFineByTierTwo/${id}`, request);
};

export const updateLicenseStatusService = ({ id, ...request }: any) => {
  request = { ...request};
  return NetworkUtil('POST', `business/updateLicenseStatus/${id}`, request);
};
