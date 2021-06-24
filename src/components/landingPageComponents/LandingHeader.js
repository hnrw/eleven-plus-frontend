import React from "react"
import { Typography, Button, Container, Grid } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import stripeService from "../../services/stripeService"

const styles = {
  button: {
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20,
    textTransform: "none",
  },
  buttonTop: {
    fontFamily: "inherit",
    fontSize: 34,
    margin: 0,
  },
  buttonBottom: {
    fontFamily: "inherit",
    fontSize: 16,
    margin: 0,
  },
}

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
              <b>Secure your child's grammar school future</b>
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#121D1E", fontSize: 20, marginBottom: 20 }}
            >
              Only 1 in 10 children who take the 11+ get accepted to grammar
              schools. See how your child ranks against the competition.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              // style={{ marginBottom: 20, paddingTop: 10, paddingBottom: 10 }}
              style={styles.button}
              onClick={() => history.push("/signup")}
              fullWidth
            >
              {/* Get started today */}
              <Typography component="span">
                <pre style={styles.buttonTop}>Get started today</pre>
                <pre style={styles.buttonBottom}>
                  Try Waterfront free for 14-days
                </pre>
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            {!mobile && (
              <img
                style={{ width: "75%", marginLeft: 20 }}
                src="https://i.imgur.com/QQeT3fk.png"
                alt="waterfront"
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default LandingHeader
