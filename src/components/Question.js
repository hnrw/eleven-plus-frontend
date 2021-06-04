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
  const [activeButton, setActiveButton] = useState(null)
  const [shuffledOptions, setShuffledOptions] = useState([])

  useEffect(() => {
    setShuffledOptions(_.shuffle(q.options))
  }, [])

  return (
    <>
      <Typography paragraph>hi</Typography>
      {shuffledOptions.map((o) => {
        const selected = activeButton === o
        console.log(selected)
        return (
          <Button
            variant={selected ? "contained" : "outlined"}
            color={selected ? "primary" : "default"}
            onClick={() => setActiveButton(o)}
          >
            {o}
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
