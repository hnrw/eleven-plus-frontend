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
import { Link } from "react-router-dom"
import TestLineProgress from "./stats/TestLineProgress"
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
}

const TestResultsList = () => {
  document.title = "Waterfront - Results"
  const [testsList, setTestsList] = useState([])
  const user = useSelector((state) => state.user)
  const { id } = useParams()

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

  return (
    <Container>
      <Typography style={styles.heading} variant="h4">
        Maths Test {test.num}
      </Typography>

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
      <TestLineProgress data={data} />
    </Container>
  )
}

export default TestResultsList
