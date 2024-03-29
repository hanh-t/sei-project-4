import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ResourceWishlist from './ResourceWishlist'
import { userIsAuthenticated } from '../../helpers/auth'


const ResourceShow = ({ userData }) => {
  const params = useParams()

  const [resource, setResource] = useState(null)

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`/api/resources/${params.id}/`)
      setResource(data)
    }
    getData()
  }, [])
  console.log('RESOURCE', resource)
  if (!resource) return ''


  return (
    <>
      <h1 className="headers">More details</h1>
      <div className="details-container">
        <div className="resource-detail">
          <h2 className="headers">{resource.title}</h2>
          {resource.resourceType === 'Video' ?

            ( resource.title === 'Pointing and Calling Japanese Safety Standard' ? 
              // <div className="vid-detail">
              <div className="embedded-vid">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9LmdUz3rOQU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h3>Pointing and calling is a safety standard that started with Japanese train operators but now is widely used in industry. The idea is that whenever you confirm something, you not only look at it, but also point at it and call out your observation.</h3>
              </div>
              : 
              <div className="embedded-vid">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k2h2lvhzMDc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h3>Ed Catmull, cofounder of Pixar, on how they make great movies: <br />

              Initially, the films we put together, they are a mess. It is like everything else in life—the first time you do it, it is a mess. Sometimes labeled ... a failure ... but that is not even the right word to use. It is just like, you get the first one out, you learn from it, and the only failure is if you do not learn from it, if you do not progress.</h3>
              </div>
            )
            :
            <h2 className="headers">How to view/where to find: {resource.url}</h2>
          }
          { userIsAuthenticated() ? 
            <h3 className="headers">Our cost: {resource.price} points</h3>
            :
            <h3 className="headers">Login to see our price</h3>
          }
        
        </div>
        <ResourceWishlist 
          userData = {userData}
          resource = {resource}
        />
      </div>
    </>
  )
}

export default ResourceShow