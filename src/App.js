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
import TestResultsList from "./components/TestResultsList"
import TestForm from "./components/TestForm"
import Home from "./components/Home"
import Test from "./components/Test"
import Results from "./components/Results"
import Footer from "./components/Footer"
import SelectPlan from "./components/SelectPlan"
import LandingPage from "./components/LandingPage"
import Header from "./components/Header"
import Stats from "./components/stats/Stats"

import LoginForm from "./components/account/LoginForm"
import RegisterForm from "./components/account/RegisterForm"
import RegisterFormSecret from "./components/account/RegisterFormSecret"
import ForgotPassword from "./components/account/ForgotPassword"
import ResetPassword from "./components/account/ResetPassword"
import ProfileForm from "./components/account/ProfileForm"
import PrivacyPolicy from "./components/legal/PrivacyPolicy"
import TermsAndConditions from "./components/legal/TermsAndConditions"

import { setMobile } from "./reducers/mobileReducer"
import { setProfile } from "./reducers/profileReducer"
import { setStripe } from "./reducers/stripeReducer"

import profileService from "./services/profileService"
import userService from "./services/userService"

import autoLogin from "./helpers/autoLogin"
import incompleteProfile from "./helpers/incompleteProfile"
import incompleteStripe from "./helpers/incompleteStripe"

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const profile = useSelector((state) => state.profile)
  const stripe = useSelector((state) => state.stripe)

  useEffect(() => {
    autoLogin(dispatch)
  }, [dispatch])

  useEffect(() => {
    if (window.innerWidth < 500) {
      dispatch(setMobile())
    }

    if (user) {
      profileService.getProfile(user.id).then((p) => dispatch(setProfile(p)))
      userService.getStripe(user.token).then((s) => dispatch(setStripe(s)))
    }
  }, [dispatch, user])

  if (stripe && incompleteStripe(stripe)) {
    return (
      <Router>
        <div style={{ minHeight: "100vh", position: "relative" }}>
          <div style={{ paddingBottom: "2.5rem" }}>
            <Header />
            <SelectPlan />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
  const subCancelled = (stripe) => {
    return stripe.subscription?.status === "canceled"
  }

  if (stripe && subCancelled(stripe)) {
    return (
      <Router>
        <div style={{ minHeight: "100vh", position: "relative" }}>
          <div style={{ paddingBottom: "2.5rem" }}>
            <Header />
            <SelectPlan canceled />
            <Footer />
          </div>
        </div>
      </Router>
    )
  }

  return (
    <Router>
      <div style={{ minHeight: "100vh", position: "relative" }}>
        <div style={{ paddingBottom: "2.5rem" }}>
          <MyToaster />
          <Header />
          {profile && incompleteProfile(profile) && <ProfileForm />}
          <Switch>
            <Route path="/results/test/:id">
              <TestResultsList />
            </Route>
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
            <Route path="/test">
              <RegisterFormSecret />
            </Route>
            <Route path="/privacy">
              <PrivacyPolicy />
            </Route>
            <Route path="/terms">
              <TermsAndConditions />
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
