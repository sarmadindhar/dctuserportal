import NetworkUtil from '../../utils/NetworkUtil';

export const getWorkflowsService = (query: any) => {
  return NetworkUtil('GET', 'workflows', null, query);
};

export const addWorkflowService = (request: any) => {
  return NetworkUtil('POST', 'workflows', request);
};

export const getWorkflowService = (id: string) => {
  return NetworkUtil('GET', `workflows/${id}`);
};

export const updateWorkflowService = (id: string, request: any) => {
  return NetworkUtil('PUT', `workflows/${id}`, request);
};

export const deleteWorkflowService = (id: any) => {
  return NetworkUtil('DELETE', `workflows/${id}`);
};
