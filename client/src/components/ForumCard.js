import React from 'react'

const ForumCard = ({ title, comments }) => {
  console.log('COMMENTS', comments)

  return (
    <div>
      <h2>{title} Forum</h2>
      {/* <p>{comments}</p> */}
    </div>
  )
}

export default ForumCard