import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import projects from "./projects";
export default combineReducers({
  projects,
  auth,
  message,
});
