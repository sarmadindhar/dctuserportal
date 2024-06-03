import NetworkUtil from '../../utils/NetworkUtil';

export const getTemplatesService = (query: any) => {
  console.log('from service')
  return NetworkUtil('GET', 'email-template', null, query);
};

export const addTemplateService = (request: any) => {
  return NetworkUtil('POST', 'email-template', request,null,true);
};

export const getTemplateService = (id: string) => {
  return NetworkUtil('GET', `email-template/${id}`);
};

export const updateTemplateService = (id: string, request: any) => {
  return NetworkUtil('PUT', `email-template/${id}`, request);
};

export const deleteTemplateService = (id: any) => {
  return NetworkUtil('DELETE', `email-template/${id}`);
};
