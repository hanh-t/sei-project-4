import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './auth/Register'
import Category from './components/Category'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/register">
          <Register />
        </Route>
        <Route  path="/categories">
          <Category />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
