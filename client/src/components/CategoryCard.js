import React from 'react'
import { Link } from 'react-router-dom'


const CategoryCard = ({ id, title }) => {
 


  return (
    <>
      <Link to={`/categories/${id}`}>
        <h2>{title}</h2>
      </Link>
    </>
  )
}

export default CategoryCard