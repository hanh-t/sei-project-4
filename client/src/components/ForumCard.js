import React from 'react'

const ForumCard = ({ title }) => {


  return (
    <div>
      <h1>Forum Card</h1>
      <h2>{title}</h2>
      {/* { comments.map( comment => (
        <h3 key={comment.id} >{comment}</h3>
      ))} */}
    </div>
  )
}

export default ForumCard