import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { logger } from "./middleware/index.js";
import { Provider } from "react-redux";
import { pokemonsReducer } from "./reducers/pokemons";

import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";

import { thunk } from "redux-thunk";

import "@ant-design/v5-patch-for-react-19";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const composeEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(pokemonsReducer, composeEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
