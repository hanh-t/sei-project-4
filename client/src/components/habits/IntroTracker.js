import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { userID } from '../../helpers/auth'
// import { Link } from 'react-router-dom'

const IntroTracker = () => {
  const [habits, setHabits] = useState([])
  const [points, setPoints] = useState(0)
  const [userData, setUserData] = useState(null)
  const [newPoints, setNewPoints] = useState(0)

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('/api/habits/')
      setHabits(data)
    }
    getData()
  }, [])

  useEffect(() =>{
    const getData = async () => {
      const { data } = await axios.get(`/api/auth/profile/${userID()}`)
      setUserData(data)
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

  const submitNewPoints = () => {
    // console.log('CLICKED', event.target.value)
    const existingPoints = userData.points
    // const todaysPoints = points
    setNewPoints(existingPoints + points)

    // setNewPoints(parseInt(userData.points) + points)
    console.log('points', existingPoints)
    console.log('New POINTS', newPoints)
  }


  return (
    <div className="questions-for-user">
      <h1>How did it go today?</h1>
      { filteredArray.map(habit => (
        <>
          <h2>{habit.title}, {habit.frequency}</h2>
          
          <h6 className="category-on-habit">{habit.category}</h6>
          <button onClick={handleYes} value="2">👍</button><button onClick={handleNo} value="0">👎</button>
        </>
      ))}
      <div>
        <span>Another {points} points!</span>
      </div>
      {/* <Link to='/habits/'> */}
      <button onClick={() => submitNewPoints(points)}>Go to your main tracker page</button>
      {/* </Link> */}
      
      {/* <UpdatePoints 
        key={params.id} {...userData}
      /> */}
      
    </div>  
  )
}

export default IntroTracker