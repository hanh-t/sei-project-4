import React from 'react'
import { ImageUploadField } from '../components/ImageUploadField'
import { useHistory, useParams } from 'react-router-dom'

const EditUserForm = ({ handleChange, handleImageUrl, handleSubmit, formData }) => {
  const history = useHistory()
  const params = useParams()

  const handleCancel = () => {
    history.push(`/auth/profile/${params.id}`)
    window.location.reload()
  }

  return (



    <>
      <h1 className="register-form-header">Edit your Account</h1>
      <div className="ui container raised  segment registerFrom">
        <div className="register-component">
          <form onSubmit={handleSubmit} className="ui form">
            <div className="field">
              <label>Full Name</label>
              <input
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                placeholder="email@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>        
            <div className="field">
              <label>Username</label>
              <input
                placeholder="Username (for display)"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Profile Picture</label>
              <ImageUploadField
                name="profileImage"
                value={formData.profileImage}
                handleImageUrl={handleImageUrl}
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
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
                value={formData.password_confirmation}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button> <button onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      </div>
    </>
  )
}


export default EditUserForm