import React, { useState, useEffect } from 'react'
// import ResourceCard from './ResourceCard'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import Checkout from './Checkout'

const Cart = () => {

  const params = useParams()
  const history = useHistory()

  const [resource, setResource] = useState(null)

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`/api/resources/${params.id}/`)
      setResource(data)
    }
    getData()
  }, [])
  console.log('RESOURCE', resource)

  const handleCancel = () => {
    history.push('/resources/')
    location.reload()
  }
 

  if (!resource) return ''


  return (
    <>
      <div>
        <h1>CART</h1>
      </div>
      <div className="whole-page-cart">
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
          {/* <Link to={`/api/resources/${params.id}/cart/checkout/`}> */}
          {/* <a className="down-link" href="#donations"><i aria-hidden="true" className="angle double down link huge icon" ></i></a> */}
          <a href="#checkout" className="totalRow ui inverted basic button">CHECKOUT</a>
          {/* </Link> */}

          <button onClick={handleCancel} className="ui inverted basic button">Cancel</button>
        </div>

        <div className="middle-page">
        </div>

        <div className="checkout">
          <a id="checkout"></a>
          <Checkout />
        </div>
      </div>
    </>
  )
}

export default Cart