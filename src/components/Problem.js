import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"

import { selectOption } from "../reducers/testReducer"
import _ from "lodash"

const Problem = ({ problem, viewOnly }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <Typography>{problem.question}</Typography>
      {problem.image && <img style={{ width: 200 }} src={problem.image} />}
      <MultipleChoice problem={problem} viewOnly={viewOnly} />
    </div>
  )
}

const MultipleChoice = ({ problem, viewOnly }) => {
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
            onClick={
              viewOnly
                ? null
                : () => dispatch(selectOption(problem.question, option))
            }
            key={option}
          >
            {option}
          </Button>
        )
      })}
    </>
  )
}

export default Problem
