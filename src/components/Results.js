import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import gradedTestService from "../services/gradedTestService"
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch,
  Route,
  useHistory,
  useParams,
} from "react-router-dom"

import Answers from "./Answers"

const Results = () => {
  const [gradedTest, setGradedTest] = useState(null)
  const user = useSelector((state) => state.user)

  const { id } = useParams()

  useEffect(() => {
    console.log(user)
    if (user) {
      gradedTestService
        .getTest({ token: user.token, testId: id })
        .then((gt) => setGradedTest(gt))
    }
  }, [user])

  if (!gradedTest) return null

  return (
    <>
      <Typography>{`${gt.marks}/${gt.total}`}</Typography>
      <Typography>{gt.percent}%</Typography>
      <Answers gradedProblems={gradedTest.gradedProblems} />
    </>
  )
}

export default Results
