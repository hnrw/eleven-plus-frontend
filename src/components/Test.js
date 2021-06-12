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

const styles = {
  heading: {
    marginBottom: 20,
  },
}
const Test = ({ manualTest }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [testSession, setTestSession] = useState(null)
  const test = useSelector((state) => state.test)
  const user = useSelector((state) => state.user)
  const testId = useParams().id
  document.title = "Waterfront"

  useEffect(() => {
    if (!manualTest) {
      testService.getTest(testId).then((t) => dispatch(setTest(t)))
    }
  }, [])

  // useEffect(() => {
  //   window.localStorage.setItem("waterfrontTest", JSON.stringify(test))
  // }, [test])

  useEffect(() => {
    const session = async () => {
      const currentSession = await testSessionService.getTestSession(user.token)
      if (currentSession === "no session exists") {
        const newSession = await testSessionService.createTestSession({
          token: user.token,
          testId: test.id,
        })
        setTestSession(newSession)
      } else {
        setTestSession(currentSession)
      }
    }
    if (user && test) {
      session()
    }
  }, [user, test])

  const renderedTest = manualTest || test

  console.log(testSession)

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

  if (!renderedTest || !testSession) return null

  const end = new Date(testSession.start + 45 * 60 * 1000)

  if (Date.now > end) {
    handleSubmit()
  }

  return (
    <Container>
      {/* <Timer mins={1} /> */}
      <div style={styles.heading}>
        <Typography>
          You have until <b>{end.toLocaleTimeString("en-US")}</b> to complete
          this test.
        </Typography>
      </div>
      {renderedTest.problems.map((problem) => (
        <Problem key={problem.question} problem={problem} />
      ))}
      <div>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </Container>
  )
}

export default Test
