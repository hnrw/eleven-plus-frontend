import React, { useEffect, useState, useRef } from "react"
import {
  TextField,
  Typography,
  Container,
  Button,
  Paper,
} from "@material-ui/core"

import Radar from "../stats/Radar"
import useInterval from "../../hooks/useInterval"

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const genData = () => {
  return [
    {
      category: "fractions",
      Oli: rand(50, 100),
      Average: 60,
    },
    {
      category: "algebra",
      Oli: rand(50, 100),
      Average: 65,
    },
    {
      category: "numbers",
      Oli: rand(50, 100),
      Average: 80,
    },
    {
      category: "statistics",
      Oli: rand(50, 100),
      Average: 74,
    },
    {
      category: "multiplication and division",
      Oli: rand(50, 100),
      Average: 69,
    },
    {
      category: "addition and subtraction",
      Oli: rand(50, 100),
      Average: 85,
    },
    {
      category: "measurement",
      Oli: rand(50, 100),
      Average: 89,
    },
    {
      category: "ratio and proportion",
      Oli: rand(50, 100),
      Average: 75,
    },
    {
      category: "geometry",
      Oli: rand(50, 100),
      Average: 62,
    },
  ]
}

const LandingRadar = () => {
  const [radarData, setRadarData] = useState(genData)

  useInterval(() => {
    setRadarData(genData)
  }, 1500)

  return (
    <>
      <Radar data={radarData} />
    </>
  )
}

export default LandingRadar
