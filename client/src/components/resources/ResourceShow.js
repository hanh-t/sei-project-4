import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ResourceShow = () => {
  const params = useParams()

  const [resources, setResources] = useState([])

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`/api/resources/${params.id}/`)
      setResources(data)
    }
    getData()
  }, [])
  
  if (!resources) return null

  // const { }

  return (
    <>
      <h1>More details</h1>
      <p>{resources.title}</p>
      <p>How to view: {resources.url}</p>
      <p>Cost: {resources.price} points</p>
      <button>Save for later</button>
    </>
  )
}

export default ResourceShow