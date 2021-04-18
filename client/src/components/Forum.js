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

  console.log('CATS', categories)

  
  
  return (
    <>
      <h1>Join the community!</h1>
      { categories.map( category => (
        <ForumCard key={category.[0]} {...category } />
      ))}
    </>
  )
}

export default Forum