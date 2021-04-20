import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ResourceWishlist from './ResourceWishlist'
import { userIsAuthenticated } from '../../helpers/auth'

const ResourceShow = ({ userData }) => {
  const params = useParams()

  const [resource, setResource] = useState(null)

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`/api/resources/${params.id}/`)
      setResource(data)
    }
    getData()
  }, [])
  console.log('RESOURCE', resource)
  if (!resource) return ''

  // const { }

  return (
    <>
      <h1 className="headers">More details</h1>
      <div className="resource-detail">
        <p>{resource.title}</p>
        <p>How to view/where to find: {resource.url}</p>
        { userIsAuthenticated() ? 
          <p>Our cost: {resource.price} points</p>
          :
          <p>Login to see our price</p>
        }
      </div>
      <ResourceWishlist 
        userData = {userData}
        resource = {resource}
      />
      
    </>
  )
}

export default ResourceShow