import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ResourceCard from './ResourceCard'

const Resources = () => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('api/resources')
      setResources(data)
    }
    getData()
  }, [])

  console.log('RESOURCE>>', resources)

  if (!resources) return ''
  return (
    <>
      <h1>RESOURCES LIST</h1>
      {resources.map(resource => ( 
        <ResourceCard key={resource.id} {...resource} />
      ))}
    </>
  )
}

export default Resources