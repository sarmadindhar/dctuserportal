import NetworkUtil from '../../utils/NetworkUtil';

export const getRequestsService = (query: any) => {
  return NetworkUtil('GET', 'requests', null, query);
};

export const getRequestsByUserIdService = (query: any) => {
  return NetworkUtil('GET', 'requests', null, query);
};

export const addRequestService = (request: any) => {
  return NetworkUtil('POST', 'requests', request);
};

export const getRequestService = (id: string) => {
  return NetworkUtil('GET', `requests/${id}`);
};

export const updateRequestService = (id: string, request: any) => {
  return NetworkUtil('PATCH', `requests/${id}`, request);
};

export const deleteRequestService = (id: any) => {
  return NetworkUtil('DELETE', `requests/${id}`);
};

export const approveRequestService = (id: any, type = 'approve') => {
  const endpoint =
    type === 'final_approve' ? 'finalApproveRequest' : 'approveRequest';
  return NetworkUtil('POST', `requests/${endpoint}/${id}`);
};

export const approveInspectionRequestService = (id: any) => {
  return NetworkUtil('POST', `requests/approveRequestForInspection/${id}`);
};

export const transferRequestService = (request: any) => {
  return NetworkUtil('POST', `requests/transferRequest`, request);
};

export const rejectRequestService = ({ id, ...request }: any) => {
  return NetworkUtil('PUT', `requests/amendRejectRequest/${id}`, request);
};

export const postCommentService = ({ id, ...request }: any) => {
  return NetworkUtil('POST', `requests/addComments/${id}`, request);
};

export const uploadDocumentService = (request: any) => {
  return NetworkUtil('POST', `document/upload`, request, null, true);
};

export const addDocumentService = ({ id, ...request }: any) => {
  return NetworkUtil('POST', `requests/addDocument/${id}`, request, null);
};

export const shouldShowStartWorkflowService = (id: any) => {
  return NetworkUtil('GET', `requests/shouldShowStartWorkflow/${id}`);
};

export const createRequestService = (request: any) => {
  return NetworkUtil('POST', 'requests', request, null, true);
};
