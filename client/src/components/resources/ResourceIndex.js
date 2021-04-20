import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ResourceCard from './ResourceCard'

const Resources = () => {
  const [resources, setResources] = useState([])
  const [filterResources, setFilterResources] = useState([])

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('api/resources')
      setResources(data)
    }
    getData()
  }, [])

  const filteredResources = (event) => {
    const filteredArray = resources.filter(item => {
      return item.resourceType === event.target.value
    })
    setFilterResources(filteredArray)  
  }



  console.log('FILTER RESOURCE', filterResources)
  if (!resources) return ''
  return (
    <>
      <h1>RESOURCES LIST</h1>
      <h2>Here is a list of resources that we love and know will be useful for you. We have a small selection of books that you can purchase from us with your points. If you have not yet signed up, what are you waiting for? Your future habits will thank you!</h2>
      {}
      <select id="dropdown-resources" onChange={filteredResources}>
        <option value="All">All</option>
        <option value="Article">Article</option>
        <option value="Book">Book</option>
        <option value="Podcast">Podcast</option>
        <option value="Video">Video</option>
      </select>
      {/* <div className="resource-card-container">
        {filterResources.map(resource => ( 
          <ResourceCard key={resource.id} {...resource} />
        ))}
       
      </div> */}
      <div className="resource-card-container">
        {resources.map(resource => ( 
          <ResourceCard key={resource.id} {...resource} />
        ))}
      </div>
    </>
  )
}

export default Resources