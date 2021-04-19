import React from 'react'
// import DisplayComments from './DisplayComments'

const ForumCard = ({ title, comments }) => {
  console.log('COMMENTS', comments)

  const mappedComments = comments.map(comment => {
    return comment.text
  })

  console.log('MAPPED CAT', mappedComments)

  return (
    <div>
      <h2>{title} Forum</h2>
      {/* {comments.map(comment => {
        <DisplayComments key={comment.id} {...comment}/> 
      })} */}
      <p>{mappedComments}</p>
    </div>
  )
}

export default ForumCard