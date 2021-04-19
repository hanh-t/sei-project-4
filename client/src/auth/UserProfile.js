import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const UserProfile = () => {
  const [userData, setUserData] = useState('')
  const [resources, setResources] = useState('')
  const params = useParams()
 

  
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/auth/profile/${params.id}`)
      setUserData(data)
      const allResources = await axios.get('/api/resources/') 
      setResources(allResources.data)
    }
    getData()
  }, [])

  console.log('DATA1', userData)
  console.log('DATA2', resources)

  const { username, fullName, email, profileImage, points, wishlist } = userData


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
      {/* <Link to="/habits/">
        Your Habit Tracker
      </Link> */}
      <h2>Saved resources</h2>
      <p>{wishlist}</p>
    </>
  )
}

export default UserProfile