import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "./components/context";
import Users from "./components/usersApi";
import AddContact from "./components/AddContact";
import UpdataUser from "./components/UpdataUser";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header brand="Contact Manager App" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Users} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/add" component={AddContact} />
              <Route exact path="/user/edit/:id" component={UpdataUser} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
