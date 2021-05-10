import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { userID } from '../../helpers/auth'
const Orders = () => {
  // const history = useHistory()
  const params = useParams()
  // console.log('params', params)

  const [userData, setUserData] = useState('')
  const [resources, setResources] = useState('')


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/auth/profile/${userID()}`)
      setUserData(data)
    }
    getData()
  }, [])

  useEffect(() => {
    const getData = async () => {
      const allResources = await axios.get(`/api/resources/${params.id}`) 
      setResources(allResources.data)
    }
    getData()
  }, [])

  // console.log('USER', userData)
  // console.log('resources>>', resources)

  if (!userData || !resources) return null

  
  return (
    <>
      <h1> ORDERS</h1>
      <h2>Your orders - thanks!</h2>
      <div className="order-container">
        <h3>Order date: {new Date().toString()}</h3>
        <div className="ui card order">
          <h3 className="headers" >{resources.title}</h3>
      

        </div>
      </div>
    </>
  )
}

export default Orders