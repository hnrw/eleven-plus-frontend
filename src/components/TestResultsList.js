import React, { useEffect, useState } from "react"
import {
  Divider,
  TextField,
  Typography,
  Container,
  Button,
  Paper,
} from "@material-ui/core"
import dayjs from "dayjs"
import _ from "lodash"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import LineProgress from "./stats/LineProgress"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import gradedTestService from "../services/gradedTestService"

const styles = {
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  heading: {
    marginBottom: 10,
  },
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
  retry: {
    marginTop: 10,
  },
}

const TestResultsList = () => {
  document.title = "Waterfront - Results"
  const [testsList, setTestsList] = useState([])
  const user = useSelector((state) => state.user)
  const { id } = useParams()
  const history = useHistory()

  // this should fetch just the correct test from the id
  // currently fetches them all, then filters. idk why
  useEffect(() => {
    if (user) {
      gradedTestService
        .fetchSortedTests(user.token)
        .then((r) => setTestsList(r))
    }
  }, [user])

  if (testsList.length === 0) {
    return null
  }

  const test = testsList.filter((t) => t.testId === id)[0]
  const { attempts } = test

  const lineEntry = attempts.map((a, i) => ({
    x: i + 1,
    y: a.percent,
  }))

  const data = [
    {
      id: "maths",
      color: "hsl(80, 70%, 50%)",
      data: lineEntry,
    },
  ]

  const averagePercent = Math.round(_.meanBy(test.attempts, (a) => a.percent))
  const averageMarks = Math.round(_.meanBy(test.attempts, (a) => a.marks))
  const totalMarks = test.attempts[0].total

  return (
    <Container>
      <Typography style={styles.heading} variant="h4">
        Maths Test {test.num}
      </Typography>

      <Container style={styles.root}>
        <Paper style={styles.paper}>
          <Typography style={styles.centerText} variant="h6">
            Your average on this test
          </Typography>
          <Typography style={styles.centerText} variant="h3">
            {averagePercent}%
          </Typography>
          <Typography style={{ textAlign: "center" }}>
            {`${averageMarks}/${totalMarks}`} marks
          </Typography>
          <Button
            variant="contained"
            onClick={() => history.push(`/tests/${test.testId}`)}
            style={styles.retry}
            fullWidth
          >
            Retry test
          </Button>
        </Paper>
      </Container>

      {attempts.map((a, i) => (
        <Link
          to={`/results/${a.id}`}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Typography variant="h6">Attempt {i + 1}</Typography>
          <Typography>{dayjs(a.date).format("D MMM h:mma")}</Typography>
          <Typography>{a.percent}%</Typography>
          <Typography>
            {a.marks}/{a.total} marks
          </Typography>
          <Divider style={styles.divider} />
        </Link>
      ))}
      <LineProgress data={data} />
    </Container>
  )
}

export default TestResultsList
