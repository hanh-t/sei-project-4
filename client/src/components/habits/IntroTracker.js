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
    points: `${newPoints}`,
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
    history.push(`/auth/profile/${userData.id}/`)
    
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
      <button onClick={handleUpdatedPoints}>
        Go to your main tracker page
      </button>
      {/* </Link> */}
      
      {/* <UpdatePoints 
        key={params.id} {...userData}
      /> */}
      
    </div>  
  )
}

export default IntroTracker