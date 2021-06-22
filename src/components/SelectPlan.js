import React, { useEffect, useState } from "react"
import {
  TextField,
  Typography,
  Container,
  Button,
  Paper,
} from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import stripeService from "../services/stripeService"
import userService from "../services/userService"
import { setStripe } from "../reducers/stripeReducer"
import { useDispatch, useSelector } from "react-redux"

const paper = {
  marginTop: 20,
  paddingTop: 20,
  paddingBottom: 20,
  width: 280,
  textAlign: "center",
}

const styles = {
  paper: {
    ...paper,
    border: "2px solid white",
    margin: 10,
  },
  button: {
    marginTop: 10,
  },
  banner: {
    border: "1px solid #BCC3BC",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  centerText: {
    textAlign: "center",
    marginBottom: 10,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}

const SelectPlan = ({ canceled }) => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const interval = setInterval(async () => {
    if (user) {
      const stripe = await userService.getStripe(user.token)
      if (stripe.stripeId) {
        dispatch(setStripe(stripe))
        clearInterval(interval)
      }
    }
  }, 1000)

  return (
    <>
      <Alert style={styles.banner}>
        Please choose a plan to continue using Waterfront
      </Alert>
      <Container>
        <Typography variant="h4" color="textPrimary" style={styles.centerText}>
          <b>Choose a plan</b>
        </Typography>
        {canceled ? (
          <Typography style={styles.centerText}>
            Choose your plan to resume your subscription
          </Typography>
        ) : (
          <>
            <Typography style={styles.centerText}>
              Don't worry, you can change your plan at any time
            </Typography>
            <Typography style={styles.centerText}>
              All plans come with a <b>7 day free trial</b>
            </Typography>
          </>
        )}
        <div style={styles.flexRow}>
          <Paper style={styles.paper}>
            <Typography>Monthly</Typography>
            <Typography>£69 / month</Typography>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              style={styles.button}
              onClick={() =>
                stripeService.checkout({ item: "month", email: user.email })
              }
            >
              Choose Plan
            </Button>
          </Paper>
          <Paper style={styles.paper}>
            <Typography>Annual (2 months free)</Typography>
            <Typography>£57 / month</Typography>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              style={styles.button}
              onClick={() =>
                stripeService.checkout({ item: "year", email: user.email })
              }
            >
              Choose Plan
            </Button>
          </Paper>
        </div>
        <Container maxWidth="sm">
          <Typography style={styles.centerText}>
            One mock maths test per week
          </Typography>
          <Typography style={styles.centerText}>
            See how your child's results compare to other 11+ students
          </Typography>
          <Typography style={styles.centerText}>Detailed stats</Typography>
        </Container>
      </Container>
    </>
  )
}

export default SelectPlan
