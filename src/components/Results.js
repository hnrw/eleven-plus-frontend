import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import gradedTestService from "../services/gradedTestService"

import Answers from "./Answers"

const Results = () => {
  const [gradedTest, setGradedTest] = useState(nul)

  const { id } = useParams()
  useEffect(() => {
    gradedTestService
      .getTest({ token: user.token, testId: id })
      .then((gt) => setGradedTest(gt))
  }, [])

  return (
    <>
      <Typography>{`${marks}/${totalMarks}`}</Typography>
      <Typography>{percent}%</Typography>
      <Answers />
    </>
  )
}

export default Results
