import React, { useEffect, useState } from 'react'
import axios from 'axios'
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
      <h1 className="headers">CATEGORY LIST</h1>
      <h2 className="headers">Select a category to input details</h2>
      <div className="category-container">
        { categories.map( category => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </>
  )
}

export default Category