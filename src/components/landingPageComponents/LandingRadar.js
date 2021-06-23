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

const initData = [
  {
    category: "fractions",
    Oli: rand(10, 30),
    Average: 60,
  },
  {
    category: "algebra",
    Oli: rand(10, 30),
    Average: 65,
  },
  {
    category: "numbers",
    Oli: rand(10, 30),
    Average: 80,
  },
  {
    category: "statistics",
    Oli: rand(10, 30),
    Average: 74,
  },
  {
    category: "multiplication and division",
    Oli: rand(10, 30),
    Average: 69,
  },
  {
    category: "addition and subtraction",
    Oli: rand(10, 30),
    Average: 85,
  },
  {
    category: "measurement",
    Oli: rand(10, 30),
    Average: 89,
  },
  {
    category: "ratio and proportion",
    Oli: rand(10, 30),
    Average: 75,
  },
  {
    category: "geometry",
    Oli: rand(10, 30),
    Average: 62,
  },
]

const genData = (currentData, iters) => {
  if (iters > 11) {
    return initData
  }

  const foo = currentData.map((d) => {
    const currentValue = d.Oli
    const maxValue = Math.min(100, currentValue + 20)
    const newValue = rand(currentValue, maxValue)
    return {
      ...d,
      Oli: newValue,
    }
  })
  return foo
}

const LandingRadar = () => {
  const [radarData, setRadarData] = useState(initData)
  const [iters, setIters] = useState(0)

  useInterval(() => {
    setRadarData(() => genData(radarData, iters))
    setIters(() => iters + 1)
    if (iters > 11) {
      setIters(0)
    }
  }, 1000)

  return (
    <>
      <Radar data={radarData} />
    </>
  )
}

export default LandingRadar
