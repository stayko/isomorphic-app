import {
  FETCH_USER_REQUESTING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_QUESTIONS_REQUESTING,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR
} from "./DetailsConstants";

const INITIAL_STATE = {
  requesting: false,
  successful: false,
  data: [],
  error: ""
};

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
        error: ""
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
        error: "",
        data: action.payload.data
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        requesting: false,
        successful: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
        error: ""
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
        error: "",
        data: action.payload.data
      };
    case FETCH_QUESTIONS_ERROR:
      return {
        ...state,
        requesting: false,
        successful: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
