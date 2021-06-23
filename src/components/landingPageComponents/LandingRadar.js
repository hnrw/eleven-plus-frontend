import React, { useEffect, useState, useRef } from "react"
import {
  TextField,
  Typography,
  Container,
  Button,
  Paper,
} from "@material-ui/core"

import Radar from "../stats/Radar"

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

const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
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

// const radarData = [
//   {
//     category: "fractions",
//     Oli: 88,
//     Average: 78,
//   },
//   {
//     category: "algebra",
//     Oli: 86,
//     Average: 60,
//   },
//   {
//     category: "numbers",
//     Oli: 83,
//     Average: 61,
//   },
//   {
//     category: "statistics",
//     Oli: 74,
//     Average: 72,
//   },
//   {
//     category: "multiplication and division",
//     Oli: 73,
//     Average: 77,
//   },
//   {
//     category: "addition and subtraction",
//     Oli: 92,
//     Average: 79,
//   },
//   {
//     category: "measurement",
//     Oli: 75,
//     Average: 89,
//   },
//   {
//     category: "ratio and proportion",
//     Oli: 84,
//     Average: 85,
//   },
//   {
//     category: "geometry",
//     Oli: 70,
//     Average: 83,
//   },
// ]
