import React from 'react'

const SavedResources = ({ title, resourceType, price }) => {
 
  return (
    <>
      <div className="saved-resources" >
        
        <div className="ui circular segment">
          
          <h2 className="ui header">{title}</h2>
        
        </div>
        <p>{resourceType}</p>
        <p className="sub header">{price} points</p>
        {/* <p>{title}</p> */}
        
        
      </div>
    </>
  )
}

export default SavedResources