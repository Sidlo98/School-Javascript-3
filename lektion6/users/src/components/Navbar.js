import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/actions/authActions';

const Navbar = () => {

  const dispatch = useDispatch();

  const admin = useSelector(state => state.auth.admin)

  const logoutUser = () => {
    dispatch(logout())
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact activeClassName="active" className="nav-link" to="/users">Users</NavLink>
            </li>
            {
              admin && 
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/admin">Admin</NavLink>
              </li>
            }
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logoutUser}>Logout</Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
