import React from "react"
import { Typography, Container } from "@material-ui/core"
import _ from "lodash"

const Answers = ({ gradedProblems }) => {
  const orderedGradedProblems = _.sortBy(gradedProblems, (p) => p.num)

  const isCorrect = (p) => {
    if (p.multi) {
      return p.selected === p.correct
    }
    return Number(p.selected) === Number(p.correct)
  }

  return (
    <Container>
      {orderedGradedProblems.map((problem, index) => {
        const correct = isCorrect(problem)
        return (
          <div key={problem.question} style={{ marginBottom: 20 }}>
            <Typography>
              <b>Question {index + 1}</b>
            </Typography>
            <Typography>{problem.question}</Typography>
            <Typography>
              <i>{problem.selected || "You did not answer this question"} </i>
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
