import React from "react";
import "./App.css";
import Nav from "./components/shared/Nav.js";
import Welcome from "./components/Welcome.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard.js";
import CreateWallet from "./components/dashboard/dashboardoperations/CreateWallet.js";
import NotFound from "./components/shared/NotFound.js";
import { Provider } from "react-redux";
import store from "./Store.js";
import UpdateWallet from "./components/dashboard/dashboardoperations/UpdateWallet.js";
import Transaction from "./components/transaction/Transaction.js";
import AddTransaction from "./components/transaction/transactionoperations/AddTransaction.js";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Nav} />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/createwallet" exact component={CreateWallet}></Route>
          <Route path="/updatewallet/:id" exact component={UpdateWallet} />
          <Route path="/transactions/:id" exact component={Transaction}></Route>
          <Route path="/trns/add/:id" exact component={AddTransaction} />
          <Route path="/" component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
