import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'

const HabitForm = () => {
  const history = useHistory()

  const [formData, setFormData] = useState({
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
      '/api/habits',
      formData,
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      }
    )
    history.push('/habits')
    window.location.reload()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <input
            placeholder="Daily"
            name="text"
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