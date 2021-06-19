import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"

const SelectPlan = () => {
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
        <Paper
          onClick={() => setMonthly(true)}
          style={monthly ? styles.activePaper : styles.paper}
        >
          <Typography>Monthly</Typography>
          <Typography>£69 / month</Typography>
        </Paper>
        <Paper
          onClick={() => setMonthly(false)}
          style={!monthly ? styles.activePaper : styles.paper}
        >
          <Typography>Annual (2 months free)</Typography>
          <Typography>£57 / month</Typography>
        </Paper>
      </div>
    </Container>
  )
}

export default SelectPlan
