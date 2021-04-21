import React, { useState, useEffect } from 'react'
// import ResourceCard from './ResourceCard'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Cart = () => {

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
      <div>
        <h1>CART</h1>
      </div>
      <div className="cart">
    
        <ul className="cartWrap">
          
          <li className="items even">
            
            <div className="infoWrap"> 
              <div className="cartSection">
                
                <p className="itemNumber">#QUE-007544-002</p>
                <h3>{resource.title}</h3>
            
                <p> <input type="text"  className="qty" placeholder="1"/> x {resource.price} (points) </p>
            
                <p className="stockStatus"> In Stock</p>
              </div>  
        
            
              
              <div classnamename="cartSection-removeWrap">
                <a href="#" classnamename="remove">x</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="subtotal">
        <ul>
          <li className="totalRow"><span className="label"> Subtotal</span><span className="value"> 45 points</span></li>
      
          <li className="totalRow"><span className="label"> Shipping</span><span className="value"> £5.00</span></li>
      
          <li className="totalRow final"><span className="label">Total</span><span className="value"> £5.00</span></li>
          
        </ul>
        <Link to={`/api/resources/${params.id}/checkout/`}>
          <button className="totalRow ui inverted basic button">CHECKOUT</button>
        </Link>
      </div>
    </>
  )
}

export default Cart