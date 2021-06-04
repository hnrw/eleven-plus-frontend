import React, { useState } from "react"
import {
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  Container,
} from "@material-ui/core"
import { Link, useParams } from "react-router-dom"
import { Alert } from "@material-ui/lab"
import passwordService from "../services/passwordService"

const ResetPassword = () => {
  const params = useParams()
  const { token, id } = params
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [newPassword, setNewPassword] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")
  document.title = "Backstage - reset password"

  const paperStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30,
  }

  const itemStyle = {
    marginTop: 5,
    marginBottom: 5,
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!(newPassword === verifyPassword) || newPassword.length < 1) {
      setError("Passwords empty or do not match")
      setTimeout(() => {
        setError(null)
      }, 3000)
      return
    }

    try {
      await passwordService.resetPassword(token, id, newPassword)
      setNewPassword("")
      setVerifyPassword("")
      setSuccess(
        "Your password has has been successfully changed. Click Here to log in."
      )
      setError(null)
    } catch (exception) {
      setError("The reset link has already been used or is invalid")
    }
  }

  return (
    <div>
      <div>
        {error && <Alert severity="error">{error}</Alert>}
        {success && (
          <Link to="/">
            <Alert severity="success">{success}</Alert>
          </Link>
        )}
        <Grid container style={{ marginTop: "10vh" }}>
          <Grid item sm={4} xs={2} />
          <Grid item sm={4} xs={8}>
            <Container maxWidth="xs">
              <Paper elevation={3} style={paperStyle}>
                <Typography
                  variant="h6"
                  style={{ marginTop: 45, marginBottom: 20 }}
                >
                  Enter your new password
                </Typography>
                <form onSubmit={handleSubmit}>
                  <div>
                    <TextField
                      variant="outlined"
                      type="password"
                      label="New Password"
                      value={newPassword}
                      onChange={({ target }) => setNewPassword(target.value)}
                      style={itemStyle}
                    />
                  </div>
                  <div>
                    <TextField
                      variant="outlined"
                      type="password"
                      label="Verify Password"
                      value={verifyPassword}
                      onChange={({ target }) => setVerifyPassword(target.value)}
                      style={itemStyle}
                    />
                  </div>
                  <div style={{ marginTop: 30, marginBottom: 45 }}>
                    <Button type="submit" variant="contained" fullWidth>
                      Save
                    </Button>
                  </div>
                </form>
              </Paper>
            </Container>
          </Grid>
          <Grid item sm={4} xs={2} />
        </Grid>
      </div>
    </div>
  )
}

export default ResetPassword
