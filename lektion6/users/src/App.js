import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import UserList from "./views/UserList";
import { getUsers } from "./store/actions/usersActions";
import Navbar from "./components/Navbar";
import { checkUser } from "./store/actions/authActions";
import AdminPage from "./views/AdminPage";
import AddUser from "./views/AddUser";
import EditUser from "./views/EditUser";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { AdminRoute } from "./routes/AdminRoute";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(checkUser())
  // }, [dispatch])

  useEffect(() => {
    dispatch(checkUser());
    dispatch(getUsers());
  }, [dispatch]);

  const user = useSelector((state) => state.auth.userToken);

  return (
    <BrowserRouter>
      {user ? <Navbar /> : ""}

      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/users" component={UserList} />
        <AdminRoute exact path="/admin" component={AdminPage} />
        <AdminRoute exact path="/add-user" component={AddUser} />
        <AdminRoute exact path="/admin/manage/:id" component={EditUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
