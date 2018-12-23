import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import * as modules from "./modules";
const reducers = combineReducers(modules);
const middlewares = [createLogger()];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configure = () =>
  createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

export default configure;
