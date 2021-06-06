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

const Component = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const test = useSelector((state) => state.test)

  useEffect(() => {
    testService.getTest().then((t) => dispatch(setTest(t)))
  }, [])

  if (!test) return null

  return (
    <Container>
      {test.problems.map((problem) => (
        <Problem key={problem.question} problem={problem} />
      ))}
      <div>
        <Button onClick={() => history.push("/results")}>Submit</Button>
      </div>
    </Container>
  )
}

export default Component
