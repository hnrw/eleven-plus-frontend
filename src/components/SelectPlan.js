import React, { useEffect, useState } from "react"
import {
  TextField,
  Typography,
  Container,
  Button,
  Paper,
} from "@material-ui/core"
import dayjs from "dayjs"
import { Alert } from "@material-ui/lab"
import stripeService from "../services/stripeService"
import userService from "../services/userService"
import { setStripe } from "../reducers/stripeReducer"
import { useDispatch, useSelector } from "react-redux"
import useInterval from "../hooks/useInterval"

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
  bullets: {
    fontSize: 16,
    marginBottom: 10,
  },
  bulletHeading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bulletsContainer: {
    marginTop: 40,
    marginLeft: 10,
  },
  questionsContainer: {
    marginTop: 40,
    marginRight: 10,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
}

const SelectPlan = ({ canceled }) => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useInterval(async () => {
    if (user) {
      const stripe = await userService.getStripe(user.token)
      if (stripe.stripeId) {
        dispatch(setStripe(stripe))
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
              All plans come with a <b>14-day free trial</b>
            </Typography>
          </>
        )}
        <div style={styles.flexRow}>
          <Paper style={styles.paper}>
            <Typography style={styles.subHeading}>Monthly</Typography>
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
            <Typography style={styles.subHeading}>
              Annual (2 months free)
            </Typography>
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
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
          }}
          maxWidth="md"
        >
          <Questions />
          <Bullets />
        </Container>
      </Container>
    </>
  )
}

const Bullets = () => {
  return (
    <Container style={styles.bulletsContainer} maxWidth="xs">
      <Typography paragraph color="textPrimary" style={styles.bulletHeading}>
        Included with your subscription:
      </Typography>
      <Typography style={styles.bullets}>
        ✔️ One new 11+ maths mock every week
      </Typography>
      <Typography style={styles.bullets}>
        ✔️Compare your child's results to other 11+ students
      </Typography>
      <Typography style={styles.bullets}>
        ✔️Detailed result analytics
      </Typography>
      <Typography style={styles.bullets}>
        ✔️ Retry tests an unlimited amount
      </Typography>
      <Typography style={styles.bullets}>
        ✔️ Track your child's progress
      </Typography>
      <Typography style={styles.bullets}>
        ✔️ Rewards and certificates for top students
      </Typography>
      <Typography style={styles.bullets} paragraph>
        ✔️ ️Easy to use online test-taking platform
      </Typography>
      <Typography paragraph color="textPrimary" style={styles.bulletHeading}>
        Coming soon:
      </Typography>
      <Typography style={styles.bullets}>⏳ Daily practice problems</Typography>
      <Typography style={styles.bullets}>
        ⏳ AI problems tailored for your child's weaknesses
      </Typography>
      <Typography style={styles.bullets}>
        ⏳ Ranking and level up system
      </Typography>
    </Container>
  )
}

const Questions = () => {
  const date = dayjs().add(7, "days").format("MMM D, YYYY")
  return (
    <Container maxWidth="xs" style={styles.questionsContainer}>
      <Typography style={styles.subHeading} color="textPrimary">
        What's included in the free trial?
      </Typography>
      <Typography paragraph>
        Your 14-Day Trial is completely free and gives you full access to the
        Waterfront platform until <b>{date}</b>. Cancel any time.
      </Typography>
      <Typography style={styles.subHeading} color="textPrimary">
        Will my card be charged right now?
      </Typography>
      <Typography paragraph>
        No. You won’t be charged until after your free trial ends on{" "}
        <b>{date}</b>. After your free trial, your plan will continue until you
        decide to downgrade or cancel.
      </Typography>
      <Typography style={styles.subHeading} color="textPrimary">
        What if I change my mind - can I change or cancel my plan?
      </Typography>
      <Typography paragraph>
        Yes, you cancel your subscription or switch to a new plan anytime from
        your account dashboard with zero hassle.
      </Typography>
    </Container>
  )
}
export default SelectPlan
