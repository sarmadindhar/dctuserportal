import { GET_WORKFLOWS_SUCCESS, GET_WORKFLOW_SUCCESS } from '../types';

const INITIAL_STATE = {
  workflows: { results: [] },
  workflow: null,
};

const workflowReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_WORKFLOWS_SUCCESS:
      return { ...state, workflows: action.payload };
    case GET_WORKFLOW_SUCCESS:
      return { ...state, workflow: action.payload };
    default:
      return state;
  }
};

export { workflowReducer };
