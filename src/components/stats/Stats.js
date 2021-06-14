import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { ResponsiveRadar } from "@nivo/radar"

import Radar from "./Radar"
import HalfPie from "./HalfPie"
import Percentile from "./Percentile"

const Stats = () => {
  return (
    <>
      {/* <Radar /> */}
      <Percentile />
      <HalfPie />
      <Container maxWidth="sm" style={{ marginBottom: 40 }}>
        <Typography>
          Only 1 in 10 children who take the 11+ exam get into grammar schools.
          You should aim to be in the blue section - the top 90%
        </Typography>
      </Container>
    </>
  )
}

export default Stats
