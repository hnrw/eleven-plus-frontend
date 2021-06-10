import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { Redirect, Link, Switch, Route, useHistory } from "react-router-dom"

const Home = () => {
  const history = useHistory()
  document.title = "Waterfront"
  return (
    <Container>
      <Typography variant="h4">Home</Typography>
      <Button onClick={() => history.push("/tests")}>Tests</Button>
    </Container>
  )
}
export default Home
