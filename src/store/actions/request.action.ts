import {
  ADD_REQUEST,
  GET_REQUESTS_BY_USER_ID,
  GET_REQUEST,
  GET_REQUESTS,
  GET_REQUESTS_SUCCESS,
  GET_REQUEST_SUCCESS,
  UPDATE_REQUEST,
  DELETE_REQUEST,
  SELECTED_REQUEST,
  GET_REQUESTS_LOADING,
  GET_REQUEST_LOADING,
  APPROVE_REQUEST,
  APPROVE_REQUEST_LOADING,
  APPROVE_REQUEST_SUCCESS,
  TRANSFER_REQUEST,
  TRANSFER_REQUEST_LOADING,
  REJECT_REQUEST,
  REJECT_REQUEST_LOADING,
  AMEND_REQUEST,
  AMEND_REQUEST_LOADING,
  POST_COMMENT,
  APPROVE_INSPECTION_REQUEST,
  UPLOAD_DOCUMENT,
  ADD_DOCUMENT,
  UPDATE_REQUEST_WIDGET,
  SHOULD_SHOW_START_WORKFLOW,
  SET_SHOULD_STAY_ON_REQUEST,
  CREATE_REQUEST,
} from '../types';

export const getRequests = (query: any) => {
  return {
    type: GET_REQUESTS,
    payload: { query },
  };
};

export const setRequestsLoading = (isLoading: boolean) => {
  return {
    type: GET_REQUESTS_LOADING,
    payload: isLoading,
  };
};

export const getRequestsByUserId = (query: any) => {
  return {
    type: GET_REQUESTS_BY_USER_ID,
    payload: { query },
  };
};

export const getRequestsSuccess = (data: any) => {
  return {
    type: GET_REQUESTS_SUCCESS,
    payload: data,
  };
};

export const addRequest = (data: any) => {
  return {
    type: ADD_REQUEST,
    payload: { data },
  };
};

export const getRequest = (id: string) => {
  return {
    type: GET_REQUEST,
    payload: { id },
  };
};

export const setRequestLoading = (isLoading: boolean) => {
  return {
    type: GET_REQUEST_LOADING,
    payload: isLoading,
  };
};

export const getRequestSuccess = (data: any) => {
  return {
    type: GET_REQUEST_SUCCESS,
    payload: data,
  };
};

export const updateRequest = (id: string, data: any) => {
  return {
    type: UPDATE_REQUEST,
    payload: { id, data },
  };
};

export const deleteRequest = (id: any) => {
  return {
    type: DELETE_REQUEST,
    payload: { id },
  };
};

export const selectedRequest = (id: any) => {
  return {
    type: SELECTED_REQUEST,
    payload: id,
  };
};

export const approveRequest = (
  id: string,
  type = 'approve',
  callback?: any
) => {
  return {
    type: APPROVE_REQUEST,
    payload: { id, type, callback },
  };
};

export const setApproveRequestLoading = (isLoading: boolean) => {
  return {
    type: APPROVE_REQUEST_LOADING,
    payload: isLoading,
  };
};

export const approveRequestSuccess = (data: any) => {
  return {
    type: APPROVE_REQUEST_SUCCESS,
    payload: data,
  };
};

export const approveInspectionRequest = (id: string, callback?: any) => {
  return {
    type: APPROVE_INSPECTION_REQUEST,
    payload: { id, callback },
  };
};

export const transferRequest = (data: string, callback?: any) => {
  return {
    type: TRANSFER_REQUEST,
    payload: { data, callback },
  };
};

export const setTransferRequestLoading = (isLoading: boolean) => {
  return {
    type: TRANSFER_REQUEST_LOADING,
    payload: isLoading,
  };
};

export const rejectRequest = (data: any, callback?: any) => {
  return {
    type: REJECT_REQUEST,
    payload: { data, callback },
  };
};

export const setRejectRequestLoading = (isLoading: boolean) => {
  return {
    type: REJECT_REQUEST_LOADING,
    payload: isLoading,
  };
};

export const amendRequest = (data: any, callback?: any) => {
  return {
    type: AMEND_REQUEST,
    payload: { data, callback },
  };
};

export const setAmendRequestLoading = (isLoading: boolean) => {
  return {
    type: AMEND_REQUEST_LOADING,
    payload: isLoading,
  };
};

export const postComment = (data: any, callback?: any) => {
  return {
    type: POST_COMMENT,
    payload: { data, callback },
  };
};

export const uploadDocument = (data: any, callback?: any) => {
  return {
    type: UPLOAD_DOCUMENT,
    payload: { data, callback },
  };
};

export const addDocument = (data: any, callback?: any) => {
  return {
    type: ADD_DOCUMENT,
    payload: { data, callback },
  };
};

export const updateRequestWidget = (data: any = null) => {
  return {
    type: UPDATE_REQUEST_WIDGET,
    payload: data,
  };
};

export const shouldShowStartWorkflow = (id: any, callback?: any) => {
  return {
    type: SHOULD_SHOW_START_WORKFLOW,
    payload: { id, callback },
  };
};

export const setShouldStayOnRequest = (id: any = null) => {
  return {
    type: SET_SHOULD_STAY_ON_REQUEST,
    payload: { id },
  };
};

export const createRequest = (data: any, callback?: any) => {
  return {
    type: CREATE_REQUEST,
    payload: { data, callback },
  };
};
