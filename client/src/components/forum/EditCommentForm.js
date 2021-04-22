import React from 'react'

const EditCommentForm = ({ handleChange, handleSubmit, formData }) => {

  return (
    <div>
      <form onSubmit={handleSubmit} className="ui reply form edit-habit">
        <div className="field " >
          <label className="label">Text</label>
          <input
            placeholder="Edit your comment"
            name="text"
            value={formData.text}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label className="label">Category</label>
          <textarea
            className="input"
            placeholder="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div className="ui blue basic labeled submit icon button" onClick={handleSubmit}>
          <i className="paper plane outline icon"></i> Submit
        </div>
      </form>
    </div>
  )
}

export default EditCommentForm