import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { userID } from '../../helpers/auth'

const Checkout = () => {

  const params = useParams()

  const [resource, setResource] = useState(null)
  const [userData, setUserData] = useState('')

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`/api/resources/${params.id}/`)
      setResource(data)
    }
    getData()
  }, [])
  console.log('RESOURCE>>>>', resource)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/auth/profile/${userID()}`)
      setUserData(data)
    }
    getData()
  }, [])

  console.log('USER', userData)

  return (
    <>
      
      <h1 className="headers">CHECKOUT</h1>
      <div className="checkout-form-container">
        <div className="checkout-form"> 
          <div className="details"> 
            <h2>YOUR DETAILS</h2>
            <form className="ui form">
              <div className="ui two column">
                <div className="field">
                  <label>Full Name</label>
                  <input placeholder="John Smith" />
                </div>

                <div className="field">
                  <label>Email</label>
                  <input placeholder="email@email.com" />
                </div>

                <div className="field">
                  <label>Address</label>
                  <input placeholder="123 Main Street" />
                </div>

                <div className="field">
                  <label>Postcode</label>
                  <input placeholder="NY 123" />
                </div>

    
              </div>
            </form>
          </div>

          <div className="payment"> 
            <h2>PAYMENT DETAILS</h2>
            {/* <h3>Accepted Cards</h3>
          <div className="icon-container">
            <i className="cc mastercard" /> */}
            {/* <i className="fa fa-cc-amex" ></i>
            <i className="fa fa-cc-mastercard" ></i>
            <i className="fa fa-cc-discover" ></i> */} 
            {/* </div> */}
            <form className="ui form">
              <div className="ui two column">
                <div className="field">
                  <label>Name on Card</label>
                  <input placeholder="John Smith" />
                </div>

                <div className="field">
                  <label>Card Number</label>
                  <input placeholder="1111-2222-3333-4444" />
                </div>

                <div className="field">
                  <label>Exp Date</label>
                  <input placeholder="MM / YY" />
                </div>

                <div className="field">
                  <label>CVV</label>
                  <input placeholder="123" />
                </div>
              </div>
            </form>
          </div>
          
        </div>

        <div className="buy-btn">
          <Link to={`/auth/profile/${userID()}/orders/`}>
            <button className="ui inverted basic icon right labeled button"><i aria-hidden="true" className="shopping bag icon"></i>BUY</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Checkout
