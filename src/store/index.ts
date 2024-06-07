import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import watcherSaga from './root.saga';
import { reducer as permissions } from 'react-redux-permissions';
import {
  authReducer,
  userReducer,
  appReducer,
  appDataReducer,
  businessReducer,
  holidayReducer,
  licenseReducer,
  licenseTypeReducer,
  notificationReducer,
  requestReducer,
  roleReducer,
  templateReducer,
  workflowReducer,
  licenseActionReducer,
  licenseDocumentReducer,
  siteReducer
} from './reducers';
import { fineReducer } from './reducers/fine.reducer';

const reducers = combineReducers({
  app: appReducer,
  appData: appDataReducer,
  auth: authReducer,
  user: userReducer,
  business: businessReducer,
  holiday: holidayReducer,
  license: licenseReducer,
  licenseType: licenseTypeReducer,
  template: templateReducer,
  notification: notificationReducer,
  request: requestReducer,
  role: roleReducer,
  workflow: workflowReducer,
  licenseAction: licenseActionReducer,
  licenseDocument: licenseDocumentReducer,
  fine: fineReducer,
  permissions: permissions,
  site:siteReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]; // logger

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
  devTools: true,
});

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
