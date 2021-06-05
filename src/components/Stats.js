import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"

const Stats = () => {
  const percentile = 90

  const radar = [
    {
      skill: "Arithmatic",
      rating: 50,
    },
    {
      skill: "Numbers",
      rating: 86,
    },
    {
      skill: "Shapes",
      rating: 30,
    },
    {
      skill: "Units",
      rating: 60,
    },
  ]
  return (
    <>
      <Typography>This is line one</Typography>
      <Button>This is a button</Button>
    </>
  )
}

export default Stats
