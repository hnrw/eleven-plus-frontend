import React, { useState } from "react"
import { TextField, Button, Typography } from "@material-ui/core"
import { Alert } from "@material-ui/lab"

// import emailService from "../services/emailService"

const ForgotPassword = () => {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  document.title = "Waterfront - Forgot Password"

  const handleSubmit = async (event) => {
    event.preventDefault()
    const email = event.target.email.value

    try {
      await emailService.requestPasswordEmail(email)
      setSuccess(
        `Password reset email sent to ${email}, please wait up to 2m and check your spam folder`
      )
      setError(null)
    } catch (exception) {
      setError("Email address doesn't belong to an account")
    }
  }

  return (
    <div>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <form onSubmit={handleSubmit}>
        <div>
          <Typography variant="h4">Reset your password</Typography>
        </div>
        <div>
          <Typography variant="body1">
            Enter the email address associated with your account
          </Typography>
        </div>
        <div>
          <TextField name="email" />
        </div>
        <Button variant="contained" type="submit">
          Reset
        </Button>
      </form>
    </div>
  )
}

export default ForgotPassword
