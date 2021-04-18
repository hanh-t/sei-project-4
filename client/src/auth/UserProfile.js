import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const UserProfile = () => {
  const [userData, setUserData] = useState('')
  const params = useParams()

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`/api/auth/profile/${params.id}`)
      setUserData(data)
    }
    getData()
  }, [])

  const { username, fullName, email, profileImage, points  } = userData
  

  if (!userData) return null
  return (
    <>
      <h1>{`Welcome back ${username}!`}</h1>
      <h2>Full Name: {fullName}</h2>
      <h2>Email: {email}</h2>
      <h2>Profile Image: {profileImage}</h2>
      <h2>Total points: {points}</h2>
      <Link to={`/auth/profile/${params.id}/edit`}>
        <button>Edit profile</button>
      </Link>
      <Link to="/habits/">
        Your Habit Tracker
      </Link>
    </>
  )
}

export default UserProfile