import React from 'react'

const EditHabitForm = ({ formData, handleChange, handleSubmit }) => {

  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="field">
          <label>Habit</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Frequency</label>
          <input
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
          />
        </div>    
      </form>
    </>
  )
}

export default EditHabitForm