import React, { useEffect, useState } from "react"
import {
  Divider,
  TextField,
  Typography,
  Container,
  Button,
} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch,
  Route,
  useHistory,
} from "react-router-dom"

import Test from "./Test"
import Problem from "./Problem"
import testService from "../services/testService"
import { setTest } from "../reducers/testReducer"

const styles = {
  testTitle: {},
  testDiv: {
    marginTop: 20,
    marginBottom: 20,
  },
  clickableTest: {
    cursor: "pointer",
  },
  divider: { marginTop: 20 },
}

const Admin = () => {
  const [tests, setTests] = useState(null)
  const user = useSelector((state) => state.user)
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

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      try {
        await testService.deleteTest({ token: user.token, id })
        const newTests = tests.filter((t) => t.id !== id)
        setTests(newTests)
      } catch (err) {
        toast.error("error")
      }
    }
  }

  return (
    <Container>
      <Button
        variant="outlined"
        onClick={() => history.push("/admin/new-test")}
      >
        New Test
      </Button>
      {tests &&
        tests.map((t) => (
          <div key={t.id} style={styles.testDiv}>
            <div onClick={() => selectTest(t.id)} style={styles.clickableTest}>
              <Typography variant="h5" style={styles.testTitle}>
                Test {t.num}
              </Typography>
              <Typography>{t.problems.length} questions</Typography>
            </div>
            <div>
              {t.open && (
                <>
                  {t.problems.map((p) => (
                    <>
                      <Problem problem={p} viewOnly />
                    </>
                  ))}

                  <Button
                    variant="outlined"
                    onClick={() => handleDelete(t.id)}
                    color="secondary"
                  >
                    Delete
                  </Button>
                </>
              )}

              <Divider style={styles.divider} />
            </div>
          </div>
        ))}
    </Container>
  )
}

export default Admin
