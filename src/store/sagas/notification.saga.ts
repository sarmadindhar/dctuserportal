import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getNotificationsService,
  addNotificationService,
  getNotificationService,
  updateNotificationService,
  deleteNotificationService,
} from '../services';
import { GENERAL_ERROR } from '../../constants';
import {
  getNotificationsSuccess,
  getNotifications,
  getNotificationSuccess,
  tokenExpired,
  setLoading,
} from '../actions';

export function* getNotificationsSaga({ payload }: any): any {
  try {
    // yield put(setLoading(true));
    const response = yield call(getNotificationsService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getNotificationsSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* addNotificationSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(addNotificationService, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getNotifications(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getNotificationSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getNotificationService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        console.log(response.data);
        yield put(getNotificationSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

// export function* updateNotificationSaga({ payload }: any): any {
//   try {
//     yield put(setLoading(true));
//     const response = yield call(
//       updateNotificationService,
//       payload.id,
//       payload.data
//     );
//     yield put(setLoading(false));
//     if (!response) {
//       yield put(tokenExpired());
//     } else {
//       if (!response.status) {
//         yield call(toast.error, response.message);
//       } else {
//         yield put(getNotifications(null));
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     yield call(toast.error, GENERAL_ERROR);
//   }
// }

export function* updateNotificationSaga({ payload }: any): any {
  try {
    const response = yield call(updateNotificationService, payload.data);
    if (!response) {
      yield put(tokenExpired());
      payload.callback &&
        payload.callback(response.message || 'There was some error', null);
    } else {
      if (!response.data) {
        // toast.error(response.message);
        payload.callback && payload.callback(response.message, null);
      } else {
        // toast.success('Fine Updated Successfully');
        payload.callback && payload.callback(null, response.data);
      }
    }
  } catch (error) {
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* deleteNotificationSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(deleteNotificationService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getNotifications(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}
