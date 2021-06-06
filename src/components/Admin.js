import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"

import Test from "./Test"
import testService from "../services/testService"
import { setTest } from "../reducers/testReducer"

const Admin = () => {
  const [tests, setTests] = useState(null)
  const dispatch = useDispatch()
  const test = useSelector((state) => state.test)

  useEffect(() => {
    testService.fetchTests().then((t) => setTests(t))
  }, [])

  const selectTest = (t) => {
    dispatch(setTest(t))
  }

  return (
    <>
      {tests &&
        !test &&
        tests.map((t) => (
          <div key={t.id} style={{ marginBottom: 20 }}>
            <Button onClick={() => selectTest(t)} variant="outlined">
              Test {t.num}
            </Button>
            <Typography>{t.problems.length} questions</Typography>
          </div>
        ))}

      {test && <Test />}
      <Typography>This is line one</Typography>
      <Button>This is a button</Button>
    </>
  )
}

export default Admin
