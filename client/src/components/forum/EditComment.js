import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../helpers/auth'
import EditCommentForm from './EditCommentForm'

const EditComment = () => {
  const history = useHistory()
  const params = useParams()
  // console.log(params)
  // const { id, commentId } = params

  const [formData, setFormData] = useState({
    text: '',
    category: `${params.id}`,
  })

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/comments/')
      setFormData(response.data)
    }
    getData()
  }, [])
  console.log('FORMDATA', formData)


  const handleDelete = async () => {
    await axios.delete(`/api/comments/${params.id}/`, {
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    })
    history.push('/categories/community/')
  }


  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    
    setFormData(newFormData)
    console.log(event.target)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(
      `/api/comments/${params.id}/`,
      formData,
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      }
    )
    history.push('/categories/community/')
  }

  if (!formData) return ''
  console.log('FORM DATA>>>>>>>', formData)

  return (
    <section className="section">
      <h1 className="header-recc-top">Edit your comment</h1>
      <div className="ui container raised  segment editComment">
        <EditCommentForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
        <br/>
    
        <p className="header-comment"> <button onClick={handleDelete} className="ui red button"> <i className="trash alternate icon"/>Delete Comment </button> </p>
   
      </div>


    </section>
  )
}

export default EditComment