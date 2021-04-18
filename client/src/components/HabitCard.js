import React from 'react'

const HabitCard = ({ title, frequency }) => {

  return (
    <>
      <h2>{title}</h2>
      <h2>{frequency}</h2>
    </>  

  )
}

export default HabitCard