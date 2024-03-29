import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { ImageUploadField } from '../components/ImageUploadField'


const Register = () => {
  const [confirmMessage, setConfirmMessage] = useState('')

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    profileImage: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const [errors, setErrors] = useState({
    email: '',
    fullName: '',
    password: '',
    username: '',
    password_confirmation: '',
  })
  console.log(errors, setErrors)
  // console.log('ERROR', errors.response)

  const handleImageUrl = url =>{
    setFormData({ ...formData, profilePic: url })
  }
  const history = useHistory()

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    console.log(event.target.value)
    setFormData(newFormData)
  }
 
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('/api/auth/register/', formData)
      window.localStorage.setItem('token', response.data.token)
      setTimeout(() => {
        history.push('/auth/login')
      }, 2000)
      
    } catch (err) {
      console.log(err.response)
      setErrors(err.response.request.response)
    }
  }

  const handleRegisterConfirmation = (event) => {
    const confirm = event.target.value
    setConfirmMessage(confirm)
  }

  return (
    <>

      <h1 className="headers">Sign up</h1>
      <div className="register-container">
        <div className="register-info">
          <h2 className="headers">Ready to get your habits back on track?</h2>

        </div>

        <div className="ui container placeholder segment register-form"> 
          <div className="ui two column ">
            <div className="column">
              <form onSubmit={handleSubmit} className="ui form">
                <div className="field">
                  <label>Full Name</label>
                  <input
                    className="input"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input
                    className="input"
                    type="email"
                    placeholder="email@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label>Username</label>
                  <input
                    className="input"
                    placeholder="Username (for display)"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label>Profile Image</label>
                  <ImageUploadField
                    name="profilePic"
                    value={formData.profilePic}
                    handleImageUrl={handleImageUrl}
                  />          
                </div>
                <div className="field">
                  <label>Password</label>
                  <input
                    className="input"
                    type="password"
                    placeholder="Password must be at least 8 characters"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label>Password Confirmation</label>
                  <input
                    type="password"
                    placeholder="Password Confirmation"
                    name="password_confirmation"
                    value={formData.passwordConfirmation}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                </div>
                <button onClick={handleRegisterConfirmation} type="submit" value="Registration successful!" className="ui icon right labeled button"><i aria-hidden="true" className="check right icon"></i> Sign me up!</button><br/>
                <span className="registerConfirmBox"><p>{confirmMessage}</p></span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register