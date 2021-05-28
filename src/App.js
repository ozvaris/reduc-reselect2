import { Provider } from "react-redux";
import React from "react";
import store from "./store";
import Home from "./Home";
import "./index.css";

const initial = store.getState();

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />

        <pre>{JSON.stringify(initial, null, 2)}</pre>
      </div>
    );
  }
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
