import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { userID, getTokenFromLocalStorage } from '../../helpers/auth'
import { useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'



const IntroTracker = () => {
  const [habits, setHabits] = useState([])
  const [points, setPoints] = useState(0)
  const [userData, setUserData] = useState([])
  const [newPoints, setNewPoints] = useState(points)
  // const params = useParams()
  const history = useHistory()
  
  const [pointsToSend, setPointstoSend] = useState({
    points: 0,
  })

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
  // console.log('USER',userData)
 

  const filteredArray = habits.filter(habit => {
    return habit.owner === userID()
  })

  const handleYes = (event) => {
    setPoints(points + parseInt(event.target.value))
  }

  const handleNo = (event) => {
    setPoints(points + parseInt(event.target.value))
  }

  
  useEffect(() => {
    const updateTotal = () => {
      setNewPoints(parseInt(userData.points) + points)
      setPointstoSend(newPoints)
    }
    updateTotal()
    
  }, [points])

  console.log('NEW', newPoints)
  


  const handleUpdatedPoints = async (event) => {
    event.preventDefault()
    await axios.patch(
      `/api/auth/profile/${userData.id}/update-points`,
      pointsToSend,
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      }
    )
    history.push('/habits/')
    
  }

  return (

    <>
      <h1 className="headers">How did it go today?</h1>
      <div className="questions-for-user">
        { filteredArray.map((habit, i) => (
          <>
            <h2 key={habit.title} className="headers">{habit.title}, {habit.frequency}</h2>
          
            <h6 key={i} className="category-on-habit">{habit.category}</h6>
            <div className="intro-tracker-buttons">
              <button onClick={handleYes} value="2" className="ui  basic button"> 👍 </button>
              <button onClick={handleNo} value="0" className="ui basic button"> 👎 </button>
            </div>
          </>
        ))}
      </div>
    
      <div className="intro-points-button">
        <span className="points-span">Another {points} points!</span>
     
      
        {/* <Link to='/habits/'> */}
        <button onClick={handleUpdatedPoints} className="ui basic button">Go to your main tracker page</button>
        {/* </Link> */}
      </div>
    </>
  )
}

export default IntroTracker

