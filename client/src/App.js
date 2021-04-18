import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './auth/Register'
import Category from './components/Category'
import HabitForm from './components/HabitForm'
import UserProfile from './auth/UserProfile'
import Login from './auth/Login'
// import MainTracker from './components/MainTracker'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/auth/register">
          <Register />
        </Route>
        <Route  path="/auth/login">
          <Login />
        </Route>
        <Route  exact path="/auth/profile/:id">
          <UserProfile />
        </Route>
        <Route  path="/categories">
          <Category />
        </Route>
        <Route  path="/habits">
          <HabitForm />
        </Route>
        {/* <Route  path="/habits">
          <HabitForm />
        </Route> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
