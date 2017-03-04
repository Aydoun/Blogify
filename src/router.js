import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./views/App";
//import Home from "./components/Home";
//import UserEdit from "./components/UserEdit";
//import NotFound from "./components/NotFound";

// build the router
// <IndexRoute component={Home}/>
// <Route path="user-edit(/:id)" component={UserEdit}/>
// <Route path="*" component={NotFound}/>
const router = (
  <Router history={history}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
    </Route>
  </Router>
);

// export
export { router };
