import React from 'react'
import { Link } from 'react-router-dom'

const ResourceCard = ({ id, resourceType, title, url }) => {

  return (
    <div>
      <Link to={`/resources/${id}`}>
        <h3>{title}</h3>
        <h5>{url}</h5>
        <h5>{resourceType}</h5>
      </Link>
    </div>
  )
}

export default ResourceCard