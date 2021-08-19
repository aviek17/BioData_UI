
import React, { createContext, useReducer} from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/AboutUs'
import Contact from './Components/Contact'
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'
import Error from "./Components/Error"
import Logout from "./Components/Logout"
import { Route, Switch } from 'react-router-dom'
import {initialState,reducer} from '../src/Reducer/UseReducer'
import 'bootstrap/dist/css/bootstrap.css'

export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  // context api
  
  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </UserContext.Provider>

    </>
  )
}

export default App
