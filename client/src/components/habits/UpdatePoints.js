import React from 'react'


const UpdatePoints = ({ points }) => {
  console.log('USER>', points)

  return (
    <>
      <span className="user-points">{points}</span>
    </>
  )
}

export default UpdatePoints