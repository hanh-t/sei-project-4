import React, { useState } from 'react'
// import DisplayComments from './DisplayComments'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../helpers/auth'
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

  // const randomImage = avatarArray[Math.floor(Math.random() * avatarArray.length)]

  return (
    <>
      <div className="ui segment single-forum-container">
      
        <h2 className="ui left floated header headers">{title}</h2>
        <div className="ui clearing divider"></div>
        {comments.map((comment, i) => {
          const { text, owner } = comment
      
          return <div key={i} className="ui comments">
            <div className="comment">
              {/* <h3 key={text}>{text}</h3> */}
              <a className="avatar">
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
              </a>
              <div className="with-edit-button">
                <div className="comment-container">
                  <div className="content"> 
                    <div className="author">
                      {owner.username}
                    </div>
                  </div>
                  <div className="text">
                    {text}
                  </div>
                </div>
                {/* <h5 key={owner.username}>{owner.username}</h5> */}
                {/* <h5 key={createdAt}>{createdAt}</h5> */}
                {/* { userIsOwner(owner.id) && 
              <div className="buttons">
                <Link to={`/api/comments/${id}/edit`} className="ui basic button tiny"> Edit</Link>
              </div>  
                } */}
              </div>
            </div>
          </div>
        })}

     
        <div className="ui input comment-add">
          <input type="text" 
            placeholder="Add a comment, question or tip!" 
            name="text"
            value={input.text}
            onChange={handleChange}
            category={`${id}`}
          /> 
          <button onClick={handleSubmit} className="ui basic button comment-edit">Submit</button>
        </div>
      </div>
    
    </>
  )
}

export default ForumCard