import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { userID } from '../../helpers/auth'
const Orders = () => {
  // const history = useHistory()
  const params = useParams()

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
      const { data } = await axios.get(`/api/auth/profile/${params.id}`)
      setUserData(data)
      const allResources = await axios.get('/api/resources/') 
      setResources(allResources.data)
    }
    getData()
  }, [])

  console.log('USER', userData)
  if (!userData || !resources) return ''

  const filteredResources = resources.filter(item => {
    return item.id === parseInt(userData.wishlist)
  }) 
  console.log('FILTERED>>>', filteredResources)

  return (
    <>
      <h1> ORDERS</h1>
      <h2>Your orders - thanks!</h2>
      <div className="order-container">
        <div className="ui card order">
          { filteredResources.map(resource => (
            <h3 className="headers" key={resource.id}>{resource.title}</h3>
          ))}

        </div>
      </div>
    </>
  )
}

export default Orders