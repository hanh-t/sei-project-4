import React from 'react'
import { useHistory } from 'react-router-dom'

const EditHabitForm = ({ formData, handleChange, handleSubmit }) => {
  const history = useHistory()

  const handleCancel = () => {
    history.push('/habits/')
    window.location.reload()
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="field">
          <label>Habit</label>
          <input
            placeholder="Habit"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Frequency</label>
          <input
            placeholder="Daily"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
          />
        </div>   
        <button type="submit" className="ui basic inverted button">Save changes</button><button onClick={handleCancel} className="ui basic inverted button">Cancel</button> 

      </form>
    </>
  )
}

export default EditHabitForm