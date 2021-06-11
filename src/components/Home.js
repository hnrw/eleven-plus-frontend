import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, Link, Switch, Route, useHistory } from "react-router-dom"
import testService from "../services/testService"

const Home = () => {
  const history = useHistory()
  document.title = "Waterfront"
  const [nextTest, setNextTest] = useState(null)
  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (user) {
      testService.getNextTest(user.token).then((t) => setNextTest(t))
    }
  }, [user])

  if (!nextTest) return null

  const startTest = () => {
    if (
      window.confirm(
        "The test will take 45m and you will not be able to pause or restart the test. Are you ready to begin?"
      )
    ) {
      history.push(`tests/${nextTest.id}`)
    }
  }

  return (
    <Container>
      {nextTest === "no more tests" ? (
        <>
          <Typography>The next test will be released a week.</Typography>
          <Typography>
            We will send you an email when you it's avaiable
          </Typography>
        </>
      ) : (
        <>
          <Typography paragraph>You have a new test ready.</Typography>
          <Typography paragraph>
            Please make sure you have 45m to take the test.
          </Typography>
          <Typography paragraph>
            Once you begin, you will not be able to pause or restart the test.
          </Typography>
          <Button variant="contained" onClick={startTest}>
            Begin Test
          </Button>
        </>
      )}
    </Container>
  )
}
export default Home
