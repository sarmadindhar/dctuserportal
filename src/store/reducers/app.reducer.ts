import { LOADING, UPLOAD_FILE_SUCCESS, CLEAR_FILE, SET_LOCALE } from '../types';

const INITIAL_STATE = {
  isLoading: false,
  file: null,
  locale:'en'
};

const appReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: action.payload };
    case UPLOAD_FILE_SUCCESS:
      return { ...state, file: action.payload };
    case SET_LOCALE:
      return { ...state, locale: action.payload };
    case CLEAR_FILE:
      return { ...state, file: null };
    default:
      return state;
  }
};

export { appReducer };
