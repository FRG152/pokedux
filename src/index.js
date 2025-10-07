import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { pokemonsReducer } from "./reducers/pokemons";
import { legacy_createStore as createStore } from "redux";

import "@ant-design/v5-patch-for-react-19";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(pokemonsReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
