import React, { useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import MyToaster from "./components/MyToaster"
import Admin from "./components/Admin"
import ResultsList from "./components/ResultsList"
import TestForm from "./components/TestForm"
import Home from "./components/Home"
import Test from "./components/Test"
import Results from "./components/Results"
import Footer from "./components/Footer"
import LandingPage from "./components/LandingPage"
import Header from "./components/Header"
import Stats from "./components/stats/Stats"

import LoginForm from "./components/account/LoginForm"
import RegisterForm from "./components/account/RegisterForm"
import ForgotPassword from "./components/account/ForgotPassword"
import ResetPassword from "./components/account/ResetPassword"

import { setMobile } from "./reducers/mobileReducer"

import autoLogin from "./helpers/autoLogin"

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    autoLogin(dispatch)
  }, [dispatch])

  useEffect(() => {
    if (window.innerWidth < 500) {
      dispatch(setMobile())
    }
  }, [dispatch])

  return (
    <Router>
      <div style={{ minHeight: "100vh", position: "relative" }}>
        <div style={{ paddingBottom: "2.5rem" }}>
          <MyToaster />
          <Header />
          <Switch>
            <Route path="/results/:id">
              <Results />
            </Route>
            <Route path="/results">
              <ResultsList />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
            <Route path="/tests/:id">
              <Test />
            </Route>
            <Route path="/admin/new-test">
              <TestForm />
            </Route>
            <Route path="/admin">
              <Admin />
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
              <Home />
            </Route>
            <Route path="/">
              {user && <Redirect to="/home" />}
              <LandingPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
