import React, { useEffect, useState } from "react"
import {
  TextField,
  Container,
  Button,
  Typography,
  Grid,
} from "@material-ui/core"
import _ from "lodash"
import { useDispatch, useSelector } from "react-redux"

import Question from "./Question"
import testsService from "../services/testsService"
import { setTest } from "../reducers/testsReducer"

const Component = () => {
  const dispatch = useDispatch()
  const test = useSelector((state) => state.test)

  useEffect(() => {
    testsService.getTest().then((t) => dispatch(setTest(t)))
  }, [])
  console.log(test)

  const submitTest = () => {
    const marks = test.filter((q) => q.selected === q.correct).length
    const totalMarks = test.length
    const percent = Math.round((100 / totalMarks) * marks)
    console.log(marks)
    console.log(percent)
  }

  if (!test) return null

  return (
    <Container>
      {test.map((q) => (
        <Question q={q} />
      ))}
      <div>
        <Button onClick={submitTest}>Submit</Button>
      </div>
    </Container>
  )
}

export default Component
