import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { userID } from '../../helpers/auth'
import ResourceShow from './ResourceShow'

const UserData = () => {
  const [userData, setUserData] = useState(null)

  useEffect(() =>{
    const getData = async () => {
      const { data } = await axios.get(`/api/auth/profile/${userID()}`)
      setUserData(data)
    }
    getData()
  }, [])
  // console.log('USER>>', userData)
  

  return (
    <div>
      <ResourceShow 
        userData={userData}
      />
    </div>
  )
}

export default UserData