import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { userID } from '../../helpers/auth'
import HabitCard from './HabitCard'
import { Link } from 'react-router-dom'


const MainTracker = () => {
  const [habits, setHabits] = useState([])

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


  return (
    <>
      <h1>TRACK YOUR PROGRESS</h1>
      { filteredArray.map(habit => (
        <HabitCard key={habit.id} {...habit}/>
      ))}
      <Link to="/categories">
        <button>Add another habit to track</button>
      </Link>
      {/* <Link to="" */}

    </>
  )
}

export default MainTracker