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

  if (!resources) return ''
  return (
    <>
      <h1>RESOURCES LIST</h1>
      <h2>Here is a list of resources that we love and know will be useful for you. We have a small selection of books that you can purchase from us with your points. If you have not yet signed up, what are you waiting for? Your future habits will thank you!</h2>
      {resources.map(resource => ( 
        <ResourceCard key={resource.id} {...resource} />
      ))}
    </>
  )
}

export default Resources