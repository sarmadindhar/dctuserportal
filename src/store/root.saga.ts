import { takeLatest, takeEvery } from 'redux-saga/effects';
import {
  USER_LOGIN,
  USER_LOGOUT,
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  UPLOAD_FILE,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  ADD_NOTIFICATION,
  GET_NOTIFICATION,
  GET_NOTIFICATIONS,
  UPDATE_NOTIFICATION,
  DELETE_NOTIFICATION,
  ADD_REQUEST,
  GET_REQUEST,
  GET_REQUESTS,
  GET_REQUESTS_BY_USER_ID,
  UPDATE_REQUEST,
  DELETE_REQUEST,
  SELECTED_REQUEST,
  ADD_HOLIDAY,
  GET_HOLIDAY,
  GET_HOLIDAYS,
  UPDATE_HOLIDAY,
  DELETE_HOLIDAY,
  ADD_LICENSE,
  GET_LICENSE,
  GET_LICENSES,
  UPDATE_LICENSE,
  DELETE_LICENSE,
  ADD_LICENSE_TYPE,
  GET_LICENSE_TYPE,
  GET_LICENSE_TYPES,
  UPDATE_LICENSE_TYPE,
  DELETE_LICENSE_TYPE,
  ADD_TEMPLATE,
  GET_TEMPLATE,
  GET_TEMPLATES,
  UPDATE_TEMPLATE,
  DELETE_TEMPLATE,
  ADD_BUSINESS,
  GET_BUSINESS,
  GET_BUSINESSES,
  UPDATE_BUSINESS,
  DELETE_BUSINESS,
  ADD_ROLE,
  GET_ROLE,
  GET_ROLES,
  UPDATE_ROLE,
  DELETE_ROLE,
  ADD_WORKFLOW,
  GET_WORKFLOW,
  GET_WORKFLOWS,
  UPDATE_WORKFLOW,
  DELETE_WORKFLOW,
  GET_PROFILE,
  UPDATE_PROFILE,
  GET_ROLES_NAVIGATION,
  GET_LICENSE_ACTIONS,
  GET_LICENSE_DOCUMENTS,
  GET_AUTH_USER_ROLE,
  GET_ALL_USERS,
  APPROVE_REQUEST,
  TRANSFER_REQUEST,
  REJECT_REQUEST,
  AMEND_REQUEST,
  GET_FINE,
  GET_FINES,
  ADD_FINE,
  UPDATE_FINE,
  DELETE_FINE,
  CALCULATE_FINE,
  AD_LOGIN,
  SAVE_AS_DRAFT_FINE,
  SEND_TO_TIER_2_FINE,
  POST_COMMENT,
  APPROVE_INSPECTION_REQUEST,
  UPLOAD_DOCUMENT,
  ADD_DOCUMENT,
  UPDATE_FINE_BY_TIER_1,
  UPDATE_FINE_STATUS,
  SHOULD_SHOW_START_WORKFLOW,
  ISSUE_FINE_BY_TIER_2,
  UPDATE_LICENSE_STATUS,
  GET_REPORT,
  CREATE_REQUEST, USER_REGISTER,

  GET_CMS_CONTENT,
  VERIFY_OTP,
  RESEND_OTP, SET_LOCALE

} from './types';
import {
  loginSaga,
  registerSaga,
  logoutSaga,
  forgotPasswordSaga,
  resetPasswordSaga,
  getUsersSaga,
  addUserSaga,
  deleteUserSaga,
  updateUserSaga,
  fileUploadSaga,
  addNotificationSaga,
  getNotificationSaga,
  getNotificationsSaga,
  updateNotificationSaga,
  deleteNotificationSaga,
  addRequestSaga,
  getRequestSaga,
  getRequestsSaga,
  updateRequestSaga,
  deleteRequestSaga,
  selectedRequestSaga,
  addHolidaySaga,
  getHolidaySaga,
  getHolidaysSaga,
  updateHolidaySaga,
  deleteHolidaySaga,
  addLicenseSaga,
  getLicenseSaga,
  getLicensesSaga,
  updateLicenseSaga,
  deleteLicenseSaga,
  addLicenseTypeSaga,
  getLicenseTypeSaga,
  getLicenseTypesSaga,
  updateLicenseTypeSaga,
  deleteLicenseTypeSaga,
  addTemplateSaga,
  getTemplateSaga,
  getTemplatesSaga,
  updateTemplateSaga,
  deleteTemplateSaga,
  addBusinessSaga,
  getBusinessSaga,
  getBusinessesSaga,
  updateBusinessSaga,
  deleteBusinessSaga,
  addRoleSaga,
  getRoleSaga,
  getRolesSaga,
  updateRoleSaga,
  deleteRoleSaga,
  addWorkflowSaga,
  getWorkflowSaga,
  getWorkflowsSaga,
  updateWorkflowSaga,
  deleteWorkflowSaga,
  getProfileSaga,
  updateProfileSaga,
  getRolesNavigationSaga,
  getLicenseActionsSaga,
  getLicenseDocumentsSaga,
  getAuthUserRoleSaga,
  getAllUsersSaga,
  approveRequestSaga,
  transferRequestSaga,
  rejectRequestSaga,
  amendRequestSaga,
  postComment,
  approveInspectionRequestSaga,
  uploadDocumentSaga,
  addDocumentSaga,
  shouldShowStartWorkflowSaga,
  getReportSaga,
  createRequestSaga,
  verifyOtpSaga,
  getCmsContentSaga,
  resendOtpSaga,

  setLocaleSaga
} from './sagas';
import {
  addFineSaga,
  calculateFineSaga,
  deleteFineSaga,
  getFineSaga,
  getFinesSaga,
  saveAsDraftFine,
  sendToTier2Fine,
  updateFineSaga,
  updateFineByTier1Saga,
  updateFineStatusSaga,
  issueFineByTierTwoSaga,
  updateLicenseStatusSaga,
} from './sagas/fine.saga';

