import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  // const [isAauth, setIsAauth] = useState(false)
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink exact to="/" className="navbar-brand">LOGO</NavLink>
        <ul className="nav-links">
          <li><NavLink exact activeClassName="active-link" className="nav-link" to="/">News</NavLink></li>
          
          {
            isAuth ? <li><NavLink exact activeClassName="active-link" className="nav-link" to="/create">Create</NavLink></li>
            : <li><NavLink exact activeClassName="active-link" className="nav-link" to="/login">Login</NavLink></li>
          }
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
