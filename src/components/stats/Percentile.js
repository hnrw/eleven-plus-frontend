import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}

const Percentile = () => {
  return (
    <>
      <Container style={styles.container}>
        <Typography variant="h4">Oli's results are better than</Typography>
        <Typography variant="h1">83%</Typography>
        <Typography>of Waterfront students</Typography>
      </Container>
    </>
  )
}

export default Percentile
