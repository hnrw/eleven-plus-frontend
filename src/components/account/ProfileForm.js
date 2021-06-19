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
import dayjs from "dayjs"
import wave from "../../assets/wave.png"
import stripeService from "../../services/stripeService"
import bouncedUserService from "../../services/bouncedUserService"
import profileService from "../../services/profileService"
import { setProfile } from "../../reducers/profileReducer"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"

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
  const [dob, setDob] = useState("2010-01-01")
  const [gender, setGender] = useState("")
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  document.title = "Waterfront - sign up"

  const handleSubmit = async (event) => {
    event.preventDefault()
    // if (!(email && name && password)) {
    //   showError("Please complete your details")
    //   return
    // }

    try {
      const p = await profileService.updateProfile({
        token: user.token,
        profileData: {
          firstName,
          lastName,
          dob: dayjs(dob).toDate(),
          gender,
        },
      })

      dispatch(setProfile(p))
    } catch (err) {
      toast.error("there was an unexpected error")
    }
  }

  const itemStyle = {
    marginTop: 5,
    marginBottom: 5,
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
          <div>
            <Typography variant="subtitle2">Child's first name</Typography>
            <TextField
              variant="outlined"
              size="small"
              style={itemStyle}
              fullWidth
              value={firstName}
              onChange={() => setFirstName(event.target.value)}
              required
            />
          </div>
          <div>
            <Typography variant="subtitle2">Child's last name</Typography>
            <TextField
              variant="outlined"
              size="small"
              style={itemStyle}
              fullWidth
              value={lastName}
              onChange={() => setLastName(event.target.value)}
              required
            />
          </div>
          <div>
            <Typography variant="subtitle2">Child's date of birth</Typography>
            <TextField
              variant="outlined"
              type="date"
              size="small"
              style={itemStyle}
              fullWidth
              onChange={() => setDob(event.target.value)}
              defaultValue="2010-01-01"
              required
              // InputLabelProps={{ shrink: true, required: true }}
            />
          </div>
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
