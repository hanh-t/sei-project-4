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
      <h1>Join the community!</h1>
      { categories.map((category, i) => (
        <ForumCard key={i} {...category } />
      ))}
    </>
  )
}

export default Forum