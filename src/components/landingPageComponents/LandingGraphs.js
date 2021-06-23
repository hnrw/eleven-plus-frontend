import React, { useEffect, useState } from "react"
import {
  TextField,
  Typography,
  Container,
  Button,
  Paper,
} from "@material-ui/core"
import HalfPie from "../stats/HalfPie"
import LandingRadar from "./LandingRadar"
import LandingLineProgress from "./LandingLineProgress"

const styles = {
  section: {
    marginTop: 80,
  },
  header: {
    textAlign: "center",
    marginBottom: 50,
    color: "#121D1E",
  },
}

const LandingGraphs = () => {
  return (
    <Container maxWidth="md">
      <div style={styles.section}>
        <Typography style={styles.header} variant="h3">
          <b>Detailed breakdown of your child's strength and weaknesses</b>
        </Typography>
        <Typography style={styles.header} variant="h3">
          {/* <b>Detailed Breakdown of your Child's Strength and Weaknesses</b> */}
        </Typography>
        <LandingRadar />
      </div>

      <div style={styles.section}>
        <Typography style={styles.header} variant="h3">
          <b>Track your child's progress over time</b>
        </Typography>
        <LandingLineProgress />
      </div>

      <div style={styles.section}>
        <Typography style={styles.header} variant="h3">
          <b>See how your child ranks against the competition</b>
        </Typography>
        {/* <Percentile /> */}
        <HalfPie />
      </div>
    </Container>
  )
}

export default LandingGraphs