export default function* watcherSaga() {
  // auth
  yield takeLatest(USER_LOGIN, loginSaga);
  yield takeLatest(USER_LOGOUT, logoutSaga);

  yield takeLatest(USER_REGISTER, registerSaga);
  yield takeLatest(VERIFY_OTP, verifyOtpSaga);
  yield takeLatest(RESEND_OTP, resendOtpSaga);

  yield takeLatest(GET_CMS_CONTENT, getCmsContentSaga);

  yield takeLatest(SET_LOCALE, setLocaleSaga);

  yield takeLatest(FORGOT_PASSWORD, forgotPasswordSaga);
  yield takeLatest(RESET_PASSWORD, resetPasswordSaga);
  yield takeLatest(GET_AUTH_USER_ROLE, getAuthUserRoleSaga);
  // users
  yield takeEvery(GET_USERS, getUsersSaga);
  yield takeEvery(ADD_USER, addUserSaga);
  yield takeEvery(DELETE_USER, deleteUserSaga);
  yield takeEvery(UPDATE_USER, updateUserSaga);
  yield takeEvery(GET_ALL_USERS, getAllUsersSaga);

  // file
  yield takeEvery(UPLOAD_FILE, fileUploadSaga);
  // notifications
  yield takeEvery(GET_NOTIFICATION, getNotificationSaga);
  yield takeEvery(GET_NOTIFICATIONS, getNotificationsSaga);
  yield takeEvery(ADD_NOTIFICATION, addNotificationSaga);
  yield takeEvery(UPDATE_NOTIFICATION, updateNotificationSaga);
  yield takeEvery(DELETE_NOTIFICATION, deleteNotificationSaga);
  // requests
  yield takeEvery(GET_REQUEST, getRequestSaga);
  yield takeEvery(GET_REQUESTS, getRequestsSaga);
  yield takeEvery(GET_REQUESTS_BY_USER_ID, getRequestsSaga);
  yield takeEvery(ADD_REQUEST, addRequestSaga);
  yield takeEvery(UPDATE_REQUEST, updateRequestSaga);
  yield takeEvery(DELETE_REQUEST, deleteRequestSaga);
  yield takeEvery(SELECTED_REQUEST, selectedRequestSaga);
  yield takeEvery(APPROVE_REQUEST, approveRequestSaga);
  yield takeEvery(APPROVE_INSPECTION_REQUEST, approveInspectionRequestSaga);
  yield takeEvery(TRANSFER_REQUEST, transferRequestSaga);
  yield takeEvery(REJECT_REQUEST, rejectRequestSaga);
  yield takeEvery(AMEND_REQUEST, amendRequestSaga);
  yield takeEvery(POST_COMMENT, postComment);
  yield takeEvery(UPLOAD_DOCUMENT, uploadDocumentSaga);
  yield takeEvery(ADD_DOCUMENT, addDocumentSaga);
  yield takeEvery(SHOULD_SHOW_START_WORKFLOW, shouldShowStartWorkflowSaga);
  yield takeEvery(CREATE_REQUEST, createRequestSaga);
  // holiday
  yield takeEvery(GET_HOLIDAY, getHolidaySaga);
  yield takeEvery(GET_HOLIDAYS, getHolidaysSaga);
  yield takeEvery(ADD_HOLIDAY, addHolidaySaga);
  yield takeEvery(UPDATE_HOLIDAY, updateHolidaySaga);
  yield takeEvery(DELETE_HOLIDAY, deleteHolidaySaga);
  // license
  yield takeEvery(GET_LICENSE, getLicenseSaga);
  yield takeEvery(GET_LICENSES, getLicensesSaga);
  yield takeEvery(ADD_LICENSE, addLicenseSaga);
  yield takeEvery(UPDATE_LICENSE, updateLicenseSaga);
  yield takeEvery(DELETE_LICENSE, deleteLicenseSaga);
  yield takeEvery(GET_LICENSE_ACTIONS, getLicenseActionsSaga);
  yield takeEvery(GET_LICENSE_DOCUMENTS, getLicenseDocumentsSaga);
  // license type
  yield takeEvery(GET_LICENSE_TYPE, getLicenseTypeSaga);
  yield takeEvery(GET_LICENSE_TYPES, getLicenseTypesSaga);
  yield takeEvery(ADD_LICENSE_TYPE, addLicenseTypeSaga);
  yield takeEvery(UPDATE_LICENSE_TYPE, updateLicenseTypeSaga);
  yield takeEvery(DELETE_LICENSE_TYPE, deleteLicenseTypeSaga);
  // template
  yield takeEvery(GET_TEMPLATE, getTemplateSaga);
  yield takeEvery(GET_TEMPLATES, getTemplatesSaga);
  yield takeEvery(ADD_TEMPLATE, addTemplateSaga);
  yield takeEvery(UPDATE_TEMPLATE, updateTemplateSaga);
  yield takeEvery(DELETE_TEMPLATE, deleteTemplateSaga);
  // business
  yield takeEvery(GET_BUSINESS, getBusinessSaga);
  yield takeEvery(GET_BUSINESSES, getBusinessesSaga);
  yield takeEvery(ADD_BUSINESS, addBusinessSaga);
  yield takeEvery(UPDATE_BUSINESS, updateBusinessSaga);
  yield takeEvery(DELETE_BUSINESS, deleteBusinessSaga);
  yield takeEvery(GET_REPORT, getReportSaga);
  // role
  yield takeEvery(GET_ROLES_NAVIGATION, getRolesNavigationSaga);
  yield takeEvery(GET_ROLE, getRoleSaga);
  yield takeEvery(GET_ROLES, getRolesSaga);
  yield takeEvery(ADD_ROLE, addRoleSaga);
  yield takeEvery(UPDATE_ROLE, updateRoleSaga);
  yield takeEvery(DELETE_ROLE, deleteRoleSaga);
  // workflow
  yield takeEvery(GET_WORKFLOW, getWorkflowSaga);
  yield takeEvery(GET_WORKFLOWS, getWorkflowsSaga);
  yield takeEvery(ADD_WORKFLOW, addWorkflowSaga);
  yield takeEvery(UPDATE_WORKFLOW, updateWorkflowSaga);
  yield takeEvery(DELETE_WORKFLOW, deleteWorkflowSaga);
  // profile
  yield takeEvery(GET_PROFILE, getProfileSaga);
  yield takeEvery(UPDATE_PROFILE, updateProfileSaga);
  //fines
  yield takeEvery(GET_FINE, getFineSaga);
  yield takeEvery(GET_FINES, getFinesSaga);
  yield takeEvery(ADD_FINE, addFineSaga);
  yield takeEvery(UPDATE_FINE, updateFineSaga);
  yield takeEvery(DELETE_FINE, deleteFineSaga);
  yield takeEvery(CALCULATE_FINE, calculateFineSaga);
  yield takeEvery(SAVE_AS_DRAFT_FINE, saveAsDraftFine);
  yield takeEvery(SEND_TO_TIER_2_FINE, sendToTier2Fine);
  yield takeEvery(UPDATE_FINE_BY_TIER_1, updateFineByTier1Saga);
  yield takeEvery(UPDATE_FINE_STATUS, updateFineStatusSaga);
  yield takeEvery(ISSUE_FINE_BY_TIER_2, issueFineByTierTwoSaga);
  yield takeEvery(UPDATE_LICENSE_STATUS, updateLicenseStatusSaga);
}
