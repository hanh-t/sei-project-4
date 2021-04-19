import React from 'react'
// import DisplayComments from './DisplayComments'

const ForumCard = ({ title, comments }) => {
  // console.log('COMMENTS', comments)

  return (
    <div>
      <h2>{title} Forum</h2>
      {/* {comments.map(comment => {
        <DisplayComments key={comment.id} {...comment}/> 
      })} */}
      {/* {mappedComments.map} */}
      {comments.map((comment, i) => {
        const { text, owner } = comment
        return <div key={i}>
          <h3 key={text}>{text}</h3>
          <h5 key={owner.username}>{owner.username}</h5>
          {/* <h5 key={created_at}>{created_at}</h5> */}
        </div>
      })}
    </div>
  )
}

export default ForumCard