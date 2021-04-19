import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../helpers/auth'

const HabitForm = () => {
  const history = useHistory()
  const params = useParams()  

  const [formData, setFormData] = useState({
    category: `${params.id}`,
    title: '',
    frequency: '',
  })
  
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

  const handleCancel = () => {
    history.push('/habits/')
    location.reload()
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
      <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default HabitForm