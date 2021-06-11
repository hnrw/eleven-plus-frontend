import React, { useEffect, useState } from "react"
import {
  Paper,
  TextField,
  Typography,
  Container,
  Button,
} from "@material-ui/core"
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

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    paddingRight: 90,
    paddingLeft: 90,
    paddingTop: 20,
    paddingBottom: 20,
  },
  centerText: {
    textAlign: "center",
  },
}

const Results = () => {
  const [gt, setGt] = useState(null)
  const user = useSelector((state) => state.user)
  document.title = "Waterfront - Results"

  const { id } = useParams()

  useEffect(() => {
    if (user) {
      gradedTestService
        .getTest({ token: user.token, testId: id })
        .then((gt) => setGt(gt))
    }
  }, [user])

  if (!gt) return null

  return (
    <Container style={styles.root}>
      <Paper style={styles.paper}>
        <Typography style={styles.centerText} variant="h6">
          You scored
        </Typography>
        <Typography style={styles.centerText} variant="h3">
          {gt.percent}%
        </Typography>
        <Typography style={{ textAlign: "center" }}>
          {`${gt.marks}/${gt.total}`} marks
        </Typography>
      </Paper>
      <Answers gradedProblems={gt.gradedProblems} />
    </Container>
  )
}

export default Results
