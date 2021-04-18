import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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

  console.log('USER>>>', userData)

  const { username } = userData
  // fullName, username, email, profileImage, points 

  if (!userData) return null
  return (
    <>
      <h1 className="profile-title">{`Welcome back ${username}!`}</h1>
    </>
  )
}

export default UserProfile