import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ResourceWishlist from './ResourceWishlist'

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
  
  if (!resource) return ''

  // const { }

  return (
    <>
      <h1>More details</h1>
      <p>{resource.title}</p>
      <p>How to view: {resource.url}</p>
      <p>Cost: {resource.price} points</p>

      <ResourceWishlist 
        userData = {userData}
        resource = {resource}
      />
      
    </>
  )
}

export default ResourceShow