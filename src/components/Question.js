import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"

import { selectOption } from "../reducers/testsReducer"
import _ from "lodash"

const MultipleChoice = ({ q }) => {
  const dispatch = useDispatch()

  const [shuffledOptions, setShuffledOptions] = useState([])

  useEffect(() => {
    setShuffledOptions(_.shuffle(q.options))
  }, [])

  return (
    <>
      {shuffledOptions.map((option) => {
        const selected = q.selected === option
        return (
          <Button
            variant={selected ? "contained" : "outlined"}
            color={selected ? "primary" : "default"}
            onClick={() => dispatch(selectOption(q.question, option))}
          >
            {option}
          </Button>
        )
      })}
    </>
  )
}

const Question = ({ q }) => {
  return (
    <>
      <Typography>{q.question}</Typography>
      {q.image && <img style={{ width: 200 }} src={q.image} />}
      {q.multi ? <MultipleChoice q={q} /> : <InputAnswer q={q} />}
    </>
  )
}

export default Question
