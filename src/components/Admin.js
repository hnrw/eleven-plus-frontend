import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch,
  Route,
  useHistory,
} from "react-router-dom"

import Test from "./Test"
import testService from "../services/testService"
import { setTest } from "../reducers/testReducer"

const styles = {
  testTitle: {
    textDecoration: "underlined",
    cursor: "pointer",
  },
  testDiv: {
    marginTop: 20,
    marginBottom: 20,
  },
}

const Admin = () => {
  const [tests, setTests] = useState(null)
  const history = useHistory()

  useEffect(() => {
    testService.fetchTests().then((t) => setTests(t))
  }, [])

  const selectTest = (id) => {
    const newTests = tests.map((t) =>
      t.id === id ? { ...t, open: !t.open } : t
    )
    setTests(newTests)
  }

  return (
    <Container>
      <Button variant="outlined" Click={() => history.push("/admin/new-test")}>
        New Test
      </Button>
      {tests &&
        tests.map((t) => (
          <div key={t.id} style={styles.testDiv}>
            <Typography
              variant="h5"
              style={styles.testTitle}
              onClick={() => selectTest(t.id)}
            >
              Test {t.num}
            </Typography>
            <Typography>{t.problems.length} questions</Typography>

            {t.open && <Test manualTest={t} />}
          </div>
        ))}
    </Container>
  )
}

export default Admin
