import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "./Auth";

interface IPrivateProps extends RouteProps {}

const PrivateRoute : React.FC<IPrivateProps> = (props: IPrivateProps) => {
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

export default PrivateRoute;
