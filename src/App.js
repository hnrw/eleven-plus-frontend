import React from "react"
import { Container } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import Component from "./components/Component"
import Results from "./components/Results"

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
      <Switch>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/">
          <Component />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
