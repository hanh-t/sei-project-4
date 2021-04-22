import React, { useState } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../helpers/auth'
import { useHistory } from 'react-router-dom'

const ResourceWishlist = ({ userData, resource }) => {
  // console.log('USER', userData)

  const  history = useHistory()
  // const [confirmMessage, setConfirmMessage] = useState('')
  
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

  const handlePurchase = () => {
    // console.log('CLICK', event.target.value)
    history.push(`/resources/${resource.id}/cart/`)
    location.reload()
  }

  // const handleRegisterConfirmation = (event) => {
  //   const confirm = event.target.value
  //   setConfirmMessage(confirm)
  // }

  return (
    <div className="wishlist-btn">
      <button className="ui inverted basic button" onClick={ handleWishlist} value="Added to your wishlist!">Save for later</button>
      <button className="ui inverted basic button" onClick={ handlePurchase} value="Added to your cart!">Buy this item</button>
      
    </div>
  )
}

export default ResourceWishlist