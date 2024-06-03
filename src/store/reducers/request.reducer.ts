import { selectedRequest } from './../actions/request.action';
import {
  AMEND_REQUEST_LOADING,
  APPROVE_REQUEST_LOADING,
  GET_REQUESTS_LOADING,
  GET_REQUESTS_SUCCESS,
  GET_REQUEST_LOADING,
  GET_REQUEST_SUCCESS,
  REJECT_REQUEST_LOADING,
  SELECTED_REQUEST,
  TRANSFER_REQUEST_LOADING,
  UPDATE_REQUEST_WIDGET,
  SET_SHOULD_STAY_ON_REQUEST,
} from '../types';

const INITIAL_STATE = {
  requests: [],
  selectedRequest: null,
  request: null,
  isLoading: false,
  isRequestLoading: false,
  isApproveRequestLoading: false,
  isTransferRequestLoading: false,
  isRejectRequestLoading: false,
  isAmendRequestLoading: false,
  updateRequestWidget: 0,
  shouldStayOnRequest: null,
};

const requestReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_REQUESTS_LOADING:
      return { ...state, isLoading: action.payload };
    case GET_REQUESTS_SUCCESS:
      return { ...state, requests: action.payload };
    case GET_REQUEST_LOADING:
      return { ...state, isRequestLoading: action.payload };
    case GET_REQUEST_SUCCESS:
      return { ...state, request: action.payload };
    case SELECTED_REQUEST:
      return { ...state, selectedRequest: action.payload };
    case APPROVE_REQUEST_LOADING:
      return { ...state, isApproveRequestLoading: action.payload };
    case TRANSFER_REQUEST_LOADING:
      return { ...state, isTransferRequestLoading: action.payload };
    case REJECT_REQUEST_LOADING:
      return { ...state, isRejectRequestLoading: action.payload };
    case AMEND_REQUEST_LOADING:
      return { ...state, isAmendRequestLoading: action.payload };
    case UPDATE_REQUEST_WIDGET:
      return { ...state, updateRequestWidget: state.updateRequestWidget + 1, shouldStayOnRequest: action.payload.shouldStayOnRequest };
    case SET_SHOULD_STAY_ON_REQUEST:
        return { ...state, shouldStayOnRequest: action.payload.id };
    default:
      return state;
  }
};

export { requestReducer };
