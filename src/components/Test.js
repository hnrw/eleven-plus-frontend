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
import testService from "../services/testService"
import { setTest } from "../reducers/testReducer"

const Test = ({ manualTest }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const test = useSelector((state) => state.test)

  useEffect(() => {
    if (!manualTest) {
      testService.getTest().then((t) => dispatch(setTest(t)))
    }
  }, [])

  const renderedTest = manualTest || test

  if (!renderedTest) return null

  return (
    <Container>
      {renderedTest.problems.map((problem) => (
        <Problem key={problem.question} problem={problem} />
      ))}
      <div>
        <Button onClick={() => history.push("/results")}>Submit</Button>
      </div>
    </Container>
  )
}

export default Test
