import React from "react";
import './App.css';

import { Provider } from "react-redux";
import store from "./store";

import Chat from "./components/chat/Chat";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to APEX LEGEND !</h1>
          <Chat id={"1"} />
        </header>
      </div>
    </Provider>
  );
}

export default App;
