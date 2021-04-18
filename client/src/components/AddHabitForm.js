import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'

const HabitForm = () => {
  const history = useHistory()
  const params = useParams()
  
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`/api/categories/${params.id}`)
      setCategories(data)
    }
    getData()
  }, [])

  console.log('CATEGORY>>', categories)

  const [formData, setFormData] = useState({
    category: `${params.id}`,
    title: '',
    frequency: '',
  })
  console.log('FORM DATA', formData)
  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    
    await axios.post(
      '/api/habits/',
      formData,
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      }
    )
    history.push('/habits/')
    window.location.reload()
  }
 

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Category</label>
          <textarea
            className="input"
            placeholder="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>What is your new habit?</label>
          <textarea
            className="input"
            placeholder="I will read 5 pages of my new book..."
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>How often will you do it?</label>
          <textarea
            className="input"
            placeholder="Daily..."
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default HabitForm