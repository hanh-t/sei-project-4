import React from 'react'
import { Link } from 'react-router-dom'


const CategoryCard = ({ id, title }) => {
 


  return (
    <Link to={`/categories/${id}`}>
      {/* <div className="category-container"> */}
      <div className="ui circular segment">
        
        <h2 className="ui header">{title}</h2>
        
      </div>
      {/* </div> */}
    </Link>
  )
}

export default CategoryCard


