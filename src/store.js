import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { reducers } from "./reducers/index";
import thunkMiddleware from 'redux-thunk';

// add the middlewares
let middlewares = [];


//import allReducer from 'reducers';

//const reducer = combineReducers(allReducer);

//middlewares.push(routerMiddleware(browserHistory));
middlewares.push(thunkMiddleware);
let middleware = applyMiddleware(...middlewares);


const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);


export { store, history };

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware
// )(createStore);

// export default function configureStore(initialState) {
//     return createStoreWithMiddleware(reducer, initialState);
// }

// add the router middleware
// middlewares.push(routerMiddleware(browserHistory));
//
// // add the saga middleware
// const sagaMiddleware = createSagaMiddleware();
// middlewares.push(sagaMiddleware);
//
// // add the freeze dev middleware
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(freeze);
// }
//
// // apply the middleware
// let middleware = applyMiddleware(...middlewares);
//
// // add the redux dev tools
// if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
//   middleware = compose(middleware, window.devToolsExtension());
// }
//
// // create the store
// const store = createStore(reducers, middleware);
// const history = syncHistoryWithStore(browserHistory, store);
// sagaMiddleware.run(sagas);
//
// // export
// export { store, history };
