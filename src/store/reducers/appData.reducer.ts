import { GET_REGIONS_SUCCESS } from '../types';

const INITIAL_STATE = {
  regions:[]
};


const appDataReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_REGIONS_SUCCESS:
      return { ...state, regions: action.payload };
    default:
        return state;
  }
}

export { appDataReducer };


