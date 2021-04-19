import React from 'react'
import { Link } from 'react-router-dom'

const HabitCard = ({ id, title, frequency, category }) => {


  return (
    <>
      <h2>{title}, {frequency}</h2>
      {/* <h2>{frequency}</h2> */}
      <h6 className="category-on-habit">{category}</h6>
      <Link to={`/habits/${id}`}>
        Edit or delete
      </Link>
    </>  

  )
}

export default HabitCard