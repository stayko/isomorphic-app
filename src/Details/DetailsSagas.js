import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCH_USER_REQUESTING,
  FETCH_QUESTIONS_REQUESTING
} from "./DetailsConstants";
import {
  setUser,
  setQuestions,
  errorUser,
  errorQuestions
} from "./DetailsActions";
import DetailsService from "./DetailsService";

function* getUser(action) {
  try {
    const user = yield call(
      DetailsService.getUser,
      action.payload.id,
      action.payload.site
    );
    yield put(setUser(user.data.items));
  } catch (error) {
    yield put(
      errorUser(
        `${error.response.status} ${error.response.statusText}: ${
          error.response.data.error_message
        }`
      )
    );
  }
}

function* getQuestions(action) {
  try {
    const questions = yield call(
      DetailsService.getQuestions,
      action.payload.id,
      action.payload.site,
      action.payload.sort,
      action.payload.page,
      action.payload.pageSize
    );
    yield put(setQuestions(questions.data.items));
  } catch (error) {
    yield put(
      errorQuestions(
        `${error.response.status} ${error.response.statusText}: ${
          error.response.data.error_message
        }`
      )
    );
  }
}

function* getUserWatcher() {
  yield takeLatest(FETCH_USER_REQUESTING, getUser);
}

function* getQuestionsWatcher() {
  yield takeLatest(FETCH_QUESTIONS_REQUESTING, getQuestions);
}

export default [getUserWatcher(), getQuestionsWatcher()];
