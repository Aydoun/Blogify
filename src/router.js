import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "views/App";
import Home from "views/Home";
import Contact from 'views/Contact';
import Work from 'views/Work';
import NotFound from "views/NotFound";

// build the router
// <IndexRoute component={Home}/>
// <Route path="user-edit(/:id)" component={UserEdit}/>
// <Route path="*" component={NotFound}/>
const router = (
  <Router history={history}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/work" component={Work}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>
);

// export
export { router };
