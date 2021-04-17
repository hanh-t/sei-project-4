import React from 'react'
import { Link } from 'react-router-dom'
import { userID } from '../helpers/auth'

const Navbar = () => {


  return (
    <>
      <Link to="/">
        Home
      </Link>
      <Link to='/login'>
        {/* <i className="sign in alternate icon"></i> */}
        Login / Register
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