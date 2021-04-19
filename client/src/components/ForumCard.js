import React from 'react'

const ForumCard = ({ title, comments }) => {
  // console.log('COMMENTS', comments)

  return (
    <div>
      <h2>{title} Forum</h2>
      {comments.map(comment => {
        return <p key={comment.id}>{comment.text}</p>
      })},
    </div>
  )
}

export default ForumCard