import { combineReducers } from "redux";
import { users } from "../Home/HomeReducers";
import { user, questions } from "../Details/DetailsReducers";

export default combineReducers({
  user,
  users,
  questions
});
