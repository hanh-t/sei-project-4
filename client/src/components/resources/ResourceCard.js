import React from 'react'
import { Link } from 'react-router-dom'

const ResourceCard = ({ id, resourceType, title }) => {

  return (
    <>
      <Link to={`/resources/${id}/`}>
        <div className="ui card">
          <div className="content">
            <div className="header">{resourceType}</div>
          </div>
          <div className="content">
            <div className="description">
              <h5>{title}</h5>
              {/* <h5>{url}</h5> */}
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ResourceCard