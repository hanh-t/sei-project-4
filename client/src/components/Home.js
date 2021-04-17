import React, { useEffect } from 'react'
import axios from 'axios'


const Home = () => {
  useEffect(() => {
    const getData = async() => {
      const response = await axios.get('api/categories')
      console.log('RESPONSE', response)
    }
    getData()
  }, [])

  return (
    <h1>HOMEPAGE</h1>
  )
}

export default Home