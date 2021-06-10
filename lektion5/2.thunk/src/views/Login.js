import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/authActions";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const handleClick = () => {
    dispatch(login());
  };

  useEffect(() => {
    if (isAuth) {
      try {
        history.push(history.location.state.from.pathname);
      } catch {
        history.push("/");
      }
    }
  }, [isAuth]);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>LOGIN</button>
    </div>
  );
};

export default Login;
