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

  if (!test) return null

  return (
    <Container>
      {test.map((q) => (
        <Question q={q} />
      ))}
      <div>
        <Button>Submit</Button>
      </div>
    </Container>
  )
}

export default Component
