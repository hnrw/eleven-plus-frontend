import React from "react"
import { Typography, Container, Grid } from "@material-ui/core"

const styles = {
  text: {
    fontSize: 22,
    color: "#121D1E",
  },
}
const HowItWorks = ({ textBlack }) => {
  return (
    <Container
      maxWidth={false}
      style={{
        backgroundColor: "#FFEEE2",
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          style={{ marginBottom: 20, color: textBlack }}
        >
          <b>How it works</b>
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography
              style={{ fontSize: 60, textAlign: "center", color: textBlack }}
            >
              1
            </Typography>
            <Typography align="center" paragraph style={styles.text}>
              Every week your child completes an 11+ maths exam on our website
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography style={{ fontSize: 60, textAlign: "center" }}>
              2
            </Typography>
            <Typography align="center" paragraph style={styles.text}>
              Compare their results to other children competing for grammar
              school spots
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography style={{ fontSize: 60, textAlign: "center" }}>
              3
            </Typography>
            <Typography align="center" paragraph style={styles.text}>
              Use our data-driven insights to give you the insights to perfect your child's preparation
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default HowItWorks
