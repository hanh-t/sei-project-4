import React from 'react'
import { Link } from 'react-router-dom'
import { userID } from '../helpers/auth'

const Navbar = () => {


  return (
    <>
      <Link to="/">
        Home
      </Link>
      <Link to='/auth/login'>
        {/* <i className="sign in alternate icon"></i> */}
        Login
      </Link>
      <Link to='/auth/register'>
        {/* <i className="sign in alternate icon"></i> */}
        Register
      </Link>
      <Link to="/categories">
        Choose a category
      </Link>
      <Link to={`/profile/${userID()}`}>
        Profile
      </Link>
    </>
  )
}

export default Navbar