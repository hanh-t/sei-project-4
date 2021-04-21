import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './auth/Register'
import CategoryIndex from './components/categories/CategoryIndex'
import UserProfile from './auth/UserProfile'
import Login from './auth/Login'
import EditUserProfile from './auth/EditUserProfile'
import MainTracker from './components/habits/MainTracker'
import ResourceIndex from './components/resources/ResourceIndex'
// import ResourceShow from './components/resources/ResourceShow'
import UserData from './components/resources/UserData'
import AddHabitForm from './components/habits/AddHabitForm'
import EditHabit from './components/habits/EditHabit'
import Forum from './components/forum/Forum'
import EditComment from './components/forum/EditComment'
import IntroTracker from './components/habits/IntroTracker'
import Cart from './components/resources/Cart'
import Checkout from './components/resources/Checkout'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route    path="/auth/profile/:id/edit">
          <EditUserProfile />
        </Route>
        <Route   exact path="/auth/profile/:id">
          <UserProfile />
        </Route>
        <Route  path="/auth/register">
          <Register />
        </Route>
        <Route  path="/auth/login">
          <Login />
        </Route>
       
        
        
        <Route exact path="/categories/community">
          <Forum />
        </Route>
        <Route  exact path="/categories">
          <CategoryIndex />
        </Route>
        
        <Route exact path="/categories/:id">
          <AddHabitForm />
        </Route>
        <Route path="/comments/:id">
          <EditComment />
        </Route>
        
        <Route  path="/habits/intro">
          <IntroTracker />
        </Route>
        <Route  exact path="/habits/:id">
          <EditHabit />
        </Route>
        <Route  path="/habits">
          <MainTracker />
        </Route>
        
        <Route  exact path="/resources">
          <ResourceIndex />
        </Route>
        <Route  exact path="/resources/:id">
          <UserData />
        </Route>
        <Route  exact path="/resources/:id/cart">
          <Cart />
        </Route>
        <Route  exact path="/resources/:id/checkout">
          <Checkout />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
