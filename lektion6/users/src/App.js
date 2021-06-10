import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import UserList from './views/UserList';
import { getUsers } from './store/actions/usersActions';
import Navbar from './components/Navbar';
import { checkUser } from './store/actions/authActions';

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(checkUser())
  // }, [dispatch])

  useEffect(() => {
    dispatch(checkUser())
    dispatch(getUsers())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/users" component={UserList} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
