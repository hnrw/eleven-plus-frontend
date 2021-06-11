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
  useParams,
} from "react-router-dom"
import _ from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"

import Problem from "./Problem"
import Timer from "./Timer"
import testService from "../services/testService"
import gradedTestService from "../services/gradedTestService"
import answerService from "../services/answerService"
import testSessionService from "../services/testSessionService"
import { setTest } from "../reducers/testReducer"

const Test = ({ manualTest }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const test = useSelector((state) => state.test)
  const user = useSelector((state) => state.user)
  const testId = useParams().id
  document.title = "Waterfront"

  useEffect(() => {
    if (!manualTest) {
      testService.getTest(testId).then((t) => dispatch(setTest(t)))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("waterfrontTest", JSON.stringify(test))
  }, [test])

  const renderedTest = manualTest || test

  const handleSubmit = async () => {
    const data = {
      testId: test.id,
      answers: test.problems.map((p) => ({
        selected: p.selected,
        problemId: p.id,
      })),
      token: user.token,
    }
    try {
      const gradedTest = await gradedTestService.submitTest(data)
      history.push(`/results/${gradedTest.id}`)
    } catch (err) {
      toast.error("sorry, there was an unexpected error")
    }
  }

  if (!renderedTest) return null

  return (
    <Container>
      {/* <Timer mins={1} /> */}
      {renderedTest.problems.map((problem) => (
        <Problem key={problem.question} problem={problem} />
      ))}
      <div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Container>
  )
}

export default Test
