import React from 'react'

const SavedResources = ({ title, resourceType, price }) => {
 
  return (
    <>
      <div className="saved-resources" >
        <p>{title}</p>
        <p>{resourceType}</p>
        <p>Our price: {price} points</p>
      </div>
    </>
  )
}

export default SavedResources