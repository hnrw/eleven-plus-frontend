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
import dayjs from "dayjs"
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
  submit: {
    marginBottom: 30,
    width: 300,
  },
  flex: { display: "flex", flexDirection: "column", alignItems: "center" },
}

const Test = ({ manualTest }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [testSession, setTestSession] = useState(null)
  const [submitting, setSubmitting] = useState(false)
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

      if (currentSession.user === user.id) {
        setTestSession(currentSession)
      } else {
        const newSession = await testSessionService.createTestSession({
          token: user.token,
          testId: test.id,
        })
        setTestSession(newSession)
      }
    }
    if (user && test && !testSession) {
      // this usually causes a Model validation error
      // I think it's caused when a new session is posted, and then
      // a new get request gets sent immediately after

      // I can't figure out why the useEffect is firing twice
      // from what I can tell it should just set the state using the response
      // from createTestSession

      // but I don't think it crashes the program, so I'm going to leave it like this
      session()
    }
  }, [user, test])

  const renderedTest = manualTest || test

  const handleSubmit = async () => {
    if (window.confirm("Are you sure you're ready to submit your test?")) {
      const data = {
        testId: test.id,
        answers: test.problems.map((p) => ({
          selected: p.selected,
          problemId: p.id,
        })),
        token: user.token,
      }
      try {
        setSubmitting(true)
        toast.success("Submitting test...")
        const gradedTest = await gradedTestService.submitTest(data)
        setSubmitting(false)
        history.push(`/results/${gradedTest.id}`)
      } catch (err) {
        toast.error("sorry, there was an unexpected error")
      }
    }
  }

  if (!renderedTest || !testSession) return null
  renderedTest.problems = _.sortBy(renderedTest.problems, (p) => p.num)

  const end = dayjs(testSession.start).add(45, "minutes")
  const endFormat = end.format("h:mm:ss a")

  if (dayjs() > end) {
    handleSubmit()
  }

  return (
    <Container maxWidth="md">
      {/* <Timer mins={1} /> */}
      <div style={styles.heading}>
        <Typography>
          You have until <b>{endFormat}</b> to complete this test.
        </Typography>
        <Typography>
          Please do not close this page. You cannot restart the timer once you
          have started the test.
        </Typography>
      </div>
      {renderedTest.problems.map((problem) => (
        <Problem key={problem.question} problem={problem} />
      ))}
      <div style={styles.flex}>
        <Button
          style={styles.submit}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth={true}
          size="large"
          disabled={submitting}
        >
          Submit
        </Button>
      </div>
    </Container>
  )
}

export default Test
