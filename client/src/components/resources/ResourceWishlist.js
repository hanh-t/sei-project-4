import React from 'react'
import axios from 'axios'

const ResourceWishlist = ({ userData }) => {
  console.log('USER', userData)
  if (!userData) return ''  

  // const [wishlist] =  useState({
  //   wishList: [...userData.wishlist, resource.id],
  // })


  // if (!wishlist) return ''

  const handleWishlist = async () =>{
    await axios.put(
      `/api/auth/profile/${userData.id}`
      // wishlist
    )
  }

  return (
    <div>
      <button className="ui basic blue button" onClick={ handleWishlist} value="Added to your wishlist!">Add to wishlist</button>
    </div>
  )
}

export default ResourceWishlist