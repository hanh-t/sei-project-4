import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { userID } from '../../helpers/auth'
import { Link } from 'react-router-dom'

const IntroTracker = () => {
  const [habits, setHabits] = useState([])
  const [points, setPoints] = useState(0)

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

  const handleYes = (event) => {
    // console.log('CLICKED', event.target.value)
    setPoints(points + parseInt(event.target.value))
  }

  const handleNo = (event) => {
    // console.log('CLICKED', event.target.value)
    setPoints(points + parseInt(event.target.value))
  }

  return (
    <div className="questions-for-user">
      { filteredArray.map(habit => (
        <>
          {/* // <HabitUserInput key={habit.id} {...habit}/>
            // <HabitCard key={habit.id} {...habit}/> */}
          <h2>{habit.title}, {habit.frequency}</h2>
          <h3>How did it go today?</h3>
          <h6 className="category-on-habit">{habit.category}</h6>
          <button onClick={handleYes} value="5">👍</button><button onClick={handleNo} value="0">👎</button>
        </>
      ))}
      <div>
        <span>Another {points} points!</span>
      </div>
      <Link to='/habits/'>
          Go to your main tracker page

      </Link>
      
      {/* <UpdatePoints 
        key={params.id} {...userData}
      /> */}
      
    </div>  
  )
}

export default IntroTracker