import {
  FETCH_USERS_REQUESTING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from "./HomeConstants";

const INITIAL_STATE = {
  requesting: false,
  successful: false,
  data: [],
  error: ""
};

export const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
        error: ""
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
        error: "",
        data: action.payload.data
      };
    case FETCH_USERS_ERROR:
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
