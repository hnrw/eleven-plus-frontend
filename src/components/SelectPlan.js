import React, { useEffect, useState } from "react"
import {
  TextField,
  Typography,
  Container,
  Button,
  Paper,
} from "@material-ui/core"
import stripeService from "../services/stripeService"
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
}

const SelectPlan = () => {
  const user = useSelector((state) => state.user)
  return (
    <Container>
      <Typography variant="subtitle2">
        Which plan works best for you?
      </Typography>
      <Typography>All plans come with a 7 day free trial.</Typography>
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
              stripeService.checkout({ item: "montly", email: user.email })
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
          >
            Choose Plan
          </Button>
        </Paper>
      </div>
    </Container>
  )
}

export default SelectPlan
