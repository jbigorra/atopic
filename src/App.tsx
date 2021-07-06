import { Navbar } from "@components/navbar/Navbar";
import { DashboardView } from "@views/dashboard";
import * as React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import './styles.sass';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard"/>
        </Route>
        <Route path="/auth">
          <div className="content container is-fluid">
            <p>Auth flow not implemented</p>
            <Link to="/">Return</Link>
          </div>
        </Route>
        <Route path="/dashboard">
          <DashboardView />
        </Route>
      </Switch>
    </>
  );
}

export default App;
