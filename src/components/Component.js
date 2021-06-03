import React from "react"
import {
  TextField,
  Container,
  Button,
  Typography,
  Grid,
} from "@material-ui/core"

import Question from "./Question"

const questions = [
  {
    question: "What is 2 + 3?",
    correct: 5,
  },
  {
    question: "What is 2 + 3?",
    multi: true,
    correct: 5,
    options: [5, 12, 6, 1],
  },
]

const Component = () => {
  return (
    <Container>
      {questions.map((q) => (
        <Question q={q} />
      ))}
    </Container>
  )
}

export default Component
