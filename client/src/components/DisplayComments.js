import React from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { userIsOwner } from '../helpers/auth'
// import { Rating } from 'semantic-ui-react'

const DisplayComments = ({ text, createdAt, owner }) => {
  const date = new Date(createdAt)
  // const params = useParams()
  const formattedTime = date.toUTCString()

  console.log('OWNER', owner)


  // if (!userIsOwner) return ''
  return (
    <>
      {/* <div className="right floated content">
        { userIsOwner(owner._id) && 
        <div className="buttons">
          <Link to={`/parks/${params.id}/comments/${_id}`} className="ui basic blue button tiny"> Edit</Link>
        </div> }  
      </div> */}
      <img src={owner.profilePic} />
      <a className="author">{owner.username}</a>
      <span className="date">Created at: {formattedTime}</span>
      <div className="text">
        {text}
      </div>
    </>
  )
}

export default DisplayComments