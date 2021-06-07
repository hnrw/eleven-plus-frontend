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
import { toast } from "react-hot-toast"

import Problem from "./Problem"
import testService from "../services/testService"
import answerService from "../services/answerService"
import { setTest } from "../reducers/testReducer"

const Test = ({ manualTest }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const test = useSelector((state) => state.test)
  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (!manualTest) {
      testService.fetchTests().then((t) => dispatch(setTest(t[0])))
    }
  }, [])

  const renderedTest = manualTest || test
  console.log(renderedTest)

  const handleSubmit = async () => {
    // try {
    //   await testproblems.reduce(async (memo, problem) => {
    //     await memo
    //     await submitAnswer(problem)
    //   }, undefined)
    //   toast.success("done")
    // } catch (err) {
    //   toast.error("master err")
    // }
    await test.problems.reduce(async (memo, problem) => {
      await memo

      await submitAnswer(problem)
    }, undefined)
  }

  const submitAnswer = async (problem) => {
    const { id, selected } = problem

    answerService.submitAnswer({ selected, problemId: id, token: user.token })
    // try {
    //   answerService.submitAnswer({ selected, problemId: id })
    // } catch (err) {
    //   toast.error("error")
    // }
  }

  if (!renderedTest) return null

  return (
    <Container>
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
