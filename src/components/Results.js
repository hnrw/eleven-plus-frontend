import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"

import Answers from "./Answers"

const Results = () => {
  const test = useSelector((state) => state.test)

  const marks = test.filter((q) => q.selected === q.correct).length
  const totalMarks = test.length
  const percent = Math.round((100 / totalMarks) * marks)

  return (
    <>
      <Typography>{`${marks}/${totalMarks}`}</Typography>
      <Typography>{percent}%</Typography>
      <Answers />
    </>
  )
}

export default Results
