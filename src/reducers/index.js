import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import users from "./users";
import posts from './posts';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  posts:posts
});
