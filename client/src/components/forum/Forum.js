import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ForumCard from './ForumCard'



const Forum = () => {
  const [categories, setCategories] = useState([])
 
  
  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('/api/categories')
      setCategories(data)
    }
    getData()
  }, [])
  
  
  return (
    <>
      <h1 className="headers">JOIN THE COMMUNITY!</h1>
      <div className="forum-section">
        <h2 className="headers">Join in the conversation with tips, questions or just any comments you may have. Scroll down for a specific category.</h2>
      </div>
      <div className="container-with-icon">
        <div className="main-forum-container">
          { categories.map((category, i) => (
        
            <ForumCard key={i} {...category } />
          ))}
        </div>
        <div className="icon">
          <i aria-hidden="true" className="chevron down link huge icon" ></i>
        </div>
      </div>
    </>
  )
}

export default Forum