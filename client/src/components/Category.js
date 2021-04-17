import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
      {categories.map((category, i) => { 
        return <div key={i}>
          <h1 key={category.title}>{category.title}</h1>
        </div>
      })}
    </>
  )
}

export default Category