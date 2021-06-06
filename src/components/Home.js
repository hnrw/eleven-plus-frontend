import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch,
  Route,
  useHistory,
} from "react-router-dom"

const Home = () => {
  const history = useHistory()
  return (
    <>
      <Typography variant="h2">Home</Typography>
      <Button onClick={() => history.push("/tests")}>Tests</Button>
    </>
  )
}
export default Home
