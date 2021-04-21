import React, { useState } from 'react'
// import DisplayComments from './DisplayComments'
import axios from 'axios'
import { getTokenFromLocalStorage, userIsOwner } from '../../helpers/auth'
import { useHistory, Link } from 'react-router-dom'


const ForumCard = ({ id, title, comments }) => {

  const history = useHistory()

  const [input, setInput] = useState({
    text: '',
    category: `${id}`,
  })

  const handleChange = event => {
    const newInput = { ...input, [event.target.name]: event.target.value }
    setInput(newInput)
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    
    await axios.post(
      '/api/comments/',
      input,
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      }
    )
    history.push('/categories/community/')
    location.reload()
  }

  return (
    <div className="ui container single-forum-container">
      
      <h2 className="ui left floated header">{title}</h2>
      <div className="ui clearing divider"></div>
      {comments.map((comment, i) => {
        const { text, owner } = comment
      
        return <div key={i}>
          <h3 key={text}>{text}</h3>
          <a className="ui avatar circular huge image">
            <img src={owner.profileImage} />
          </a>
          <h5 key={owner.username}>{owner.username}</h5>
          {/* <h5 key={createdAt}>{createdAt}</h5> */}
          { userIsOwner(owner.id) && 
      <div className="buttons">
        <Link to={`/api/comments/${id}`} className="ui basic blue button tiny"> Edit</Link>
      </div>  
          }
        </div>
      })}

     
      <div className="ui input">
        <input type="text" 
          placeholder="Add a comment, question or tip!" 
          name="text"
          value={input.text}
          onChange={handleChange}
          category={`${id}`}
        /> 
        <button onClick={handleSubmit}>Submit</button>
      </div>
      
    </div>
  )
}

export default ForumCard