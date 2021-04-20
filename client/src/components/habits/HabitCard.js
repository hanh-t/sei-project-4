import React from 'react'
import { Link } from 'react-router-dom'

const HabitCard = ({ id, title, frequency, category }) => {


  return (
    <>
      <h2 className="headers">{title}, {frequency}</h2>
      {/* <h2>{frequency}</h2> */}
      <h6 className="category-on-habit">{category}</h6>
      <Link to={`/habits/${id}`}>
        <button className="ui inverted icon right labeled standard basic button"><i aria-hidden="true" className="edit icon"></i>Edit or delete</button>
      </Link>
    </>  

  )
}

export default HabitCard