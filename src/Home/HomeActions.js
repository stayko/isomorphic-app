import {
  FETCH_USERS_REQUESTING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from "./HomeConstants";

export const getUsers = (site, order, sort, page, pageSize) => ({
  type: FETCH_USERS_REQUESTING,
  payload: { site, order, sort, page, pageSize }
});

export const setUsers = data => ({
  type: FETCH_USERS_SUCCESS,
  payload: {
    data
  }
});

export const errorUsers = error => ({
  type: FETCH_USERS_ERROR,
  payload: {
    error
  }
});
