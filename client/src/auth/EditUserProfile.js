import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'

import EditUserForm from './EditUserForm'

const EditUserProfile = () => {

  const history = useHistory()
  const params = useParams()

  const { id } = params

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    profileImage: '',
    password: '',
    password_confirmation: '',
  })

  // const [errors, setErrors] = useState({
  //   email: '',
  //   fullName: '',
  //   password: '',
  //   username: '',
  //   password_confirmation: ''
  // })
  // console.log(errors, setErrors)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/auth/profile/${id}`)
      setFormData(response.data)
    }
    getData()
  }, [])

  const handleImageUrl = url =>{
    setFormData({ ...formData, profileImage: url })
  }

  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(
      `/api/auth/profile/${id}/edit/`,
      formData,
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      }
    )
    history.push(`/auth/profile/${id}/`)
    
  }
  
  return (
    <div>
      <EditUserForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        handleImageUrl={handleImageUrl}
      />
    </div>
  )  
}

export default EditUserProfile