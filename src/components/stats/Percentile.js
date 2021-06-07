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
        <Typography>Simons's marks are better than</Typography>
        <Typography variant="h3">83%</Typography>
        <Typography>of Waterfront students</Typography>
      </Container>
    </>
  )
}

export default Percentile
