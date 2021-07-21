import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./Auth";

export default function PrivateRoute(props: { children: React.ReactNode }) {
  const auth = useAuth();
  const { children, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
