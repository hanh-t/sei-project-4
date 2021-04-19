import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { userID } from '../../helpers/auth'
import HabitCard from './HabitCard'
import { Link } from 'react-router-dom'


const MainTracker = () => {
  const [habits, setHabits] = useState([])
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('/api/habits/')
      setHabits(data)
    }
    getData()
  }, [])

  useEffect(() =>{
    const getData = async() => {
      const response = await axios.get('/api/quotes/')
      setQuote(response.data)
      
    }
    getData()
  }, [])

  if (!quote) return ''

  // console.log('QUOTES', quote)

  const filteredArray = habits.filter(habit => {
    return habit.owner === userID()
  })

  const mappedQuotes = quote.map(item => {
    return item.text
  })

  // console.log(mappedQuotes)

  const randomQuote = mappedQuotes[Math.floor(Math.random() * mappedQuotes.length)]
  // console.log('RANDOM QUOTE', randomQuote)

  return (
    <>
      <h1>TRACK YOUR PROGRESS</h1>
      { filteredArray.map(habit => (
        <HabitCard key={habit.id} {...habit}/>
      ))}
      <Link to="/categories">
        <button>Add a habit to track</button>
      </Link>
      <div className="quote-container">
        <p>{randomQuote}</p>

      </div>

    </>
  )
}

export default MainTracker