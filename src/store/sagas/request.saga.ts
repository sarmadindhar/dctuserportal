import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getRequestsService,
  addRequestService,
  getRequestService,
  updateRequestService,
  deleteRequestService,
  getRequestsByUserIdService,
  approveRequestService,
  transferRequestService,
  rejectRequestService,
  postCommentService,
  approveInspectionRequestService,
  uploadDocumentService,
  addDocumentService,
  shouldShowStartWorkflowService,
  createRequestService,
} from '../services';
import { GENERAL_ERROR } from '../../constants';
import {
  getRequestsSuccess,
  getRequests,
  getRequestSuccess,
  tokenExpired,
  setLoading,
  setRequestsLoading,
  setRequestLoading,
  setApproveRequestLoading,
  setTransferRequestLoading,
  setRejectRequestLoading,
  setAmendRequestLoading,
  getRequest,
} from '../actions';

export function* getRequestsSaga({ payload }: any): any {
  try {
    yield put(setRequestsLoading(true));
    const response = yield call(getRequestsService, payload.query);
    yield put(setRequestsLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getRequestsSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getRequestsByUserIdSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getRequestsByUserIdService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getRequestsSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* addRequestSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(addRequestService, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getRequests(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getRequestSaga({ payload }: any): any {
  try {
    yield put(setRequestLoading(true));
    const response = yield call(getRequestService, payload.id);
    yield put(setRequestLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getRequestSuccess(response.data[0]));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* updateRequestSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(updateRequestService, payload.id, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getRequests(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* deleteRequestSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(deleteRequestService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getRequests(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* selectedRequestSaga({ payload }: any): any {
  console.log('request------');
}

export function* approveRequestSaga({ payload }: any): any {
  try {
    const response = yield call(
      approveRequestService,
      payload.id,
      payload.type
    );
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
        payload.callback &&
          payload.callback(response.message || GENERAL_ERROR, null);
      } else {
        toast.success('Request approved successfully!');
        payload.callback && payload.callback(null, response.data);
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* approveInspectionRequestSaga({ payload }: any): any {
  try {
    const response = yield call(approveInspectionRequestService, payload.id);
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
        payload.callback &&
          payload.callback(response.message || GENERAL_ERROR, null);
      } else {
        toast.success('Request approved with inspetion successfully!');
        payload.callback && payload.callback(null, response.data);
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* transferRequestSaga({ payload }: any): any {
  try {
    yield put(setTransferRequestLoading(true));
    const response = yield call(transferRequestService, payload.data);
    yield put(setTransferRequestLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        toast.success('Request transfered successfully');
        if (payload.callback) {
          payload.callback(response);
        }
        // yield put(getRequests(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* rejectRequestSaga({ payload }: any): any {
  try {
    yield put(setRejectRequestLoading(true));
    const response = yield call(rejectRequestService, payload.data);
    yield put(setRejectRequestLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        toast.success('Request rejected successfully');
        payload.callback && payload.callback(response.data);
        // yield put(getRequests(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* amendRequestSaga({ payload }: any): any {
  try {
    yield put(setAmendRequestLoading(true));
    const response = yield call(rejectRequestService, payload.data);
    yield put(setAmendRequestLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        toast.success('Amend request sent successfully');
        payload.callback && payload.callback(response.data);
        // yield put(getRequests(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* postComment({ payload }: any): any {
  try {
    const response = yield call(postCommentService, payload.data);
    if (!response) {
      yield put(tokenExpired());
    } else {
      toast.success('Comment posted successfully');
      payload.callback && payload.callback(null, response.data);
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* uploadDocumentSaga({ payload }: any): any {
  try {
    const response = yield call(uploadDocumentService, payload.data);
    if (!response) {
      yield put(tokenExpired());
    } else {
      payload.callback && payload.callback(null, response.data);
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* addDocumentSaga({ payload }: any): any {
  try {
    const response = yield call(addDocumentService, payload.data);
    if (!response) {
      yield put(tokenExpired());
    } else {
      toast.success('Document(s) added successfully');
      payload.callback && payload.callback(null, response.data);
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* shouldShowStartWorkflowSaga({ payload }: any): any {
  try {
    const response = yield call(shouldShowStartWorkflowService, payload.id);
    if (!response) {
      yield put(tokenExpired());
    } else {
      payload.callback && payload.callback(null, response.data);
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* createRequestSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(createRequestService, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        toast.success('Request created successfully');
        payload.callback && payload.callback(null, response.data);
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}
