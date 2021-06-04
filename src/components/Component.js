import React, { useEffect, useState } from "react"
import {
  TextField,
  Container,
  Button,
  Typography,
  Grid,
} from "@material-ui/core"
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch,
  Route,
  useHistory,
} from "react-router-dom"
import _ from "lodash"
import { useDispatch, useSelector } from "react-redux"

import Problem from "./Problem"
import testsService from "../services/testsService"
import { setTest } from "../reducers/testsReducer"

const Component = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const test = useSelector((state) => state.test)

  useEffect(() => {
    testsService.getTest().then((t) => dispatch(setTest(t)))
  }, [])
  console.log(test)

  if (!test) return null

  return (
    <Container>
      {test.map((problem) => (
        <Problem key={problem.question} problem={problem} />
      ))}
      <div>
        <Button onClick={() => history.push("/results")}>Submit</Button>
      </div>
    </Container>
  )
}

export default Component
