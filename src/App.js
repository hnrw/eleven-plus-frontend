import React from "react"
import { Container } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import Component from "./components/Component"
import Results from "./components/Results"
import LandingPage from "./components/LandingPage"
import Header from "./components/Header"
import LoginForm from "./components/account/LoginForm"
import RegisterForm from "./components/account/RegisterForm"
import ForgotPassword from "./components/account/ForgotPassword"
import ResetPassword from "./components/account/ResetPassword"

const App = () => {
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
        <Route path="/landing">
          <LandingPage />
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
        <Route path="/">
          <Component />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
