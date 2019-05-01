import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_USERS_REQUESTING } from "./HomeConstants";
import { setUsers, errorUsers } from "./HomeActions";
import HomeService from "./HomeService";

function* getUsers(action) {
  try {
    const users = yield call(
      HomeService.getUsers,
      action.payload.site,
      action.payload.order,
      action.payload.sort,
      action.payload.page,
      action.payload.pageSize
    );
    yield put(setUsers(users.data.items));
  } catch (error) {
    yield put(
      errorUsers(
        `${error.response.status} ${error.response.statusText}: ${
          error.response.data.error_message
        }`
      )
    );
  }
}

function* getUsersWatcher() {
  yield takeLatest(FETCH_USERS_REQUESTING, getUsers);
}

const usersSagas = [getUsersWatcher()];

export default usersSagas;
