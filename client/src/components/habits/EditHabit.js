import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { userID, getTokenFromLocalStorage } from '../../helpers/auth'
import EditHabitForm from './EditHabitForm'
import { useParams, useHistory } from 'react-router-dom'

const EditHabit = () => {
  const [habits, setHabits] = useState([])

  const history = useHistory()
  const params = useParams()
  console.log('PARAMS', params)

  const [formData, setFormData] = useState({
    title: '',
    frequency: '',
    category: `${params.id}`,
  })

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('/api/habits/')
      setHabits(data)
    }
    getData()
  }, [])

  const filteredArray = habits.filter(habit => {
    return habit.owner === userID()
  })

  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    
    setFormData(newFormData)
    console.log(event.target)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(
      `/api/habits/${params.id}`,
      formData,
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      }
    )
    history.push('/habits/')
  }

  const handleDelete = async () => {
    await axios.delete(`/api/habits/${params.id}`, {
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    })
    history.push(`/parks/${params.id}`)
  }

  if (!formData) return ''

  return (
    <>
      { filteredArray.map(habit => (
        <>
          <EditHabitForm 
            {...habit}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
          />
        </>
      ))} 
      <button onClick={handleDelete}>Delete this habit</button>

    </>
  )
}

export default EditHabit