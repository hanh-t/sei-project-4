import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { userID, userIsAuthenticated } from '../helpers/auth'

const Navbar = () => {
  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
    location.reload()
  }

  return (
    <>
      <div className="ui inverted menu navbar-menu">
        <div className="header item">
          <Link to="/">
          Home
          </Link>
        </div>

        <div className="right menu">
          <div className="item">
            <Link to="/resources">
              Resources
            </Link>
          </div>
          { userIsAuthenticated() &&
          <>
            <div className="item">
              <Link to="/categories/community">
            Community
              </Link>
            </div>
            <div className="item">
              <Link to="/habits">
            Tracker
              </Link>
            </div>
            <div className="item">
              <Link to={`auth/profile/${userID()}`}>
            Profile
              </Link>
            </div>
          </>
          }
          
          { !userIsAuthenticated() && 
      <>
        <Link to='/auth/register'>
          {/* <i className="sign in alternate icon"></i> */}
      Register
        </Link>
        <Link to='/auth/login'>
          {/* <i className="sign in alternate icon"></i> */}
        Login
        </Link>
      </>
      
          }
          { userIsAuthenticated() &&
          <div className="item">
            <a className="button" onClick={handleLogout}> Log out</a>
          </div>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar