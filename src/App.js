import React, { useEffect } from "react"
import { Container } from "@material-ui/core"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"

import autoLogin from "./helpers/autoLogin"

import Component from "./components/Component"
import Results from "./components/Results"
import LandingPage from "./components/LandingPage"
import Header from "./components/Header"
import Stats from "./components/stats/Stats"

import LoginForm from "./components/account/LoginForm"
import RegisterForm from "./components/account/RegisterForm"
import ForgotPassword from "./components/account/ForgotPassword"
import ResetPassword from "./components/account/ResetPassword"

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    autoLogin(dispatch)
  }, [])

  return (
    <Router>
      <div>
        <Toaster
          toastOptions={{
            style: {
              fontFamily: "Roboto",
            },
          }}
        />
      </div>
      <Header />
      <Switch>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
        <Route path="/signup">
          <RegisterForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/reset-password/:token/:id">
          <ResetPassword />
        </Route>
        <Route path="/home">
          <Component />
        </Route>
        <Route path="/">
          {user && <Redirect to="/home" />}
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
