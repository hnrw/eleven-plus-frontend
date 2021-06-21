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
  cursor: "pointer",
}

const styles = {
  paper: { ...paper, border: "2px solid white" }, // invisible border preserve space
  activePaper: { ...paper, border: "2px solid #303F9F" },
  button: { marginTop: 10 },
  banner: {
    border: "1px solid #BCC3BC",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  centerText: {},
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
        <Typography variant="subtitle2">
          Which plan works best for you?
        </Typography>
        {canceled ? (
          <Typography>Choose your plan to resume your subscription</Typography>
        ) : (
          <Typography>All plans come with a 7 day free trial.</Typography>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
      </Container>
    </>
  )
}

export default SelectPlan
