import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ForumCard from './ForumCard'
// import { useParams } from 'react-router-dom'

const Forum = () => {
  const [categories, setCategories] = useState([])
  // const params = useParams()
  
  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('/api/categories')
      setCategories(data)
    }
    getData()
  }, [])
  console.log('DATA', categories) 

  // const mappedCategories = categories.map(item => {
  //   return item.text
  // })

  // console.log('MAPPED CAT', mappedCategories)
  
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