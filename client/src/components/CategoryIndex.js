import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import HabitForm from './HabitForm'
import CategoryCard from './CategoryCard'

const Category = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('api/categories')
      setCategories(data)
    }
    getData()
  }, [])


  return (
    <>
      <h1>category list</h1>
      { categories.map( category => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </>
  )
}

export default Category