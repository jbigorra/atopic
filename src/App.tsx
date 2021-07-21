import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "~components/navbar/Navbar";
import { AuthContextProvider } from "~modules/login";
import PrivateRoute from "~modules/login/PrivateRoute";
import LoginView from "~views/auth/LoginView";
import { DashboardView } from "~views/dashboard/DashboardView";
import "./styles.sass";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/auth/login">
            <LoginView />
          </Route>
          <PrivateRoute path="/dashboard">
            <DashboardView />
          </PrivateRoute>
        </Switch>
      </AuthContextProvider>
    </>
  );
}

export default App;
