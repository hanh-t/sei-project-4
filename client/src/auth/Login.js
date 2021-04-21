import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'



const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState()

  const history = useHistory()

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('/api/auth/login/', formData)
      window.localStorage.setItem('token', response.data.token)
      history.push('/habits/intro/')
      location.reload()
    } catch (err) {
      setErrors('Unauthorised')
    }
  }

  return (
    <>
      {/* <div className="login-page"> */}
      <h1 className="headers">Login</h1>
      <div className="ui container placeholder segment login-form">
        <div className="ui two column ">
          <div className="column">
            <form onSubmit={handleSubmit} className="ui form">
              <div className="field">
                <label>Email</label>
                <div className="ui left icon input">
                  <input
                    className="input "
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                  < i className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                  />
                  <i className="lock icon"></i>
                </div>
              </div>
              
              <button type="submit" className="ui animated button"><div className="visible content">Enter</div><div className="hidden content"><i aria-hidden="true" className="sign-in icon"></i></div> </button>
              <div className="field">
                { errors && 
                <div className="subtitle is-6">Access unauthorised. Please try re-entering your credentials.</div>
                }
              </div>
 
            </form>
          </div>
          
        </div>

      </div>
        
      
      {/* </div> */}
    </>
  )
}

export default Login
