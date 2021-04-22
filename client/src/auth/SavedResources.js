import React from 'react'
import { Link } from 'react-router-dom'

const SavedResources = ({ title, resourceType, price }) => {
 
  return (
    <>
      <div className="saved-resources" >

        <Link to="/resources/">
          <div className="ui  circular segment">
            <p>{resourceType}</p>
            <h2 className="ui header">{title}</h2>
            <p className="sub header">{price} points</p>
          
          </div>
        </Link>
        
        
      </div>
    </>
  )
}

export default SavedResources