import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { ResponsiveRadar } from "@nivo/radar"

import Radar from "./Radar"
import HalfPie from "./HalfPie"
import Percentile from "./Percentile"


const Stats = () => {
  return (
    <>
      <Radar />
      <Percentile />
      <HalfPie />
    </>
  )
}

export default Stats
