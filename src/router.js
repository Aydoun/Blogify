import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./views/App/index.jsx";
import Home from "./views/Home/index.jsx";
import NotFound from "./views/NotFound/index.jsx";

// build the router
// <IndexRoute component={Home}/>
// <Route path="user-edit(/:id)" component={UserEdit}/>
// <Route path="*" component={NotFound}/>
const router = (
  <Router history={history}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>
);

// export
export { router };
