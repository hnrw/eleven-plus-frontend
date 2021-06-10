import React from "react"
import { Typography, Container } from "@material-ui/core"

const Answers = ({ gradedProblems }) => {
  return (
    <Container>
      {gradedProblems.map((problem, index) => {
        const correct = problem.correct === problem.selected
        return (
          <div key={problem.question} style={{ marginBottom: 20 }}>
            <Typography>
              <b>Question {index + 1}</b>
            </Typography>
            <Typography>{problem.question}</Typography>
            <Typography>
              <i>{problem.selected} </i>
              {correct ? "✔️" : "❌"}
            </Typography>
            {!correct && (
              <Typography>
                The correct answer was <b>{problem.correct}</b>
              </Typography>
            )}
          </div>
        )
      })}
    </Container>
  )
}

export default Answers
