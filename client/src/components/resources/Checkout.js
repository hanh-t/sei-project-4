import React from 'react'

const Checkout = () => {

  return (
    <>
      <h1>CHECKOUT</h1>
      <div className="ui container placeholder segment register-form"> 
        <div className="ui two column ">
          <div className="column">
            <form  className="ui form">
              <div className="field">
                <label>First Name</label><input placeholder="First Name"/>
              </div>
              <button  type="submit" value="Registration successful!" className="ui basic submit button"> Sign me up!</button><br/>
              {/* <span className="registerConfirmBox"><p>{confirmMessage}</p></span> */}
            </form>
          </div>
        </div>
   
      </div>
    </>
  )
}

export default Checkout