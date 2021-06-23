import React, { useEffect, useState } from "react"
import {
  TextField,
  Typography,
  Container,
  Button,
  Paper,
} from "@material-ui/core"
import LineProgress from "../stats/LineProgress"
import useInterval from "../../hooks/useInterval"

const genData = (data) => {
  let d = data
  if (d.length > 12) {
    d = [
      {
        x: 1,
        y: 10,
      },
    ]
  }

  const lastEntry = d[d.length - 1]
  const nextIndex = lastEntry.x + 1
  const max = Math.min(100, lastEntry.y + 20)

  d = d.concat({
    x: nextIndex,
    y: rand(lastEntry.y, max),
  })
  return d
}

const initData = [
  {
    x: 1,
    y: 10,
  },
  {
    x: 2,
    y: 20,
  },
]

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const LandingLineProgress = () => {
  const [lineData, setLineData] = useState(initData)

  useInterval(() => {
    setLineData(() => genData(lineData))
  }, 1000)

  const data = [
    {
      id: "maths",
      data: lineData,
    },
  ]

  return (
    <>
      <LineProgress data={data} bottomLabel="week" />
    </>
  )
}

export default LandingLineProgress
