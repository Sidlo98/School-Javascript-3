import { Route, Redirect } from "react-router-dom";
import auth from "../services/AuthService";

export const ProtectedRoute = ({ component: Compontent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenicated()) {
          return <Compontent {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};
