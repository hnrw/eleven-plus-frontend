import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"

import { selectOption } from "../reducers/testsReducer"
import _ from "lodash"

const MultipleChoice = ({ problem }) => {
  const dispatch = useDispatch()

  const [shuffledOptions, setShuffledOptions] = useState([])

  useEffect(() => {
    setShuffledOptions(_.shuffle(problem.options))
  }, [])

  return (
    <>
      {shuffledOptions.map((option) => {
        const selected = problem.selected === option
        return (
          <Button
            variant={selected ? "contained" : "outlined"}
            color={selected ? "primary" : "default"}
            onClick={() => dispatch(selectOption(problem.question, option))}
          >
            {option}
          </Button>
        )
      })}
    </>
  )
}

const Problem = ({ problem }) => {
  return (
    <>
      <Typography>{problem.question}</Typography>
      {problem.image && <img style={{ width: 200 }} src={problem.image} />}
      <MultipleChoice problem={problem} />
    </>
  )
}

export default Problem
