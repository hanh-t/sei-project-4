import React, { useState } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../helpers/auth'

const ResourceWishlist = ({ userData, resource }) => {
  console.log('USER', userData)
  if (!userData) return ''  

  const [wishlist] =  useState({
    wishlist: [...userData.wishlist, resource.id],
  })


  if (!wishlist) return ''

  console.log('WISHLIST', wishlist)

  const handleWishlist = async (event) =>{
    event.preventDefault()
    await axios.put(
      `/api/auth/profile/${userData.id}/edit/`,
      wishlist,
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      }
    )
    
  }

  return (
    <div>
      <button className="ui inverted basic button" onClick={ handleWishlist} value="Added to your wishlist!">Save for later</button>
    </div>
  )
}

export default ResourceWishlist