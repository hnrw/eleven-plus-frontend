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
          <Typography>You have a new test ready</Typography>
          <Button
            variant="contained"
            onClick={() => history.push(`tests/${nextTest.id}`)}
          >
            Begin Test
          </Button>
        </>
      )}
    </Container>
  )
}
export default Home
