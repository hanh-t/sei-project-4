import React, { useState, useEffect } from 'react'
import { userID } from '../../helpers/auth'
import axios from 'axios'
// import UpdatePoints from './UpdatePoints'
// import { useParams } from 'react-router-dom'

const HabitUserInput = ({ title, frequency, category }) => {
  const [points, setPoints] = useState(0)
  const [userData, setUserData] = useState(null)
  // const params = useParams()

  useEffect(() =>{
    const getData = async () => {
      const { data } = await axios.get(`/api/auth/profile/${userID()}`)
      setUserData(data)
    }
    getData()
  }, [])


  console.log('USER', userData)

  const handleYes = (event) => {
    console.log('CLICKED', event.target.value)
    setPoints(points + parseInt(event.target.value))
  }

  const handleNo = (event) => {
    console.log('CLICKED', event.target.value)
  }


  return (
    <div className="questions-for-user">
      <h2>{title}, {frequency}</h2>
      {/* <h3>How did it go today?</h3> */}
      <h6 className="category-on-habit">{category}</h6>
      <button onClick={handleYes} value="1">👍</button><button onClick={handleNo} value="0">👎</button>
      
      {/* <UpdatePoints 
        key={params.id} {...userData}
      /> */}
      
    </div>  
  )
}

export default HabitUserInput