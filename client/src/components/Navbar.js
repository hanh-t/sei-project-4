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
          HABITUP 
          </Link>
        </div>
        <div className="item">
          <Link to="/">
            <i className="home icon"></i> 
          </Link>
        </div>

        <div className="right menu">
          <div className="item">
            <Link to="/resources">
              RESOURCES
            </Link>
          </div>
          { userIsAuthenticated() &&
          <>
            <div className="item">
              <Link to="/categories/community">
            COMMUNITY
              </Link>
            </div>
            <div className="item">
              <Link to="/habits">
            TRACKER
              </Link>
            </div>
            <div className="item">
              <Link to={`auth/profile/${userID()}`}>
            PROFILE
              </Link>
            </div>
          </>
          }
          
          { !userIsAuthenticated() && 
          <>
            <div className="item">
              <Link to='/auth/register'>
                {/* <i className="sign in alternate icon"></i> */}
                REGISTER
              </Link>
            </div>
            <div className="item">
              <Link to='/auth/login'>
                {/* <i className="sign in alternate icon"></i> */}
                LOGIN
              </Link>
            </div>
          </>
          }
          { userIsAuthenticated() &&
          <div className="item">
            <a className="button" onClick={handleLogout}> LOG OUT</a>
          </div>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar