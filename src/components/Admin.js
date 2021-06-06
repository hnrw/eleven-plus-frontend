import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"

import Test from "./Test"
import testService from "../services/testService"
import { setTest } from "../reducers/testReducer"

const Admin = () => {
  const [tests, setTests] = useState(null)
  console.log(tests)
  const dispatch = useDispatch()
  const test = useSelector((state) => state.test)

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
    <>
      {tests &&
        tests.map((t) => (
          <div key={t.id} style={{ marginBottom: 20 }}>
            <Button onClick={() => selectTest(t.id)} variant="outlined">
              Test {t.num}
            </Button>
            <Typography>{t.problems.length} questions</Typography>

            {t.open && <Test manualTest={t} />}
          </div>
        ))}

      <Typography>This is line one</Typography>
      <Button>This is a button</Button>
    </>
  )
}

export default Admin
