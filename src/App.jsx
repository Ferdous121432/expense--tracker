/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { Balance } from "./components/Balance";
import { Provider } from "./components/context/Context";
import { Header } from "./components/Header";
import History from "./components/History";
import IncomeExpanse from "./components/IncomeExpanse";
import NewTransection from "./components/NewTransection";

function App() {
  return (
    <Provider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpanse />
        <History />
        <NewTransection />
      </div>
    </Provider>
  );
}

export default App;
