import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import posts from './posts';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  posts:posts
});
