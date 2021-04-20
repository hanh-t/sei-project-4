import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { userID } from '../../helpers/auth'
import HabitCard from './HabitCard'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar'



const MainTracker = () => {
  const [habits, setHabits] = useState([])
  const [quote, setQuote] = useState(null)
  const [calendarDate, setCalendarDate] = useState(new Date())




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


  const onChange = (calendarDate) => {
    setCalendarDate(calendarDate)
  }

  return (
    <>
      <h1 className="headers">TRACK YOUR PROGRESS</h1>
      <div className="cal-habit-container">
        <div className="cal-container">
          <Calendar 
            onChange={onChange}
            value={calendarDate}
          />
        </div>
        <div className="habit-container"> 
          { filteredArray.map(habit => (
            <HabitCard key={habit.id} {...habit}/>
          ))}
        </div>
        <Link to="/categories">
          <button className="ui inverted icon right labeled standard basic button"><i aria-hidden="true" className="add icon"></i>Add a habit</button>
        </Link>
      </div>
      
      <div className="points-container">
        <span></span>
      </div>

      <div className="quote-container">
        <p>{randomQuote}</p>

      </div>

    </>
  )
}

export default MainTracker