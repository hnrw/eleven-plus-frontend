import React, { useEffect, useState } from "react"
import {
  Divider,
  TextField,
  Typography,
  Container,
  Button,
} from "@material-ui/core"
import dayjs from "dayjs"
import gradedTestService from "../services/gradedTestService"
import { useDispatch, useSelector } from "react-redux"
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch,
  Route,
  useHistory,
} from "react-router-dom"

const styles = {
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
}
const ResultsList = () => {
  const [testsList, setTestsList] = useState([])
  const user = useSelector((state) => state.user)
  document.title = "Waterfront - Results"

  useEffect(() => {
    if (user) {
      gradedTestService
        .fetchSortedTests(user.token)
        .then((r) => setTestsList(r))
    }
  }, [user])

  return (
    <Container>
      {testsList.length === 0 && (
        <>
          <Typography>Take your first test to see results</Typography>
          <Link to="/home">
            <Button>Home</Button>
          </Link>
        </>
      )}
      {testsList.map((t) => {
        return t.attempts.length > 1 ? (
          <MultipleAttempts test={t} />
        ) : (
          <SingleAttempt test={t} />
        )
      })}
    </Container>
  )
}

const SingleAttempt = ({ test }) => {
  const gt = test.attempts[0]
  return (
    <Link
      to={`/results/${test.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Typography variant="h4">Maths Test {gt.num}</Typography>
      <Typography>{dayjs(gt.date).format("D MMM h:mma")}</Typography>
      <Typography>{gt.percent}%</Typography>
      <Typography>
        {gt.marks}/{gt.total} marks
      </Typography>
      <Divider style={styles.divider} />
    </Link>
  )
}
const MultipleAttempts = ({ test }) => {
  const profile = useSelector((state) => state.profile)
  const attempts = test.attempts.length
  const averagePercent = _.meanBy(test.attempts, (a) => a.percent)
  const averageMarks = _.meanBy(test.attempts, (a) => a.marks)
  const totalMarks = test.attempts[0].total
  return (
    <Link
      // to={`/results/${t.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Typography variant="h4">Maths Test {test.attempts[0].num}</Typography>
      <Typography>
        {profile.firstName} has attempted this test {attempts} times
      </Typography>
      <Typography>{averagePercent}%</Typography>
      <Typography>
        {averageMarks}/{totalMarks} marks
      </Typography>
      <Divider style={styles.divider} />
    </Link>
  )
}
export default ResultsList
