import {
  FETCH_USER_REQUESTING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_QUESTIONS_REQUESTING,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR
} from "./DetailsConstants";

export const getUser = (id, site) => ({
  type: FETCH_USER_REQUESTING,
  payload: { id, site }
});

export const setUser = data => ({
  type: FETCH_USER_SUCCESS,
  payload: {
    data
  }
});

export const errorUser = error => ({
  type: FETCH_USER_ERROR,
  payload: {
    error
  }
});

export const getQuestions = (id, site, order, sort, page, pageSize) => ({
  type: FETCH_QUESTIONS_REQUESTING,
  payload: { id, site, order, sort, page, pageSize }
});

export const setQuestions = data => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload: {
    data
  }
});

export const errorQuestions = error => ({
  type: FETCH_QUESTIONS_ERROR,
  payload: {
    error
  }
});
