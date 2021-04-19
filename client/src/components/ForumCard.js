import React from 'react'
import DisplayComments from './DisplayComments'

const ForumCard = ({ title, comments }) => {
  // console.log('COMMENTS', comments)

  return (
    <div>
      <h2>{title} Forum</h2>
      {comments.map(comment => {
        {/* <p>{title}</p> */}

        <DisplayComments key={comment.id} {...comment}/> 
  
      })}
     
    </div>
  )
}

export default ForumCard