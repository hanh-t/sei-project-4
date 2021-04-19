import React, { useState } from 'react'
// import DisplayComments from './DisplayComments'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'
import { useHistory } from 'react-router-dom'


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
    <div>
      <h2>{title}</h2>
      {comments.map((comment, i) => {
        const { text, owner } = comment
      
        return <div key={i}>
          <h3 key={text}>{text}</h3>
          <a className="ui avatar circular huge image">
            <img src={owner.profileImage} />
          </a>
          <h5 key={owner.username}>{owner.username}</h5>
          {/* <h5 key={createdAt}>{createdAt}</h5> */}
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