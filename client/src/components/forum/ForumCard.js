import React, { useState } from 'react'
// import DisplayComments from './DisplayComments'
import axios from 'axios'
import { getTokenFromLocalStorage, userIsOwner } from '../../helpers/auth'
import { useHistory, Link } from 'react-router-dom'


const ForumCard = ({ id, title, comments }) => {

  const history = useHistory()
  
  const avatarArray = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAmVcHsv6_lKgGVvBQUTB5JJAHGpsIp_7EMBdwXtW_fYNKUKhyzcIskNmG0_apzs77A0&usqp=CAU', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJqP6-JNuGfYB5nB0xWj8I7flEDM25EenyJGZm3Hs0EbkvhwgFOT8Y0-Km5JH7cKkeJE&usqp=CAU', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNsKC14CydUN16Ns6NQFyrQmjgbru-7SjeFOzr7cO8vxWSlG0wUW3G0VFxZvpqb5OFT0A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdB6XgbxDa_twWbER4F3jOgVMJZ_-XkmHdNGbrOp5swyBXbwhGch1s3e2SQiEpqSrs48&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NayGxNb6pM5dyJJBcjzP6yeCXrN_nzA29Gj_OHXqRkv1GzOBQ8xS--u5DTKXFljBMJU&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVba6ga7rXEycupCCkQsmNeJfrBC_ZfEfUbS5E_lgjorO6YE8abAIsqZrruQD6k811gs&usqp=CAU']

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

  const randomImage = avatarArray[Math.floor(Math.random() * avatarArray.length)]

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
                <img src={randomImage} />
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
                { userIsOwner(owner.id) && 
              <div className="buttons">
                <Link to={`/api/comments/${id}`} className="ui basic button tiny"> Edit</Link>
              </div>  
                }
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