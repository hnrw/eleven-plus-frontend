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
    marginBottom: 30,
    color: "#121D1E",
  },
  subHeader: {
    textAlign: "center",
    marginBottom: 50,
    fontSize: 22,
  },
}

const LandingGraphs = () => {
  return (
    <Container maxWidth="md">
      <div style={styles.section}>
        <Typography style={styles.header} variant="h3">
          <b>Track your child's progress over time</b>
        </Typography>
        <Typography color="textSecondary" style={styles.subHeader}>
          Experts recommend starting 11+ prepartion in Year 3 - Waterfront lets
          you easily visualise your child's progress
        </Typography>
        <LandingLineProgress />
      </div>

      <div style={styles.section}>
        <Typography style={styles.header} variant="h3">
          <b>Detailed breakdown of your child's strength and weaknesses</b>
        </Typography>
        <Typography color="textSecondary" style={styles.subHeader}>
          Our insights reveal areas that require work to help you perfect the
          study plan for your child
        </Typography>
        <LandingRadar />
      </div>

      <div style={styles.section}>
        <Typography style={styles.header} variant="h3">
          <b>See how your child ranks against the competition</b>
        </Typography>
        <Typography color="textSecondary" style={styles.subHeader}>
          For every 10 children who take the 11+ exam, only one child gets a
          grammar school spot.
        </Typography>
        {/* <Percentile /> */}
        <HalfPie />
      </div>

      <div style={styles.section}>
        <Typography style={styles.header} variant="h3">
          <b>One new expertly written maths test every week</b>
        </Typography>
        <Typography color="textSecondary" style={styles.subHeader}>
          Develop your child's mathematical problem solving skils - expertly
          tailored for real 11+ exams
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 80,
          }}
        >
          <img src="https://i.imgur.com/Fn56Ft1.png" style={{ width: 800 }} />
        </div>
      </div>
    </Container>
  )
}

export default LandingGraphs
