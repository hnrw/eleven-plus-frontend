import React from "react"
import { Typography, Button, Container, Grid } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import stripeService from "../services/stripeService"

const LandingHeader = ({ textBlack }) => {
  const history = useHistory()
  const mobile = useSelector((state) => state.mobile)

  return (
    <Container
      maxWidth={false}
      disableGutters
      style={{ padding: 0, margin: 0, backgroundColor: "#D8E2FC" }}
    >
      <Container maxWidth="md" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h3"
              style={{ color: textBlack, letterSpacing: 3, marginBottom: 20 }}
            >
              <b>Track your child's 11+ exam preparation </b>
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#121D1E", fontSize: 20, marginBottom: 20 }}
            >
              Only 1 in 10 children who take the 11+ qualify for grammar
              schools. See how your child is doing.
              {/* See how your child ranks against the competition. */}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginBottom: 20, paddingTop: 10, paddingBottom: 10 }}
              onClick={() => history.push("/signup")}
            >
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            {!mobile && (
              <img
                style={{ width: "75%", marginLeft: 20 }}
                src="https://i.imgur.com/QQeT3fk.png"
                alt="backstage"
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default LandingHeader
