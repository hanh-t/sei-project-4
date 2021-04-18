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
      <Link to="/">
        Home
      </Link>
     
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
      <Link to="/resources">
        Resources
      </Link>
      
      { userIsAuthenticated() &&
      <>
        <Link to="/categories">
        Choose a category
        </Link>
  
        <Link to={`auth/profile/${userID()}`}>
        Profile
        </Link>

        <Link to="/categories/community">
          Community
        </Link>
      </>
      }
      { userIsAuthenticated() &&
        
          <a onClick={handleLogout}> Log out</a>
    
      }
    </>
  )
}

export default Navbar