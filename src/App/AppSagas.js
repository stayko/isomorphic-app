import { all } from "redux-saga/effects";

import HomeSagas from "../Home/HomeSagas";
import DetailsSagas from "../Details/DetailsSagas";

export default function* MainSagas() {
  yield all([...HomeSagas, ...DetailsSagas]);
}
