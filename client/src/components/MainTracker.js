import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { userID } from '../helpers/auth'
import HabitCard from './HabitCard'


const MainTracker = () => {
  const [habits, setHabits] = useState([])

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('/api/habits/')
      setHabits(data)
    }
    getData()
  }, [])

  console.log('HABITS>>', habits)

  const filteredArray = habits.filter(habit => {
    return habit.owner === userID()
  })

  console.log('FILTERED>>>', filteredArray)

  return (
    <>
      { filteredArray.map(habit => (
        <HabitCard key={habit.id} {...habit}/>
      ))}
    </>
  )
}

export default MainTracker