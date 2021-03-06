import React, { useEffect, useState } from "react"
import { Divider, Typography, Container, Button } from "@material-ui/core"
import { useSelector } from "react-redux"
import { toast } from "react-hot-toast"
import { useHistory } from "react-router-dom"

import Problem from "./Problem"
import testService from "../services/testService"

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
  document.title = "Waterfront"

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
                    <div key={p.question}>
                      <Problem problem={p} viewOnly />
                    </div>
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
