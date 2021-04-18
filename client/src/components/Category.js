import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import HabitForm from './HabitForm'
import { Link } from 'react-router-dom'

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
      {categories.map((category, i) => ( 
        <div className="category-container" key={i}>
          <Link to="/habits">
            <div className="single-category">
              <h1 key={category.id}>{category.id} - {category.title}</h1>
            </div>
            {/* <HabitForm /> */}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Category