import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import _ from "lodash"

const InputAnswer = ({ q }) => {
  return (
    <>
      <div>
        <TextField variant="outlined" />
      </div>
      <div>
        <Button>Submit</Button>
      </div>
    </>
  )
}

const MultipleChoice = ({ q }) => {
  const shuffledOptions = _.shuffle(q.options)
  return (
    <>
      <Typography paragraph>hi</Typography>
      {shuffledOptions.map((o) => (
        <Button variant="outlined">{o}</Button>
      ))}
    </>
  )
}

const Question = ({ q }) => {
  return (
    <>
      <Typography>{q.question}</Typography>
      {q.multi ? <MultipleChoice q={q} /> : <InputAnswer q={q} />}
    </>
  )
}

export default Question
