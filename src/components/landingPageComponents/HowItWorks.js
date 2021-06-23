import React from "react"
import { Typography, Container, Grid } from "@material-ui/core"

const HowItWorks = ({ textBlack }) => {
  return (
    <Container
      maxWidth={false}
      style={{
        // backgroundColor: "#FFEEE2",
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" style={{ marginBottom: 20 }}>
          How it works
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography
              style={{ fontSize: 60, textAlign: "center", color: textBlack }}
            >
              1
            </Typography>
            <Typography align="center" paragraph variant="body1">
              Every week your child completes an 11+ maths exam on our website
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography style={{ fontSize: 60, textAlign: "center" }}>
              2
            </Typography>
            <Typography align="center" paragraph variant="body1">
              Compare their results to other children competing for grammar
              school spots
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography style={{ fontSize: 60, textAlign: "center" }}>
              3
            </Typography>
            <Typography align="center" paragraph variant="body1">
              Track your child's weekly progress as their results improve
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default HowItWorks
