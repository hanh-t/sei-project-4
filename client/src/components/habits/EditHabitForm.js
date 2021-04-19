import React from 'react'

const EditHabitForm = ({ formData, handleChange, handleSubmit }) => {
  console.log('FORM', formData)
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
        <button type="submit">Save changes</button> 
      </form>
    </>
  )
}

export default EditHabitForm