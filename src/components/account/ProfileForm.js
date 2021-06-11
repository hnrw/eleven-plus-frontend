import React, { useState, useEffect } from "react"
import {
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  Paper,
  Dialog,
  Radio,
} from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import { Link } from "react-router-dom"
import wave from "../../assets/wave.png"
import stripeService from "../../services/stripeService"
import bouncedUserService from "../../services/bouncedUserService"

const styles = {
  container: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  heading: {
    marginBottom: 20,
  },
}
const RegisterForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dob, setDob] = useState(null)
  const [gender, setGender] = useState("")

  document.title = "Waterfront - sign up"

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!(email && name && password)) {
      showError("Please complete your details")
      return
    }

    if (password.length < 3) {
      showError("password must be at least 8 characters")
      return
    }

    try {
      await bouncedUserService.createBouncedUser({ email, parentName: name })
      await stripeService.checkout({
        item: monthly ? "month" : "year",
        email,
        parentName: name,
        password,
      })
    } catch (err) {
      const serverError = err.response && err.response.data.error
      if (serverError === "email already in use") {
        showError("email already in use")
        return
      }

      showError("unexpected error")
    }
  }

  const itemStyle = {
    marginTop: 5,
    marginBottom: 5,
  }

  const Field = ({ display, type, placeholder, value, setFunction }) => {
    return (
      <div>
        <Typography variant="subtitle2">{display}</Typography>
        <TextField
          variant="outlined"
          type={type}
          placeholder={placeholder}
          size="small"
          style={itemStyle}
          fullWidth
          value={value}
          onChange={() => setFunction(event.target.value)}
        />
      </div>
    )
  }

  return (
    <Dialog open maxWidth="sm" fullWidth>
      <Container maxWidth="md" style={styles.container}>
        <div style={styles.heading}>
          <Typography variant="h6">Welcome to Waterfront!</Typography>
          <Typography>
            Please complete your child's information to get started
          </Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <Field
            display="Child's first name"
            value={firstName}
            setFunction={setFirstName}
          />
          <Field
            display="Child's last name"
            value={lastName}
            setFunction={setLastName}
          />
          <Field
            display="Child's date of birth"
            type="date"
            value={dob}
            setFunction={setDob}
          />

          <div>
            <Typography variant="subtitle2">Child's gender</Typography>
            <Typography display="inline">Male</Typography>
            <Radio
              checked={gender === "male"}
              onChange={() => setGender(event.target.value)}
              value="male"
              style={{ marginRight: 10 }}
              color="primary"
            />
            <Typography display="inline">Female</Typography>
            <Radio
              checked={gender === "female"}
              onChange={() => setGender(event.target.value)}
              value="female"
              color="primary"
            />
          </div>

          <div style={{ marginTop: 15, marginBottom: 45 }}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Save
            </Button>
          </div>
        </form>
      </Container>
    </Dialog>
  )
}

export default RegisterForm
